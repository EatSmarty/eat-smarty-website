import { Metadata } from "next"
import Header from "../../../components/header/header"

export const metadata: Metadata = {
    title: "Setting"
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>
        <header>
            <Header title={'Setting'}></Header>
        </header>
        {children}
    </section>
}