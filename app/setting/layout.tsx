"use client";

import clsx from "clsx";
import { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowBackIos } from "react-icons/md";

export const metadata: Metadata = {
    title: "Setting",
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = usePathname();
    return <>
        {router === "/setting/faq" ||
            router === "/setting/contactus" ?
            <Link href={"/setting"} className="absolute top-3 -left-7 ">
                <MdArrowBackIos size={25} className={clsx("mx-10")} />
            </Link> : <></>}
        {children}
    </>;
}