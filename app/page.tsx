import Builder from "@/components/Builder";
import Link from "next/link";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Templates from "./templates/templates";
import { MoveRight } from "lucide-react";
export default function Page() {
  return (
  <>
    <Header />
      <main className="relative px-20 py-20 flex gap-30 h-full items-center">
        <div className="w-1/2">
          <span className="text-green bg-green-900 border-2 border-green-600 py-3 px-10 rounded-full">
            5 Шилдэг Загварууд
          </span>
          <h1 className="mt-20 text-9xl">
            Your career, <br />
            <span className="bg-gradient-to-r from-green to-purple-700 bg-clip-text text-transparent">
              beautifully
            </span>{" "}
            <br />
            presented.
          </h1>
          <p className="mt-10 text-2xl text-paragraph leading-10">
            TUKA нь мэргэжлийн түвшний загваруудаар танд онцлох CV бүтээхэд
            тусална. Мэдээллээ оруулж, загвараа сонгоод, хэдхэн секундэд татаж
            аваарай.
          </p>
          <div className="mt-20 text-4xl flex gap-20 font-bold">
            <Link href="/builder" className="px-10 py-4 bg-green rounded-2xl">
              Star Building-Free
            </Link>
            <Link href="/builder" className="px-10 py-4 bg-violet-900 rounded-2xl">
              View Templates
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-10">
          <div className="bg-secondary-purple-background rounded-4xl">
            <div className="flex items-center gap-10 bg-secondary-green-background px-10 rounded-t-4xl h-30">
              <div className="flex justify-center items-center h-20 w-20 bg-gradient-to-r from-green to-purple rounded-full">
                <h1 className="text-4xl font-bold">T</h1>
              </div>
              <div>
                <h1 className="font-bold text-2xl">TUKA</h1>
                <p className="text-green text-xl">Junior Front-End Developer</p>
              </div>
            </div>
            <div className="px-20 py-5 grid grid-cols-3 gap-5 justify-between">
              <p className="text-green flex justify-center bg-green-900 border-2 border-green py-1 px-10 rounded-full">
                HTML
              </p>
              <p className="text-green flex justify-center bg-green-900 border-2 border-green py-1 px-10 rounded-full">
                CSS
              </p>
              <p className="text-green flex justify-center bg-green-900 border-2 border-green py-1 px-10 rounded-full">
                Javascript
              </p>
              <p className="text-green flex justify-center bg-green-900 border-2 border-green py-1 px-10 rounded-full">
                React JS
              </p>
              <p className="text-green flex justify-center bg-green-900 border-2 border-green py-1 px-10 rounded-full">
                Next JS
              </p>
              <p className="text-green flex justify-center bg-green-900 border-2 border-green py-1 px-10 rounded-full">
                Tailwind CSS
              </p>
            </div>
            <div className="flex flex-col px-20 py-10 gap-7">
              <div className="flex justify-between border-b-1 border-footer-text pb-5">
                <div className="flex flex-col gap-3">
                  <h2 className="text-3xl font-bold">
                    Electronics engineering
                  </h2>
                  <p className="text-purple text-xl">
                    National University of Mongolia
                  </p>
                </div>
                <p className="text-paragraph">2022</p>
              </div>
              <div className="flex justify-between border-b-1 border-footer-text pb-5">
                <div className="flex flex-col gap-3">
                  <h2 className="text-3xl font-bold">Front-End developer</h2>
                  <p className="text-purple text-xl">ERXES Academy</p>
                </div>
                <p className="text-paragraph">2026</p>
              </div>
            </div>
          </div>
          <div className="w-">
            <div className="flex flex-col gap-5 bg-secondary-green-background p-10 rounded-4xl border-1 border-green">
              <h1 className="text-4xl font-bold">CV Builder</h1>
              <p className="text-2xl text-paragraph">
                Мэргэжлийн 5 анкетны загвар. Мэдээллээ оруулад, PDF-ээр татаж
                ав.
              </p>
              <Link href="/builder" className="flex gap-4 text-2xl text-green">
                Эхлэх <MoveRight className="h-5 w-5 translate-y-2" />
              </Link>
            </div>
            
          </div>
        </div>
      </main>
      {/* <Templates /> */}
      <Footer />
    {/* <Builder /> */}
  </>);
}
