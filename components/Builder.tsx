"use client";

import { useEffect, useRef, useState } from "react";
import type { CVData, TemplateId } from "@/lib/types";
import { SAMPLE } from "@/lib/sample";
import { PAGE_H, PAGE_W, slug } from "@/lib/util";
import { exportPdf } from "@/lib/pdf";
import { TEMPLATES } from "./cv";
import Editor from "./Editor";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import PagePreview from "./PagePreview";

const KEY = "tuka-cv-builder:v1";
const THUMB = 0.15;

export default function Builder() {
  const [d, setD] = useState<CVData>(SAMPLE);
  const [tpl, setTpl] = useState<TemplateId>("nova");
  const [tab, setTab] = useState<"edit" | "preview">("edit");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [ready, setReady] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const p = JSON.parse(raw);
        if (p?.d) setD({ ...SAMPLE, ...p.d });
        if (p?.tpl && TEMPLATES.some((t) => t.id === p.tpl)) setTpl(p.tpl);
      }
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify({ d, tpl }));
    } catch {}
  }, [d, tpl, ready]);

  const current = TEMPLATES.find((t) => t.id === tpl) ?? TEMPLATES[0];
  const Cur = current.C;

  async function download() {
    if (!exportRef.current) return;
    setBusy(true);
    setErr("");
    try {
      await exportPdf(
        exportRef.current,
        `${slug(d.name) || "cv"}-${current.id}.pdf`,
      );
    } catch (e) {
      console.error(e);
      setErr("PDF үүсгэж чадсангүй. Дахин оролдоно уу.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <div className="app-shell flex h-screen flex-col">
        <header className="flex h-15 shrink-0 items-center justify-between border-b border-white/[.07] px-3 sm:px-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center">
              <Image src="/Logo.PNG" alt="Logo" width={40} height={40} />
              <h2 className="text-amber-50 font-bold text-xl">TUKA</h2>
            </Link>
            <span className="hidden text-[13px] text-[#9a96b3] sm:inline">
              CV Builder
            </span>
          </div>
          <div className="flex items-center gap-2">
            {err && (
              <span
                role="alert"
                className="hidden text-[12px] text-rose-300 sm:inline"
              >
                {err}
              </span>
            )}
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-lg border border-white/10 px-3 py-1.5 text-[13px] text-[#cfcbe6] hover:bg-white/[.06]"
            >
              Хэвлэх
            </button>
            <button
              type="button"
              onClick={download}
              disabled={busy}
              className="rounded-lg bg-purple px-3.5 py-1.5 text-[13px] font-semibold text-[#fff] hover:bg-purple-600 disabled:opacity-60"
            >
              {busy ? "Бэлдэж байна…" : "PDF татах"}
            </button>
          </div>
        </header>

        <div className="flex shrink-0 gap-1 border-b border-white/[.07] px-3 py-1.5 lg:hidden">
          {(["edit", "preview"] as const).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setTab(k)}
              aria-pressed={tab === k}
              className={`flex-1 rounded-lg py-1.5 text-[13px] ${tab === k ? "bg-white/10 font-semibold" : "text-[#9a96b3]"}`}
            >
              {k === "edit" ? "Засах" : "Харах"}
            </button>
          ))}
        </div>

        <div className="grid min-h-0 flex-1 lg:grid-cols-[400px_minmax(0,1fr)]">
          <section
            className={`${tab === "edit" ? "block" : "hidden"} min-h-0 overflow-y-auto border-white/[.07] p-3 lg:block lg:border-r`}
            aria-label="Засах"
          >
            <Editor d={d} setD={setD} onReset={() => setD(SAMPLE)} />
          </section>

          <section
            className={`${tab === "preview" ? "block" : "hidden"} min-h-0 overflow-y-auto lg:block`}
            aria-label="Харах"
          >
            <div className="sticky top-0 z-10 border-b border-white/[.07] bg-[#07060d]/95 px-3 py-2.5 backdrop-blur">
              <p className="mb-1.5 text-[11.5px] text-[#9a96b3]">Загвар</p>
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {TEMPLATES.map((t) => {
                  const on = t.id === tpl;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTpl(t.id)}
                      aria-pressed={on}
                      className={`shrink-0 rounded-xl p-[2px] text-left ${on ? "bg-[linear-gradient(135deg,#8b5cf6,#2dd4bf)]" : "bg-white/[.08]"}`}
                    >
                      <div className="rounded-[10px] bg-[#07060d] p-1">
                        <div
                          className="overflow-hidden rounded-md bg-white"
                          style={{
                            width: PAGE_W * THUMB,
                            height: PAGE_H * THUMB,
                          }}
                        >
                          <div
                            style={{
                              width: PAGE_W,
                              transform: `scale(${THUMB})`,
                              transformOrigin: "top left",
                            }}
                            aria-hidden
                          >
                            <t.C d={d} />
                          </div>
                        </div>
                        <p
                          className={`px-0.5 pb-0.5 pt-1 text-center text-[12px] ${on ? "font-semibold" : "text-[#9a96b3]"}`}
                        >
                          {t.name}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="p-3 lg:p-5">
              <PagePreview C={Cur} d={d} />
            </div>
          </section>
        </div>
      </div>

      {/* PDF болон хэвлэхэд ашиглах бүрэн хэмжээтэй A4 хуулбар */}
      <div ref={exportRef} className="cv-export" aria-hidden>
        <Cur d={d} />
      </div>
    </>
  );
}
