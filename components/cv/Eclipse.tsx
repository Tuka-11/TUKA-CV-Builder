import type { CVData } from "@/lib/types";
import { contacts, lines, list, range } from "@/lib/util";
import Avatar from "./Avatar";

const card = "border border-[#221e3d] bg-[#121022]";

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 text-[12.5px] font-semibold text-[#5eead4] font-unbounded">
      {children}
    </h2>
  );
}

export default function Eclipse({ d }: { d: CVData }) {
  const sk = list(d.skills);
  const lg = list(d.languages);
  return (
    <div
      className="w-[794px] min-h-[1122px] bg-[#0a0914] px-10 py-9 font-onest text-[#e7e4f5]"
    >
      <header className="flex items-center gap-6">
        <div className="rounded-full p-[3px] bg-[linear-gradient(135deg,#8b5cf6,#3b82f6,#2dd4bf)]">
          <div className="rounded-full p-[3px] bg-[#0a0914]">
            <Avatar d={d} size={98} bg="#1a1633" color="#c4b5fd" />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="text-[25px] font-semibold leading-tight font-unbounded">{d.name}</h1>
          <p className="mt-1.5 text-[14px] font-medium text-[#a5b4fc]">{d.title}</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-[#9d98bd]">
            {contacts(d).map((c) => <span key={c}>{c}</span>)}
          </div>
        </div>
      </header>

      <div className="my-6 h-[2px] rounded bg-[linear-gradient(90deg,#8b5cf6,#3b82f6,#2dd4bf)]" />

      <div className="grid gap-7 grid-cols-[1fr_206px]">
        <div className="flex flex-col gap-6">
          {d.summary && (
            <section>
              <Title>Тухай</Title>
              <p className="text-[12px] leading-relaxed text-[#c9c5e2]">{d.summary}</p>
            </section>
          )}
          {d.experience.length > 0 && (
            <section>
              <Title>Туршлага</Title>
              <div className="flex flex-col gap-3">
                {d.experience.map((e) => (
                  <div key={e.id} className={`rounded-xl px-4 py-3 ${card}`}>
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-[13px] font-semibold">{e.role}</h3>
                      <span className="shrink-0 text-[10.5px] text-[#5eead4]">{range(e.start, e.end)}</span>
                    </div>
                    <p className="text-[11.5px] text-[#a5b4fc]">{e.company}</p>
                    <ul className="mt-1.5 list-disc pl-4 text-[11px] leading-relaxed text-[#bab6d4]">
                      {lines(e.desc).map((l, i) => <li key={i}>{l}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="flex flex-col gap-6">
          {d.education.length > 0 && (
            <section>
              <Title>Боловсрол</Title>
              <div className="flex flex-col gap-3">
                {d.education.map((e) => (
                  <div key={e.id} className={`rounded-xl px-3.5 py-2.5 ${card}`}>
                    <h3 className="text-[12px] font-semibold">{e.school}</h3>
                    <p className="text-[11px] text-[#bab6d4]">{e.degree}</p>
                    <p className="mt-0.5 text-[10.5px] text-[#5eead4]">{range(e.start, e.end)}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          {sk.length > 0 && (
            <section>
              <Title>Ур чадвар</Title>
              <div className="flex flex-wrap gap-1.5">
                {sk.map((s) => (
                  <span key={s} className="rounded-full px-2.5 py-[3px] text-[10.5px] bg-[#171330] border-[1px] border-[#2c2650] text-[#d8d4f0]">{s}</span>
                ))}
              </div>
            </section>
          )}
          {lg.length > 0 && (
            <section>
              <Title>Хэл</Title>
              <div className="flex flex-col gap-1 text-[11.5px] text-[#c9c5e2]">
                {lg.map((l) => <p key={l}>{l}</p>)}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
