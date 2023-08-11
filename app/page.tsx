import Image from "next/image";
import dynamic from "next/dynamic";
import Herosection from "@/components/herosection";

const Sectionone = dynamic(() => import("@/components/sections/sectionone"));
const Sectiontwo = dynamic(() => import("@/components/sections/sectiontwo"));
const Sectionthree = dynamic(
  () => import("@/components/sections/sectionthree")
);
const Sectionfour = dynamic(() => import("@/components/sections/sectionfour"));
const Sectionfive = dynamic(() => import("@/components/sections/sectionfive"));
const Footer = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <main className="">
      <Herosection />
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
      <Sectionfive />
      <Footer />
    </main>
  );
}
