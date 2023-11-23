"use client";

import clsx from "clsx";
import Link from "next/link";
import {
    // AiFillHome,
    AiOutlineHome,
    AiOutlineUnorderedList,
    AiOutlineScan,
    // AiFillSetting,
    AiOutlineSetting,
} from "react-icons/ai";
import { usePathname } from "next/navigation";
import "./navigation.css";

export default function Navigation() {
    const router = usePathname();
    return (
        <ul className={clsx(
            "w-3/4 h-20",
            "flex justify-between items-center",
            "shadow-2xl",
            "navigation-bottom",
        )}>
            <li className={`list ${router == "/" ? "active" : ""}`}>
                <Link id="nav-link" href={"/"} data-testid='naviagate-to-home'>
                    <span className="icon">
                        {router == "/" ? <AiOutlineHome color="#fff" /> : <AiOutlineHome color="#000" />}
                    </span>
                    <span className="nav-text">Home</span>
                </Link>
                <div className={`${router == "/" ? "indicator" : ""}`}></div>
            </li>
            <li className={`list ${router == "/additives" ? "active" : ""}`} >
                <Link href={"/additives"} data-testid='naviagate-to-additives'>
                    <span className="icon">
                        {router == "/additives" ? <AiOutlineUnorderedList color="#fff" /> : <AiOutlineUnorderedList color="#000" />}
                    </span>
                    <span className="nav-text">Additives</span>
                </Link>
                <div className={`${router == "/additives" ? "indicator1" : ""}`}></div>
            </li>
            <li className={`list ${router == "/scan" ? "active" : ""}`}>
                <Link href={"/scan"} data-testid='naviagate-to-scan'>
                    <span className="icon">
                        {router == "/scan" ? <AiOutlineScan color="#fff" /> : <AiOutlineScan color="#000" />}
                    </span>
                    <span className="nav-text">Scan</span>
                </Link>
                <div className={`${router == "/scan" ? "indicator2" : ""}`}></div>

            </li>
            <li className={`list ${router == "/setting" ? "active" : ""}`}>
                <Link href={"/setting"} data-testid='naviagate-to-setting'>
                    <span className="icon">
                        {router == "/setting" ? <AiOutlineSetting color="#fff" /> : <AiOutlineSetting color="#000" />}

                    </span>
                    <span className="nav-text">Setting</span>
                </Link>
                <div className={`${router == "/setting" ? "indicator3" : ""}`}></div>

            </li>
        </ul>
    );
}