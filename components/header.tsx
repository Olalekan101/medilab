import React from "react";
import Image from "next/image";

const navLinks = [
  {
    link: "/",
    name: "Technology",
  },
  {
    link: "/",
    name: "Product",
  },
  {
    link: "/",
    name: "Learn",
  },
  {
    link: "/",
    name: "About",
  },
  {
    link: "/",
    name: "Contact",
  },
];

export default function Header() {
  return (
    <nav className="h-20 bg-graycolor rounded-t-3xl flex justify-between items-end headerpadding w-full">
      <div className=" relative w-[35px] h-[35px] ">
        <Image src={"/logo.png"} alt="logo" fill className="object-cover" />
      </div>
      <ul className="flex justify-between items-end text-xl h-full">
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
              <span className="px-7">/</span>
            )}
          </>
        ))}
      </ul>
    </nav>
  );
}
