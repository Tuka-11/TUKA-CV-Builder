import type { CVData } from "@/lib/types";
import { contacts, lines, list, range } from "@/lib/util";
import Avatar from "./Avatar";


function Head({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2.5 flex items-center gap-2 text-[13.5px] font-bold text-[#0f4c81]">
      <span className="inline-block h-2 w-2 rounded-full bg-[linear-gradient(135deg,#14b8a6,#2563eb)]" />
      {children}
    </h2>
  );
}

export default function Arc({ d }: { d: CVData }) {
  const sk = list(d.skills);
  const lg = list(d.languages);
  return (
    <div className="w-[794px] min-h-[1122px] bg-[#fff] font-montserrat text-[#1e2433]">
      <div className="relative h-[214px] bg-[linear-gradient(115deg,#0d9488_0%,#2563eb_58%,#7c3aed_100%)]">
        <div className="px-11 pt-10 pr-[210px]">
          <h1 className="text-[29px] font-extrabold leading-tight text-white">{d.name}</h1>
          <p className="mt-1.5 text-[14px] font-medium text-[rgba(255,255,255,.92)]">{d.title}</p>
        </div>
        <svg className="absolute left-0 block bottom-[-1px]" width="794" height="44" viewBox="0 0 794 44" preserveAspectRatio="none">
          <path d="M0 44 L0 0 Q397 88 794 0 L794 44 Z" fill="#ffffff" />
        </svg>
        <div className="absolute rounded-full right-[52px] bottom-[-42px] border-[6px] border-[#fff] bg-[#fff]">
          <Avatar d={d} size={128} bg="#e0f2fe" color="#0f4c81" />
        </div>
      </div>

      <div className="px-11 pt-5">
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-[10.5px] font-medium text-[#4b5568]">
          {contacts(d).map((c) => <span key={c}>{c}</span>)}
        </div>
      </div>

      <div className="grid gap-7 px-11 pb-10 pt-6 grid-cols-[1fr_208px]">
        <div className="flex flex-col gap-6">
          {d.summary && (
            <section>
              <Head>Тухай</Head>
              <p className="text-[11.5px] leading-relaxed text-[#3b4356]">{d.summary}</p>
            </section>
          )}
          {d.experience.length > 0 && (
            <section>
              <Head>Туршлага</Head>
              <div className="flex flex-col gap-4">
                {d.experience.map((e) => (
                  <div key={e.id}>
                    <h3 className="text-[12.5px] font-bold">{e.role}</h3>
                    <p className="text-[11px] font-semibold text-[#2563eb]">
                      {e.company}
                      {range(e.start, e.end) && <span className="font-medium text-[#6b7385]">{"  |  "}{range(e.start, e.end)}</span>}
                    </p>
                    <ul className="mt-1.5 list-disc pl-4 text-[11px] leading-relaxed text-[#3b4356]">
                      {lines(e.desc).map((l, i) => <li key={i}>{l}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="flex flex-col gap-6 pt-1">
          {d.education.length > 0 && (
            <section>
              <Head>Боловсрол</Head>
              <div className="flex flex-col gap-3">
                {d.education.map((e) => (
                  <div key={e.id}>
                    <h3 className="text-[11.5px] font-bold">{e.school}</h3>
                    <p className="text-[10.5px] text-[#3b4356]">{e.degree}</p>
                    <p className="text-[10px] font-semibold text-[#0d9488]">{range(e.start, e.end)}</p>
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
                  <span key={s} className="rounded-md px-2 py-[3px] text-[10px] font-semibold bg-[#e6f4f3] text-[#0f5f59]">{s}</span>
                ))}
              </div>
            </section>
          )}
          {lg.length > 0 && (
            <section>
              <Head>Хэл</Head>
              <div className="flex flex-col gap-1 text-[11px] text-[#3b4356]">
                {lg.map((l) => <p key={l}>{l}</p>)}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
