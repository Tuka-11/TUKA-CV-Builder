import type { CVData } from "@/lib/types";
import { initials } from "@/lib/util";

type Props = {
  d: CVData;
  size: number;
  radius?: string;
  bg?: string;
  color?: string;
};

export default function Avatar({ d, size, radius = "9999px", bg = "#e5e7eb", color = "#374151" }: Props) {
  const base = { width: size, height: size, borderRadius: radius, flexShrink: 0 } as const;
  if (d.photo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={d.photo} alt="" style={{ ...base, objectFit: "cover", display: "block" }} />;
  }
  return (
    <div
      style={{
        ...base,
        background: bg,
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.36,
        fontWeight: 700,
      }}
    >
      {initials(d.name)}
    </div>
  );
}
