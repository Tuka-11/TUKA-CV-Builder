"use client";

import { useRef, useState } from "react";

const SIZE = 420;

/**
 * Зураг оруулах: файл сонгох эсвэл чирж тавих, томруулах, хөндлөн/босоо байрлуулах.
 * Үр дүн нь 420×420 JPEG data URL болж `onChange`-ээр буцна.
 */
export default function PhotoField({ photo, onChange }: { photo: string; onChange: (v: string) => void }) {
  const src = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [px, setPx] = useState(0.5);
  const [py, setPy] = useState(0.5);
  const [err, setErr] = useState("");
  const [over, setOver] = useState(false);

  function crop(z: number, x: number, y: number) {
    const img = src.current;
    if (!img) return;
    const s = Math.min(img.width, img.height) / z;
    const c = document.createElement("canvas");
    c.width = c.height = SIZE;
    c.getContext("2d")?.drawImage(img, (img.width - s) * x, (img.height - s) * y, s, s, 0, 0, SIZE, SIZE);
    onChange(c.toDataURL("image/jpeg", 0.88));
  }

  function load(file: File | undefined) {
    setErr("");
    if (!file) return;
    if (!file.type.startsWith("image/")) return setErr("Зураг файл сонгоно уу.");
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      src.current = img;
      setZoom(1);
      setPx(0.5);
      setPy(0.5);
      setLoaded(true);
      crop(1, 0.5, 0.5);
      URL.revokeObjectURL(url);
    };
    img.onerror = () => {
      setErr("Энэ зургийг уншиж чадсангүй. JPG эсвэл PNG ашиглана уу.");
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }

  const showSliders = loaded && !!photo;

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setOver(true); }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => { e.preventDefault(); setOver(false); load(e.dataTransfer.files[0]); }}
      className={`flex flex-col gap-2.5 rounded-xl border border-dashed bg-[#0a0912] p-3 ${over ? "border-teal-400" : "border-white/20"}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#0f0d1a] text-[11px] text-[#9a96b3]">
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photo} alt="" className="h-full w-full object-cover" />
          ) : (
            "Зураг"
          )}
        </div>
        <div className="flex min-w-0 flex-col gap-1.5">
          <label className="inline-block cursor-pointer self-start rounded-lg bg-green hover:bg-green-600 px-3 py-1.5 text-[12.5px] font-semibold text-[#000] focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-teal-400">
            {photo ? "Зургаа солих" : "Өөрийн зургаа оруулах"}
            <input
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => {
                load(e.target.files?.[0]);
                e.target.value = "";
              }}
            />
          </label>
          <p className="text-[11.5px] text-[#9a96b3]">Эсвэл зургаа энд чирж тавь. JPG, PNG, WebP.</p>
        </div>
      </div>

      {err && <p role="alert" className="text-[12px] text-rose-300">{err}</p>}

      {showSliders && (
        <div className="grid gap-2">
          {[
            { label: "Томруулах", v: zoom, min: 1, max: 3, step: 0.05, set: (n: number) => { setZoom(n); crop(n, px, py); } },
            { label: "Хөндлөн", v: px, min: 0, max: 1, step: 0.01, set: (n: number) => { setPx(n); crop(zoom, n, py); } },
            { label: "Босоо", v: py, min: 0, max: 1, step: 0.01, set: (n: number) => { setPy(n); crop(zoom, px, n); } },
          ].map((r) => (
            <label key={r.label} className="flex items-center gap-2 text-[11.5px] text-[#9a96b3]">
              <span className="w-16">{r.label}</span>
              <input
                type="range"
                min={r.min}
                max={r.max}
                step={r.step}
                value={r.v}
                onChange={(e) => r.set(Number(e.target.value))}
                className="flex-1 accent-purple"
              />
            </label>
          ))}
        </div>
      )}

      {photo && (
        <button
          type="button"
          className="self-start text-[12px] text-[#9a96b3] hover:text-white"
          onClick={() => {
            src.current = null;
            setLoaded(false);
            onChange("");
          }}
        >
          Зургийг устгах
        </button>
      )}
    </div>
  );
}
