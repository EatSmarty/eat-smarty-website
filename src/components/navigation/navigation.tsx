"use client";

import clsx from "clsx";
import Link from "next/link";
import {
    AiOutlineHome,
    AiOutlineUnorderedList,
    AiOutlineScan,
    AiOutlineSetting,
} from "react-icons/ai";
import { usePathname } from "next/navigation";
import "./navigation.css";

export default function Navigation() {
    const router = usePathname();
    return (
        <nav className={clsx(
            "flex justify-center items-center",
            "relative",
        )}>
            <ul className={clsx(
                "w-full h-20",
                "flex justify-around items-center",
                "shadow-2xl",
                "navigation-bottom",
            )}>
                <li className={`list ${router == "/" ? "active" : ""}`}>
                    <Link href={"/"}>
                        <span className="icon">
                            {router == "/" ? <AiOutlineHome color="#fff" /> : <AiOutlineHome color="#000" />}
                        </span>
                        <span className="nav-text">Home</span>
                    </Link>
                    <div className={`${router == "/" ? "indicator" : ""}`}></div>
                    <div className={`${router == "/" ? "shadow-indicator" : ""}`}></div>
                </li>
                <li className={`list ${router == "/additives" ? "active" : ""}`} >
                    <Link href={"/additives"}>
                        <span className="icon">
                            {router == "/additives" ? <AiOutlineUnorderedList color="#fff" /> : <AiOutlineUnorderedList color="#000" />}
                        </span>
                        <span className="nav-text">Additives</span>
                    </Link>
                    <div className={`${router == "/additives" ? "indicator1" : ""}`}></div>
                    <div className={`${router == "/additives" ? "shadow-indicator" : ""}`}></div>
                </li>
                <li className={`list ${router == "/scan" ? "active" : ""}`}>
                    <Link href={"/scan"} >
                        <span className="icon">
                            {router == "/scan" ? <AiOutlineScan color="#fff" /> : <AiOutlineScan color="#000" />}
                        </span>
                        <span className="nav-text">Scan</span>
                    </Link>
                    <div className={`${router == "/scan" ? "indicator2" : ""}`}></div>
                    <div className={`${router == "/scan" ? "shadow-indicator" : ""}`}></div>
                </li>
                <li className={`list ${router == "/setting" ? "active" : ""}`}>
                    <Link href={"/setting"}>
                        <span className="icon">
                            {router == "/setting" ? <AiOutlineSetting color="#fff" /> : <AiOutlineSetting color="#000" />}

                        </span>
                        <span className="nav-text">Setting</span>
                    </Link>
                    <div className={`${router == "/setting" ? "indicator3" : ""}`}></div>
                    <div className={`${router == "/setting" ? "shadow-indicator" : ""}`}></div>
                </li>
            </ul>
        </nav >
    );
}