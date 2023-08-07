import { Metadata } from "next"
import Header from "../header"


export const metadata: Metadata = {
    title: "Home"
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>
        <header>
            <Header title={'Home'}></Header>
        </header>
        {children}
    </section>
}