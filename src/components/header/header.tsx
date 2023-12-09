"use client";

import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

export default function Header() {
  const router = usePathname();

  let mainRoute;
  switch (router) {
    case "/":
      mainRoute = "Home";
      break;
    case "/additives":
      mainRoute = "Additives";
      break;
    case "/scan":
      mainRoute = "Scan";
      break;
    case "/setting":
      mainRoute = "Setting";
      break;
    case "/setting/faq":
      mainRoute = "Faq";
      break;
    case "/setting/contactus":
      mainRoute = "Contact";
      break;
    default:
      break;
  }

  return (
    <header className={clsx(
      "w-full h-[50px]",
      "md:h-[50px]",
      "px-5 md:px-10",
      "bg-white",
      "font-bold",
      "flex md:justify-around justify-between items-center",
      "z-20",
      "top-0",
      "shadow",
      "fixed",
    )}>
      <div className={clsx(
        "flex justify-center items-center",
      )}>
        {router === "/setting/[]" ||
          router === "/additives/[]" ?
          (<Link href={"/setting"}>
            <IoIosArrowBack size={30} />
          </Link>) : ""}
        <Image
          src="https://github.com/EatSmarty/eat-smarty-website/blob/main/public/cardiogram.png?raw=true"
          width={35}
          height={35}
          alt='logo'
          className={clsx(
            "logo",
            "mr-1 ml-5",
          )}
        />
        <h1 className={clsx(
          "text-xl font-bold ml-1",
        )}>Eatsmarty</h1>
      </div>
      <span></span>
      <span></span>
      <div>
        <h1 className={clsx(
          "text-xl font-bold ml-2",
        )}>{mainRoute}</h1>
      </div>
    </header>
  );
}