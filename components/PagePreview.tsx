"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import type { CVData } from "@/lib/types";
import { PAGE_H, PAGE_W } from "@/lib/util";

export default function PagePreview({ C, d }: { C: ComponentType<{ d: CVData }>; d: CVData }) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.7);
  const [h, setH] = useState(PAGE_H);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(Math.min(1, (el.clientWidth - 4) / PAGE_W)));
    ro.observe(el);
    setScale(Math.min(1, (el.clientWidth - 4) / PAGE_W));
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = inner.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setH(el.offsetHeight));
    ro.observe(el);
    setH(el.offsetHeight);
    return () => ro.disconnect();
  }, [C]);

  const pages = Math.max(1, Math.ceil(h / PAGE_H));

  return (
    <div ref={wrap} className="w-full">
      <div className="mb-2 flex justify-end">
        <span
          className={`rounded-md px-2 py-0.5 text-[11.5px] ${pages > 1 ? "bg-amber-400/[.14] text-[#fcd34d]" : "bg-white/[.06] text-[#9a96b3]"}`}
        >
          {pages} хуудас
        </span>
      </div>
      <div className="mx-auto" style={{ width: PAGE_W * scale, height: h * scale }}>
        <div
          ref={inner}
          className="relative shadow-[0_20px_60px_-20px_rgba(0,0,0,.8)]"
          style={{ width: PAGE_W, transform: `scale(${scale})`, transformOrigin: "top left" }}
        >
          <C d={d} />
          {Array.from({ length: pages - 1 }, (_, i) => (
            <div
              key={i}
              className="pointer-events-none absolute left-0 right-0 border-t-2 border-dashed border-[rgba(239,68,68,.55)]"
              style={{ top: (i + 1) * PAGE_H }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
