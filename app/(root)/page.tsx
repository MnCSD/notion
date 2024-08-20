import Carousel from "@/components/carousel";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mb-10">
      <Header />

      <div className="max-w-[1300px]  mx-auto px-4 sm:px-6 lg:px-5 py-14 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-[92px] font-bold mb-4 leading-[92px]">
            Write. Plan. Organize.
          </h1>
          <p className="text-xl mb-6">With a little help from AI.</p>
          <div className="space-x-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
              Get Notion free
            </button>
            <button className="bg-blue-100 text-blue-600 font-semibold px-6 py-2 rounded-md">
              Request a demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/product/super-duper/hero-illo.png"
            alt="People organizing content"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div></div>
      </div>

      <div className="max-w-[1300px] mx-auto  mt-14 rounded-lg">
        <Carousel />
      </div>
    </main>
  );
}
