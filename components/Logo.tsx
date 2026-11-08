import { useId } from "react";

/** TUKA тэмдэг: ягаан → ногоон градиент дээр хэлбэржсөн T. Градиент бүрт өвөрмөц id. */
export default function Logo({ size = 28, word = true }: { size?: number; word?: boolean }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <span className="inline-flex items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 40 40" role="img" aria-label="TUKA">
        <defs>
          <linearGradient id={`g${id}`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11" fill={`url(#g${id})`} />
        <path d="M10 13.5h20M20 13.5V29" stroke="#07060d" strokeWidth="4.4" strokeLinecap="round" fill="none" />
        <circle cx="29.5" cy="28" r="2.6" fill="#07060d" />
      </svg>
      {word && (
        <span className="font-display text-[15px] font-semibold tracking-tight text-[#ece9f7]">TUKA</span>
      )}
    </span>
  );
}
