import type { CVData } from "@/lib/types";
import { contacts, lines, list, range } from "@/lib/util";
import Avatar from "./Avatar";

function Head({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-l-[3px] border-[#4ade80] pl-3 font-lora text-[17px] font-semibold text-[#14532d]">
      {children}
    </h2>
  );
}

export default function Grove({ d }: { d: CVData }) {
  const sk = list(d.skills);
  const lg = list(d.languages);
  return (
    <div
      className="w-[794px] min-h-[1122px] bg-[#f5faf4] px-11 py-10 font-onest text-[#1d2b21]"
    >
      <header className="flex items-center justify-between gap-6">
        <div className="min-w-0 flex-1">
          <h1 className="font-lora text-[37px] font-semibold leading-tight text-[#14532d]">{d.name}</h1>
          <p className="mt-1.5 text-[15px] font-medium text-[#3f6b4b]">{d.title}</p>
        </div>
        <Avatar d={d} size={108} radius="26px" bg="#d5ebd4" color="#14532d" />
      </header>

      <div className="mt-5 flex flex-wrap gap-2">
        {contacts(d).map((c) => (
          <span key={c} className="rounded-full px-3 py-1 text-[11px] font-medium bg-[#dcefdc] text-[#14532d]">{c}</span>
        ))}
      </div>

      {d.summary && (
        <section className="mt-8">
          <Head>Тухай</Head>
          <p className="text-[12.5px] leading-[1.75] text-[#33473a]">{d.summary}</p>
        </section>
      )}

      {d.experience.length > 0 && (
        <section className="mt-7">
          <Head>Туршлага</Head>
          <div className="flex flex-col gap-5">
            {d.experience.map((e) => (
              <div key={e.id} className="grid gap-4 grid-cols-[118px_1fr]">
                <p className="pt-[2px] text-[11px] font-semibold text-[#166534]">{range(e.start, e.end)}</p>
                <div>
                  <h3 className="text-[13.5px] font-bold">{e.role}</h3>
                  <p className="text-[12px] font-medium text-[#3f6b4b]">{e.company}</p>
                  <ul className="mt-1.5 list-disc pl-4 text-[11.5px] leading-relaxed text-[#33473a]">
                    {lines(e.desc).map((l, i) => <li key={i}>{l}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {d.education.length > 0 && (
        <section className="mt-7">
          <Head>Боловсрол</Head>
          <div className="flex flex-col gap-3">
            {d.education.map((e) => (
              <div key={e.id} className="grid gap-4 grid-cols-[118px_1fr]">
                <p className="text-[11px] font-semibold text-[#166534]">{range(e.start, e.end)}</p>
                <div>
                  <h3 className="text-[12.5px] font-bold">{e.school}</h3>
                  <p className="text-[11.5px] text-[#33473a]">{e.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="mt-7 grid gap-8 grid-cols-[1fr_1fr]">
        {sk.length > 0 && (
          <section>
            <Head>Ур чадвар</Head>
            <div className="flex flex-wrap gap-1.5">
              {sk.map((s) => (
                <span key={s} className="rounded-full px-3 py-[3px] text-[11px] font-medium bg-[#dcefdc] text-[#14532d]">{s}</span>
              ))}
            </div>
          </section>
        )}
        {lg.length > 0 && (
          <section>
            <Head>Хэл</Head>
            <div className="flex flex-col gap-1 text-[12px] text-[#33473a]">
              {lg.map((l) => <p key={l}>{l}</p>)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
