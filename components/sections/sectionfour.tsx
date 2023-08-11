import Image from "next/image";

const SectionThreeData = [
  {
    pic: "/sectiontwoimage/sec31.png",
    text: "Genomics",
  },
  {
    pic: "/sectiontwoimage/sec32.png",
    text: "Chemistry",
  },
  {
    pic: "/sectiontwoimage/sec33.png",
    text: "Bionics",
  },
  {
    pic: "/sectiontwoimage/sec34.png",
    text: "Genetics",
  },
];
function SectionThreeCard({ text, pic }: any) {
  return (
    <div className=" relative bg-graycolor rounded-3xl w-full h-[200px] border-2 border-white overflow-clip">
      <div className="relative z-10 text-6xl flex justify-start pl-20 items-center w-[50%] h-full bg-graycolor/70 backdrop-blur-md mr-auto gap-4">
        <span className="h-5 w-5 block bg-blue-500 rounded-full " />
        {text}
      </div>
      <Image
        src={pic}
        alt="images"
        fill
        className="object-contain left-0 translate-x-[400px] scale-150"
      />
    </div>
  );
}
export default function Sectionfour() {
  return (
    <section className="mt-20">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-6xl relative">
          <span className="">Our Methodology</span>
          <span className="h-5 w-5 absolute bottom-0 -right-6 block bg-blue-500 rounded-full" />
        </div>
        <div className="grid grid-cols-1 gap-4 w-full mt-10">
          {SectionThreeData.map((data, index) => (
            <SectionThreeCard text={data.text} key={index} pic={data.pic} />
          ))}
        </div>
      </div>
    </section>
  );
}
