import { PAGE_H } from "./util";

/**
 * A4 хуулбарыг (offscreen) зураг болгон авч, хуудас болгон хувааж PDF-д хийнэ.
 * Хэд хэдэн хуудас болсон ч сүүлийн хуудас загварын дэвсгэрээр дүүрнэ.
 */
export async function exportPdf(node: HTMLElement, filename: string) {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import("html2canvas-pro"),
    import("jspdf"),
  ]);

  if (document.fonts?.ready) await document.fonts.ready;

  const root = node.firstElementChild as HTMLElement | null;
  if (!root) throw new Error("CV element not found");

  const prevMin = root.style.minHeight;
  const pages = Math.max(1, Math.ceil(root.scrollHeight / PAGE_H));
  root.style.minHeight = `${pages * PAGE_H}px`;

  try {
    const canvas = await html2canvas(node, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      windowWidth: 794,
    });

    const pageW = 210;
    const pageH = 297;
    const pxPerPage = Math.round((canvas.width * pageH) / pageW);
    const pdf = new jsPDF({ unit: "mm", format: "a4", compress: true });

    for (let i = 0; i < pages; i++) {
      const slice = document.createElement("canvas");
      slice.width = canvas.width;
      slice.height = pxPerPage;
      const ctx = slice.getContext("2d");
      if (!ctx) throw new Error("Canvas unavailable");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, slice.width, slice.height);
      ctx.drawImage(canvas, 0, i * pxPerPage, canvas.width, pxPerPage, 0, 0, canvas.width, pxPerPage);
      if (i > 0) pdf.addPage();
      pdf.addImage(slice.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, pageW, pageH);
    }

    pdf.save(filename);
  } finally {
    root.style.minHeight = prevMin;
  }
}
