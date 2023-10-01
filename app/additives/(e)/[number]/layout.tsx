import { Metadata } from "next"


export const metadata: Metadata = {
    title: "Enumber"
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>
        {children}
    </>
}