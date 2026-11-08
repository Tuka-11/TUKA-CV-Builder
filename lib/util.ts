import type { CVData } from "./types";

export const PAGE_W = 794; // A4 @96dpi
export const PAGE_H = 1122;

export const list = (s: string) =>
  s.split(/[,\n;]/).map((x) => x.trim()).filter(Boolean);

export const lines = (s: string) =>
  s.split("\n").map((x) => x.trim()).filter(Boolean);

export const initials = (n: string) =>
  n
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => Array.from(w)[0]?.toUpperCase() ?? "")
    .join("");

export const range = (start: string, end: string) => {
  if (!start && !end) return "";
  return `${start || ""} – ${end || "одоо"}`;
};

export const contacts = (d: CVData) =>
  [d.email, d.phone, d.location, d.website].filter(Boolean);

export const uid = () => Math.random().toString(36).slice(2, 9);

export const slug = (s: string) =>
  s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "");
