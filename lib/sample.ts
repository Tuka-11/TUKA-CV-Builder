import type { CVData } from "./types";

export const SAMPLE: CVData = {
  name: "Лувсандагва Энхтулга",
  title: "Электроникийн инженер",
  email: "enkhtulga9889@example.com",
  phone: "+976 86109889",
  location: "Улаанбаатар, Монгол",
  website: "linkedin.com/in/tuka",
  summary:
    "Вэб болон мобайл бүтээгдэхүүний UI-аас backend хүртэл бүтээж ирсэн 5 жилийн туршлагатай инженер. Хэрэглэгчид ойлгомжтой, хурдан, засварлахад хялбар шийдэл бүтээхэд анхаардаг.",
  photo: "",
  experience: [
    {
      id: "e1",
      role: "Junior Frontend хөгжүүлэгч",
      company: "ERXES Academy",
      start: "2026",
      end: "",
      desc: "Next.js дээр суурилсан дотоод платформыг шинээр бүтээж, ачаалах хугацааг 40%-иар бууруулсан\n6 хүнтэй багийг удирдаж, код хянах дүрэм нэвтрүүлсэн\nДизайн системийг Figma-аас кодод шилжүүлсэн",
    },
    {
      id: "e2",
      role: "Full-stack хөгжүүлэгч",
      company: "Номин Софт",
      start: "2020",
      end: "2023",
      desc: "React болон Node.js ашиглан 12 төслийг амжилттай хүргэсэн\nPostgreSQL-ийн хүснэгтийн бүтцийг шинэчилж, тайлангийн хурдыг 3 дахин сайжруулсан",
    },
    {
      id: "e3",
      role: "Дадлагжигч хөгжүүлэгч",
      company: "Дата Лаб",
      start: "2019",
      end: "2020",
      desc: "Дотоод хэрэгслүүдийн UI-г хөгжүүлж, автомат тест бичсэн",
    },
  ],
  education: [
    {
      id: "u1",
      school: "Монгол Улсын Их Сургууль",
      degree: "Компьютерын ухаан, бакалавр",
      start: "2015",
      end: "2019",
    },
    {
      id: "u2",
      school: "Coursera",
      degree: "Google UX Design сертификат",
      start: "2021",
      end: "2021",
    },
  ],
  skills:
    "React, Next.js, TypeScript, Node.js, Tailwind CSS, Figma, PostgreSQL, Git",
  languages: "Монгол — эх хэл, Англи — B2, Орос — A2",
};
