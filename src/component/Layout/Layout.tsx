import Head from "next/head"
import { PropsWithChildren } from "react"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import s from "./Layout.module.scss"

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>

      <div className={s.container}>
        <Header />
        <main className={s.main}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}