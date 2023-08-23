import { Metadata } from "next"
import Header from "../@/components/header/header"

export const metadata: Metadata = {
    title: "Scan"
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>
        <header>
            <Header title={'Scan'}></Header>
        </header>
        {children}
    </section>
}