import Image from "next/image";

export default function Sectiontwo() {
  return (
    <section className="mt-20">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-6xl relative">
          <span className="">About Us</span>
          <span className="h-5 w-5 absolute bottom-0 -right-6 block bg-blue-500 rounded-full" />
        </div>
        <div className=" w-full mt-10 relative h-[600px] overflow-clip flex flex-col justify-center items-center  rounded-3xl backdrop-grayscale backdrop-brightness-75">
          <div className="relative mt-auto flex flex-col justify-center items-center z-10 w-[300px] h-[300px] ">
            <Image
              src={"/Play_button.svg"}
              alt="images"
              fill
              className="object-cover "
            />
          </div>
          <Image
            src={"/secbg.jpg"}
            alt="images"
            fill
            className="object-cover saturate-50 "
          />
          <div className=" px-5 py-4 mt-auto mb-5 text-xl rounded-md  relative bg-graycolor">
            We are Medizinisch, medical expert company
          </div>
        </div>
      </div>
    </section>
  );
}
