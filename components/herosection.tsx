import Image from "next/image";
const navLinks = [
  {
    link: "/",
    name: "EN",
  },
  {
    link: "/",
    name: "ID",
  },
  {
    link: "/",
    name: "GR",
  },
];

export default function Herosection() {
  return (
    <main className=" bg-graycolor headerpadding relative min-h-[calc(100vh-120px)] rounded-b-3xl z-10 ">
      <section className="pt-10 relative flex flex-col justify-between ">
        <div className="relative">
          <h1 className="text-[182px] leading-[170px] font-medium ">
            Diagnostic <br /> Expert System
          </h1>
          <span className="h-7 w-7 absolute bottom-0 right-0 -translate-x-[76px] -translate-y-2 block bg-blue-500 rounded-full" />
          <button className="bg-blue-500 hover:bg-green-500 transition-opacity duration-100 delay-100 py-2 px-6 rounded-full absolute right-0 top-1/3 text-xl text-white">
            Start Program
          </button>
        </div>
        <div className="flex justify-between items-center mt-16 ml-32">
          <div className="w-[25%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam
            magnam laboriosam deleniti animi est ad officia, natus tempore
            obcaecati.
          </div>
          <div className="">/EST 2023</div>
        </div>
        <div className=" flex mt-10">
          <ul className="flex justify-between items-end text-lg h-full">
            {navLinks.map((link, index) => (
              <>
                <li
                  key={index}
                  className="hover:opacity-50 cursor-pointer translate-y-0 hover:-translate-y-2 duration-75 delay-75 ease-linear"
                >
                  {link.name}
                </li>
                {index === navLinks.length - 1 ? (
                  ""
                ) : (
                  <span className="px-5">/</span>
                )}
              </>
            ))}
          </ul>
        </div>
      </section>
      <div className="absolute -bottom-[50px] right-[10%]  w-[400px] h-[300px] ">
        <Image src={"/RAINBOW.svg"} alt="art" fill />
      </div>
      <div className="absolute -bottom-[50px] right-[9%] translate-y-28  w-[400px] h-[400px] ">
        <Image src={"/humanheart.svg"} alt="art" fill className="" />
      </div>
    </main>
  );
}
