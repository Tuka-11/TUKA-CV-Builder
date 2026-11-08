import type { CVData } from "@/lib/types";
import { contacts, lines, list, range } from "@/lib/util";
import Avatar from "./Avatar";

function Side({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="mb-2 border-b pb-1 text-[11.5px] font-semibold border-[rgba(255,255,255,.3)]">
        {title}
      </h3>
      {children}
    </section>
  );
}

function Head({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <h2 className="text-[14px] font-extrabold text-[#4c1d95]">{children}</h2>
      <div className="mt-1 h-[3px] w-9 rounded bg-[linear-gradient(90deg,#7c3aed,#14b8a6)]" />
    </div>
  );
}

export default function Nova({ d }: { d: CVData }) {
  const sk = list(d.skills);
  const lg = list(d.languages);
  return (
    <div
      className="flex w-[794px] min-h-[1122px] bg-[#fff] font-manrope text-[#1f1d2e]"
    >
      <aside
        className="flex w-[246px] shrink-0 flex-col gap-5 bg-[linear-gradient(175deg,#4c1d95_0%,#5b21b6_38%,#0f766e_100%)] px-6 py-8 text-white"
      >
        <Avatar d={d} size={110} radius="30px" bg="rgba(255,255,255,.18)" color="#fff" />
        <Side title="Холбоо барих">
          <div className="flex flex-col gap-1.5">
            {contacts(d).map((c) => (
              <p key={c} className="break-words text-[11.5px] leading-snug text-[rgba(255,255,255,.92)]">{c}</p>
            ))}
          </div>
        </Side>
        {sk.length > 0 && (
          <Side title="Ур чадвар">
            <div className="flex flex-wrap gap-1.5">
              {sk.map((s) => (
                <span key={s} className="rounded-md px-2 py-[3px] text-[10.5px] font-medium bg-[rgba(255,255,255,.16)]">{s}</span>
              ))}
            </div>
          </Side>
        )}
        {lg.length > 0 && (
          <Side title="Хэл">
            <div className="flex flex-col gap-1">
              {lg.map((l) => (
                <p key={l} className="text-[11.5px]">{l}</p>
              ))}
            </div>
          </Side>
        )}
      </aside>

      <main className="flex-1 px-8 py-9">
        <h1 className="text-[31px] font-extrabold leading-tight tracking-[-0.02em]">{d.name}</h1>
        <p className="mt-1 text-[14px] font-semibold text-[#6d28d9]">{d.title}</p>

        {d.summary && (
          <section className="mt-6">
            <Head>Тухай</Head>
            <p className="text-[12px] leading-relaxed text-[#46435a]">{d.summary}</p>
          </section>
        )}

        {d.experience.length > 0 && (
          <section className="mt-6">
            <Head>Туршлага</Head>
            <div className="flex flex-col gap-4">
              {d.experience.map((e) => (
                <div key={e.id}>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[13px] font-bold">{e.role}</h3>
                    <span className="shrink-0 text-[11px] font-semibold text-[#0f766e]">{range(e.start, e.end)}</span>
                  </div>
                  <p className="text-[12px] font-medium text-[#6d28d9]">{e.company}</p>
                  <ul className="mt-1.5 list-disc pl-4 text-[11.5px] leading-relaxed text-[#46435a]">
                    {lines(e.desc).map((l, i) => <li key={i}>{l}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {d.education.length > 0 && (
          <section className="mt-6">
            <Head>Боловсрол</Head>
            <div className="flex flex-col gap-3">
              {d.education.map((e) => (
                <div key={e.id} className="flex items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-[12.5px] font-bold">{e.school}</h3>
                    <p className="text-[11.5px] text-[#46435a]">{e.degree}</p>
                  </div>
                  <span className="shrink-0 text-[11px] font-semibold text-[#0f766e]">{range(e.start, e.end)}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
