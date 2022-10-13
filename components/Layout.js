import Head from "next/head"
import Topnav from "@components/Topnav"

const Layout = ({ children }) => {
    return (
        <main>
            <Head>
                <title>Plantones</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/plantone-icon.ico" />
            </Head>
            <Topnav />
            <section class="p-5 sm:p-10">{children}</section>
        </main>
    )
}

export default Layout;