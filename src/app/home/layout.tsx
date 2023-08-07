import Header from "../header"

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