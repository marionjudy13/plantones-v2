import Head from "next/head"
import Topnav from "@components/topnav"

const Layout = ({ children }) => {
    return (
        <main>
            <Head>
                <title>Plantones</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/plantone-icon.ico" />
            </Head>
            <Topnav />
            {children}
        </main>
    )
}

export default Layout;