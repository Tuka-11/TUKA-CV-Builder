export type Exp = {
  id: string;
  role: string;
  company: string;
  start: string;
  end: string;
  desc: string; // мөр бүр нэг цэг
};

export type Edu = {
  id: string;
  school: string;
  degree: string;
  start: string;
  end: string;
};

export type CVData = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  summary: string;
  photo: string; // data URL
  experience: Exp[];
  education: Edu[];
  skills: string; // таслалаар тусгаарласан
  languages: string; // таслалаар тусгаарласан
};

export type TemplateId = "nova" | "eclipse" | "grove" | "arc" | "pulse";
