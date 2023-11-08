import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Setting",
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>
        {children}
    </>;
}