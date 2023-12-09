"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowBackIos } from "react-icons/md";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = usePathname();
    return <>
        {router === "/setting/faq" ||
            router === "/setting/contactus" ?
            <Link href={"/setting"} className="top-3 -left-7 z-20 fixed">
                <MdArrowBackIos size={25} className={clsx("mx-10")} />
            </Link> : <></>}
        {children}
    </>;
}