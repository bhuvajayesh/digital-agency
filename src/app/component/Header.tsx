"use client";

import Link from "next/link";
import Logo from "../../../public/images/logo.svg";
import Image from "next/image";
import ButtonLight from "./ButtonLight";
import { usePathname } from "next/navigation";

const Menu = [
  {
    menuName: "Home",
    menuLink: "/",
  },
  {
    menuName: "Services",
    menuLink: "/services",
  },
  {
    menuName: "Work",
    menuLink: "/work",
  },
  {
    menuName: "Process",
    menuLink: "/process",
  },
  {
    menuName: "About",
    menuLink: "/about",
  },
  {
    menuName: "Careers",
    menuLink: "/careers",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="bg-[#1A1A1A] fixed top-0 left-0 w-full z-10 border-b border-[#262626]">
      <div className="container mx-auto px-4">
        <div className="py-3 md:py-5 flex items-center justify-between">
          <Link href="/">
            <Image src={Logo} alt="logo" className="h-10 md:h-12 lg:h-auto w-auto" />
          </Link>
          <ul className="hidden md:flex items-center">
            {Menu.map((data, i) => {
              const isActive = pathname === data.menuLink;
              return (
                <li key={i}>
                  <Link
                    href={data.menuLink}
                    className={`${
                      isActive ? "font-semibold text-white bg-[#262626]" : ""
                    } text-[#E6E6E6] lg:text-lg font-medium py-2 px-2.5 lg:py-3 xl:py-3.5 lg:px-4 xl:px-7 rounded-lg inline-block`}
                  >
                    {data.menuName}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ButtonLight className="py-2 px-3 md:py-3 md:px-4 lg:px-6 lg:py-4">
            Contact Us
          </ButtonLight>
        </div>
      </div>
    </div>
  );
}
