import Head from "next/head"
import { PropsWithChildren } from "react"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

type PropsType = {
  title?: string
  description?: string
}

export const Layout: React.FC<PropsWithChildren<PropsType>> = ({children, title = 'Game Plus', description = ''}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}