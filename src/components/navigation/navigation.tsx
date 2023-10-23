"use client";

import clsx from "clsx";
import Link from "next/link";
import {
    AiFillHome,
    AiOutlineHome,
    AiOutlineUnorderedList,
    AiOutlineScan,
    AiFillSetting,
    AiOutlineSetting,
} from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { BiScan } from "react-icons/bi";

export default function Navigation() {
    const router = usePathname();

    return (
        <nav className={clsx(
            "flex justify-between items-center",
            "md:justify-around",
            "overflow-hidden",
            "border-t",
            "w-full",
            "navigation-bottom",
        )}>
            <Link href={"/"} data-testid='naviagate-to-home'>
                {router == "/" ? <AiFillHome size={30} /> : <AiOutlineHome size={30} />}
            </Link>
            <Link href={"/additives"} data-testid='naviagate-to-additives'>
                {router == "/additives" ? <FaListUl size={28} /> : <AiOutlineUnorderedList size={30} />}
            </Link>
            <Link href={"/scan"} data-testid='naviagate-to-scan'>
                {router == "/scan" ? <BiScan size={30} /> : <AiOutlineScan size={30} />}
            </Link>
            <Link href={"/setting"} data-testid='naviagate-to-setting'>
                {router == "/setting" ? <AiFillSetting size={30} /> : <AiOutlineSetting size={30} />}
            </Link>

        </nav>
    );
}