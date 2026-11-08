import type { CVData } from "@/lib/types";
import { contacts, lines, list, range } from "@/lib/util";
import Avatar from "./Avatar";

function Head({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 text-[15px] font-extrabold text-[#1a1530]">{children}</h2>;
}

export default function Pulse({ d }: { d: CVData }) {
  const sk = list(d.skills);
  const lg = list(d.languages);
  return (
    <div className="flex min-h-[1122px] w-[794px] flex-col bg-[#fff] font-rubik text-[#1a1530]">
      <header className="flex items-center gap-5 px-10 pb-6 pt-9">
        <Avatar d={d} size={88} radius="22px" bg="#ede9fe" color="#5b21b6" />
        <div className="min-w-0 flex-1">
          <h1 className="text-[36px] font-extrabold leading-none tracking-[-0.02em]">{d.name}</h1>
          <p className="mt-2 text-[15px] font-semibold text-[#7c3aed]">{d.title}</p>
        </div>
      </header>
      <div className="h-[6px] bg-[linear-gradient(90deg,#7c3aed,#2563eb,#14b8a6)]" />

      <div className="flex flex-1">
        <main className="flex-1 px-10 py-7">
          {d.summary && (
            <section className="mb-7">
              <Head>Тухай</Head>
              <p className="text-[12px] leading-relaxed text-[#4a4663]">{d.summary}</p>
            </section>
          )}
          {d.experience.length > 0 && (
            <section>
              <Head>Туршлага</Head>
              <div className="relative pl-6">
                <div className="absolute bottom-1 left-[5px] top-1 w-[2px] bg-[#e4dcfb]" />
                <div className="flex flex-col gap-5">
                  {d.experience.map((e) => (
                    <div key={e.id} className="relative">
                      <span
                        className="absolute left-[-26px] top-[3px] h-3 w-3 rounded-full border-2 border-[#fff] bg-[linear-gradient(135deg,#7c3aed,#2563eb)]"
                      />
                      <p className="text-[10.5px] font-semibold text-[#2563eb]">{range(e.start, e.end)}</p>
                      <h3 className="text-[13.5px] font-bold">{e.role}</h3>
                      <p className="text-[12px] font-medium text-[#7c3aed]">{e.company}</p>
                      <ul className="mt-1.5 list-disc pl-4 text-[11.5px] leading-relaxed text-[#4a4663]">
                        {lines(e.desc).map((l, i) => <li key={i}>{l}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>

        <aside className="flex w-[232px] shrink-0 flex-col gap-6 px-6 py-7 bg-[#f6f3ff]">
          <section>
            <Head>Холбоо барих</Head>
            <div className="flex flex-col gap-1.5">
              {contacts(d).map((c) => <p key={c} className="break-words text-[11px] leading-snug text-[#4a4663]">{c}</p>)}
            </div>
          </section>
          {d.education.length > 0 && (
            <section>
              <Head>Боловсрол</Head>
              <div className="flex flex-col gap-3">
                {d.education.map((e) => (
                  <div key={e.id}>
                    <h3 className="text-[11.5px] font-bold">{e.school}</h3>
                    <p className="text-[10.5px] text-[#4a4663]">{e.degree}</p>
                    <p className="text-[10px] font-semibold text-[#7c3aed]">{range(e.start, e.end)}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          {sk.length > 0 && (
            <section>
              <Head>Ур чадвар</Head>
              <div className="flex flex-wrap gap-1.5">
                {sk.map((s) => (
                  <span key={s} className="rounded-md px-2 py-[3px] text-[10.5px] font-medium bg-[#fff] border-[1px] border-[#ddd3fa] text-[#3b2a7a]">{s}</span>
                ))}
              </div>
            </section>
          )}
          {lg.length > 0 && (
            <section>
              <Head>Хэл</Head>
              <div className="flex flex-col gap-1 text-[11px] text-[#4a4663]">
                {lg.map((l) => <p key={l}>{l}</p>)}
              </div>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}
