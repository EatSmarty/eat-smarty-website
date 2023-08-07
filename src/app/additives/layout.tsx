import { Metadata } from "next"
import Header from "../header"

export const metadata: Metadata = {
    title: "Additives"
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>
        <header>
            <Header title={'Additives'}></Header>
        </header>
        {children}
    </section>
}