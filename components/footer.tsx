import Header from "./header";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="min-h-screen bg-graycolor flex flex-col justify-end items-end mt-20 rounded-3xl w-full pb-20">
      <div className="relative translate-y-20 flex justify-center items-center w-[500px] h-[500px] mx-auto">
        <Image
          src={"/Heart_Footer.svg"}
          fill
          alt="Footer"
          className="object-contain"
        />
      </div>
      <div className="text-9xl mx-auto">Medizinisch</div>
      <Header />
    </section>
  );
}
