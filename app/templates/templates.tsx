import { MoveRight } from "lucide-react";
export default function Templates() {
  return (
    <>
      <div>
        <div className="flex flex-col  items-center gap-10">
          <h1 className="mt-20 text-8xl">5 CV загвар хязгааргүй боломж.</h1>
          <p className="text-3xl text-paragraph">
            Загвар бүрийг өөр өөр хэв маяг болон салбарт зориулан урлав.
          </p>
        </div>
        <div className="px-30 py-30 flex justify-between">
          <div className="border-1 border-border w-90 bg-secondary-green-background rounded-4xl">
            <div className="flex flex-col p-10 gap-6 relative">
              <div className="h-6 w-2/3 rounded-4xl bg-green"></div>
              <div className="h-4 w-1/2 rounded-4xl bg-paragraph"></div>
              <div className="h-2 w-4/5 rounded-4xl bg-footer-text"></div>
              <div className="h-2 w-3/4 rounded-4xl bg-footer-text"></div>
              <div className="h-2 w-1/2 rounded-4xl bg-footer-text"></div>
              <div className="h-2 w-1/3 rounded-4xl bg-footer-text"></div>
              <div className="h-2 w-4/7 rounded-4xl bg-footer-text"></div>
              <button className="relative left-9/10 h-13 w-13 bg-green flex justify-center items-center rounded-xl">
                <MoveRight className="h-5 w-5 font-bold" />
              </button>
            </div>
            <div className="px-10 py-10 flex flex-col gap-5 bg-secondary-bg rounded-b-4xl">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Nova</h1>
                <p className="px-10 py-1 font-bold bg-green-800 text-green border-1 border-green rounded-4xl">Popular</p>
              </div>
              <p className="text-paragraph">Орчин үеийн, тод гарчиглалтай цэвэрхэн эх бэлтгэл.</p>
              
            </div>
          </div>
          <div className="border-1 border-border w-90 bg-secondary-purple-background rounded-4xl">
            <div className="flex flex-col p-10 gap-6 relative">
              <div className="h-6 w-2/3 rounded-4xl bg-purple"></div>
              <div className="h-4 w-1/2 rounded-4xl bg-paragraph"></div>
              <div className="h-2 w-4/5 rounded-4xl bg-footer-text"></div>
              <div className="h-2 w-3/4 rounded-4xl bg-footer-text"></div>
              <div className="h-2 w-1/2 rounded-4xl bg-footer-text"></div>
              <div className="h-2 w-1/3 rounded-4xl bg-footer-text"></div>
              <div className="h-2 w-4/7 rounded-4xl bg-footer-text"></div>
              <button className="relative left-9/10 h-13 w-13 bg-purple flex justify-center items-center rounded-xl">
                <MoveRight className="h-5 w-5 font-bold" />
              </button>
            </div>
            <div className="px-10 py-10 flex flex-col gap-5 bg-secondary-bg rounded-b-4xl">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Eclipse</h1>
                <p className="px-10 py-1 font-bold bg-purple-800 text-purple border-1 border-purple rounded-4xl">Popular</p>
              </div>
              <p className="text-paragraph">Сэрүүн өнгө төрх бүхий гүйцэтгэх түвшний CV.</p>
              
            </div>
          </div>
          <div className="border-1 border-border w-90 bg-green-100 rounded-4xl">
            <div className="flex flex-col p-10 gap-6 relative">
              <div className="h-6 w-2/3 rounded-4xl bg-green"></div>
              <div className="h-4 w-1/2 rounded-4xl bg-green-300"></div>
              <div className="h-2 w-4/5 rounded-4xl bg-green-200"></div>
              <div className="h-2 w-3/4 rounded-4xl bg-green-200"></div>
              <div className="h-2 w-1/2 rounded-4xl bg-green-200"></div>
              <div className="h-2 w-1/3 rounded-4xl bg-green-200"></div>
              <div className="h-2 w-4/7 rounded-4xl bg-green-200"></div>
              <button className="relative left-9/10 h-13 w-13 bg-green flex justify-center items-center rounded-xl">
                <MoveRight className="h-5 w-5 font-bold" />
              </button>
            </div>
            <div className="px-10 py-10 flex flex-col gap-5 bg-secondary-bg rounded-b-4xl">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Grove</h1>
                <p className="px-10 py-1 font-bold bg-green-800 text-green border-1 border-green rounded-4xl">Professional</p>
              </div>
              <p className="text-paragraph">Төгс хэмжээстэй, баялаг агуулгатай CV.</p>
              
            </div>
          </div>
          <div className="border-1 border-border w-90 bg-gradient-to-br from-green to-purple rounded-4xl">
            <div className="flex flex-col p-10 gap-6 relative">
              <div className="h-6 w-2/3 rounded-4xl bg-purple"></div>
              <div className="h-4 w-1/2 rounded-4xl bg-paragraph"></div>
              <div className="h-2 w-4/5 rounded-4xl bg-green-300"></div>
              <div className="h-2 w-3/4 rounded-4xl bg-green-300"></div>
              <div className="h-2 w-1/2 rounded-4xl bg-green-300"></div>
              <div className="h-2 w-1/3 rounded-4xl bg-green-300"></div>
              <div className="h-2 w-4/7 rounded-4xl bg-green-300"></div>
              <button className="relative left-9/10 h-13 w-13 bg-green flex justify-center items-center rounded-xl">
                <MoveRight className="h-5 w-5 font-bold" />
              </button>
            </div>
            <div className="px-10 py-10 flex flex-col gap-5 bg-secondary-bg rounded-b-4xl">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Arc</h1>
                <p className="px-10 py-1 font-bold bg-green-800 text-green border-1 border-green rounded-4xl">Creative</p>
              </div>
              <p className="text-paragraph">Гарчиг бүртээ зоримог өнгө ашигласан эх бэлтгэл.</p>
              
            </div>
          </div>
          <div className="border-1 border-border w-90 bg-white rounded-4xl">
            <div className="flex flex-col p-10 gap-6 relative">
              <div className="h-6 w-2/3 rounded-4xl bg-green"></div>
              <div className="h-4 w-1/2 rounded-4xl bg-paragraph"></div>
              <div className="h-2 w-4/5 rounded-4xl bg-gray-200"></div>
              <div className="h-2 w-3/4 rounded-4xl bg-gray-200"></div>
              <div className="h-2 w-1/2 rounded-4xl bg-gray-200"></div>
              <div className="h-2 w-1/3 rounded-4xl bg-gray-200"></div>
              <div className="h-2 w-4/7 rounded-4xl bg-gray-200"></div>
              <button className="relative left-9/10 h-13 w-13 bg-green flex justify-center items-center rounded-xl">
                <MoveRight className="h-5 w-5 font-bold" />
              </button>
            </div>
            <div className="px-10 py-10 flex flex-col gap-5 bg-secondary-bg rounded-b-4xl">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Pulse</h1>
                <p className="px-10 py-1 font-bold bg-green-800 text-green border-1 border-green rounded-4xl">Classic</p>
              </div>
              <p className="text-paragraph">Хоёр нүүрэнд багтах цомхон бөгөөд агуулга ихтэй CV.</p>
              
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
}
