import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const Hello: NextPage = () => {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <Head>
                <title>Hello World Page Title</title>
                <meta property="og:title" content="Hello World" key="title" />
            </Head>
            <div>Hello World!</div>
            <div>
                Use the HTML anchor for an{" "}
                <a href="https://nostarch.com">external link</a> and the Link
                component for an
                <Link href="/components/weather"> internal page</Link>.
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    width={72}
                    height={16}
                />
            </div>
        </main>
    )
}
export default Hello
