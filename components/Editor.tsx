"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { CVData, Edu, Exp } from "@/lib/types";
import { uid } from "@/lib/util";
import PhotoField from "./PhotoField";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const input =
  "w-full rounded-lg border border-white/10 bg-[#0a0912] px-2.5 py-1.5 text-[13px] text-[#ece9f7] placeholder:text-white/30 focus:border-teal-400/70 focus:outline-none";
const ghost =
  "rounded-lg border border-white/10 px-2.5 py-1.5 text-[12.5px] text-[#cfcbe6] hover:bg-white/[.06]";

function Field({
  label,
  hint,
  children,
  className = "",
}: {
  label: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1 ${className}`}>
      <span className="text-[11.5px] text-[#9a96b3]">
        {label}
        {hint && <span className="text-white/30"> · {hint}</span>}
      </span>
      {children}
    </label>
  );
}

function Group({
  title,
  open = false,
  children,
}: {
  title: string;
  open?: boolean;
  children: ReactNode;
}) {
  return (
    <details
      open={open}
      className="group rounded-xl border border-white/[.08] bg-[#0f0d1a]"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2.5 text-sm font-semibold">
        {title}
        <span className="text-[#9a96b3] transition-transform group-open:rotate-90">
          ›
        </span>
      </summary>
      <div className="flex flex-col gap-2.5 border-t border-white/[.06] p-3">
        {children}
      </div>
    </details>
  );
}

type Props = {
  d: CVData;
  setD: Dispatch<SetStateAction<CVData>>;
  onReset: () => void;
};

export default function Editor({ d, setD, onReset }: Props) {
  const set = <K extends keyof CVData>(k: K, v: CVData[K]) =>
    setD((p) => ({ ...p, [k]: v }));
  const upExp = (id: string, patch: Partial<Exp>) =>
    setD((p) => ({
      ...p,
      experience: p.experience.map((e) =>
        e.id === id ? { ...e, ...patch } : e,
      ),
    }));
  const upEdu = (id: string, patch: Partial<Edu>) =>
    setD((p) => ({
      ...p,
      education: p.education.map((e) => (e.id === id ? { ...e, ...patch } : e)),
    }));

  return (
    <div className="flex flex-col gap-2.5">
      <Group title="Хувийн мэдээлэл" open>
        <PhotoField photo={d.photo} onChange={(v) => set("photo", v)} />
        <Field label="Нэр">
          <input
            className={input}
            value={d.name}
            onChange={(e) => set("name", e.target.value)}
          />
        </Field>
        <Field label="Мэргэжил / албан тушаал">
          <input
            className={input}
            value={d.title}
            onChange={(e) => set("title", e.target.value)}
          />
        </Field>
        <div className="grid grid-cols-2 gap-2.5">
          <Field label="И-мэйл">
            <input
              className={input}
              type="email"
              value={d.email}
              onChange={(e) => set("email", e.target.value)}
            />
          </Field>
          <Field label="Утас">
            <input
              className={input}
              type="tel"
              value={d.phone}
              onChange={(e) => set("phone", e.target.value)}
            />
          </Field>
          <Field label="Хаяг">
            <input
              className={input}
              value={d.location}
              onChange={(e) => set("location", e.target.value)}
            />
          </Field>
          <Field label="Вэб / LinkedIn">
            <input
              className={input}
              value={d.website}
              onChange={(e) => set("website", e.target.value)}
            />
          </Field>
        </div>
        <Field label="Товч танилцуулга">
          <textarea
            className={input}
            rows={4}
            value={d.summary}
            onChange={(e) => set("summary", e.target.value)}
          />
        </Field>
      </Group>

      <Group title="Ажлын туршлага">
        {d.experience.map((e) => (
          <div
            key={e.id}
            className="flex flex-col gap-2 rounded-lg border border-white/[.07] bg-[#0a0912]/60 p-2.5"
          >
            <div className="grid grid-cols-2 gap-2">
              <Field label="Албан тушаал">
                <input
                  className={input}
                  value={e.role}
                  onChange={(ev) => upExp(e.id, { role: ev.target.value })}
                />
              </Field>
              <Field label="Байгууллага">
                <input
                  className={input}
                  value={e.company}
                  onChange={(ev) => upExp(e.id, { company: ev.target.value })}
                />
              </Field>
              <Field label="Эхэлсэн">
                <input
                  className={input}
                  value={e.start}
                  onChange={(ev) => upExp(e.id, { start: ev.target.value })}
                />
              </Field>
              <Field label="Дууссан" hint="Хоосон бол «одоо»">
                <input
                  className={input}
                  value={e.end}
                  onChange={(ev) => upExp(e.id, { end: ev.target.value })}
                />
              </Field>
            </div>
            <Field label="Хийсэн ажил (мөр бүр нэг цэг)">
              <textarea
                className={input}
                rows={4}
                value={e.desc}
                onChange={(ev) => upExp(e.id, { desc: ev.target.value })}
              />
            </Field>
            <button
              type="button"
              className="self-end text-[12px] text-rose-300/90 hover:text-rose-200"
              onClick={() =>
                setD((p) => ({
                  ...p,
                  experience: p.experience.filter((x) => x.id !== e.id),
                }))
              }
            >
              Устгах
            </button>
          </div>
        ))}
        <button
          type="button"
          className={ghost}
          onClick={() =>
            setD((p) => ({
              ...p,
              experience: [
                ...p.experience,
                {
                  id: uid(),
                  role: "",
                  company: "",
                  start: "",
                  end: "",
                  desc: "",
                },
              ],
            }))
          }
        >
          + Нэмэх
        </button>
      </Group>

      <Group title="Боловсрол">
        {d.education.map((e) => (
          <div
            key={e.id}
            className="flex flex-col gap-2 rounded-lg border border-white/[.07] bg-[#0a0912]/60 p-2.5"
          >
            <Field label="Сургууль">
              <input
                className={input}
                value={e.school}
                onChange={(ev) => upEdu(e.id, { school: ev.target.value })}
              />
            </Field>
            <Field label="Мэргэжил / зэрэг">
              <input
                className={input}
                value={e.degree}
                onChange={(ev) => upEdu(e.id, { degree: ev.target.value })}
              />
            </Field>
            <div className="grid grid-cols-2 gap-2">
              <Field label="Эхэлсэн">
                <input
                  className={input}
                  value={e.start}
                  onChange={(ev) => upEdu(e.id, { start: ev.target.value })}
                />
              </Field>
              <Field label="Дууссан">
                <input
                  className={input}
                  value={e.end}
                  onChange={(ev) => upEdu(e.id, { end: ev.target.value })}
                />
              </Field>
            </div>
            <button
              type="button"
              className="self-end text-[12px] text-rose-300/90 hover:text-rose-200"
              onClick={() =>
                setD((p) => ({
                  ...p,
                  education: p.education.filter((x) => x.id !== e.id),
                }))
              }
            >
              Устгах
            </button>
          </div>
        ))}
        <button
          type="button"
          className={ghost}
          onClick={() =>
            setD((p) => ({
              ...p,
              education: [
                ...p.education,
                { id: uid(), school: "", degree: "", start: "", end: "" },
              ],
            }))
          }
        >
          + Нэмэх
        </button>
      </Group>

      <Group title="Ур чадвар ба хэл">
        <Field label="Ур чадвар" hint="Таслалаар тусгаарлана">
          <textarea
            className={input}
            rows={3}
            value={d.skills}
            onChange={(e) => set("skills", e.target.value)}
          />
        </Field>
        <Field label="Хэл" hint="Таслалаар тусгаарлана">
          <textarea
            className={input}
            rows={2}
            value={d.languages}
            onChange={(e) => set("languages", e.target.value)}
          />
        </Field>
      </Group>

      <button
        type="button"
        onClick={onReset}
        className="py-2 text-[12px] text-[#9a96b3] underline-offset-2 hover:underline"
      >
        Жишээ өгөгдөл рүү буцаах
      </button>
      <Link
        href="/"
        className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-[13px] text-[#cfcbe6] hover:bg-white/[.06]">
        <ArrowLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Буцах</span>
      </Link>
    </div>
  );
}
