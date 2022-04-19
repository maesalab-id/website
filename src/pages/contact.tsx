import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Home/Header'
import { Footer } from '../components/Home/Footer'
import { GetInTouch } from '../components/Contact/GetInTouch'
import { SEO } from '../components'

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contact - Maesalab Tech Indonesia</title>
        <meta name="description" content="Contact our marketing team" />
        <link rel="icon" href="/favicon.ico" />

        <SEO />
      </Head>

      <Header />

      <main>
        <GetInTouch />
      </main>

      <Footer />
    </div>
  )
}

export default Contact
