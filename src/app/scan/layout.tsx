import Header from "../header"

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