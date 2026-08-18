import Image from "next/image";
import back1 from "../../public/3.jpg"
import SearchButton from "../ui/Buttons/SearchButton";
import Link from "next/link";


export default function Hero(){
  
return (
  <section className="relative min-h-screen w-full overflow-hidden">
    <Image
      alt=""
      fill
      src={back1}
      priority
      sizes="100vw"
      className="object-cover"
    />

    {/* لایه تاریک روی تصویر */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* محتوای Hero */}
    <div
      className="
        relative z-10
        min-h-screen
        flex flex-col
        items-center
        justify-center
        text-center
        px-5
        pt-20
      "
    >
      <h1
        className="
          font-bold
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          leading-relaxed
          text-white
          max-w-4xl
        "
      >
        بهترین لحظه‌هارو{" "}
        <span className="text-[#52D15C]">
          از نزدیک
        </span>{" "}
        تجربه کن
      </h1>

      <Link href="/matches" className="mt-6 sm:mt-8">
        <SearchButton />
      </Link>
    </div>
  </section>
);

}