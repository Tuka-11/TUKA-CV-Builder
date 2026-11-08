# TUKA CV Builder

Next.js 14 (App Router) + Tailwind CSS (бүх загвар Tailwind class-аар; inline style зөвхөн scale зэрэг runtime утгад). 5 CV загвар: Nova, Eclipse, Grove, Arc, Pulse.

```bash
npm install
npm run dev     # http://localhost:3000
```

- **PDF татах** — A4 хуулбарыг зураг болгон авч jsPDF-ээр хуудаслан хадгална (1+ хуудас).
- **Хэвлэх** — браузерийн хэвлэх цонх (Save as PDF). Текст сонгогдох, векторлог PDF гарна.
- **Зураг:** сонгох эсвэл чирж тавих, томруулах, хөндлөн/босоо байрлуулах (`components/PhotoField.tsx`).
- Өгөгдөл localStorage-д автоматаар хадгалагдана.
- Бүх текст компонентууд дотроо шууд бичигдсэн (тусдаа strings файл байхгүй).
- Шинэ загвар нэмэх: `components/cv/` дотор компонент үүсгээд `components/cv/index.ts`-д бүртгэнэ.
# TUKA-CV-Builder
# TUKA-CV-Builder
