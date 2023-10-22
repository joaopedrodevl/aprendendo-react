import Header from "./Header"
import Footer from "./Footer"

interface ILayout {
    children: React.ReactNode
}

export default function Layout({ children }: ILayout) {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}