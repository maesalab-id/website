import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Home/Header'
import { Footer } from '../components/Home/Footer'
import { HeroBanner } from '../components/Home/HeroBanner'
import { Testimonials } from '../components/Home/Testimonials'
import { WhyMaesa } from '../components/Home/WhyMaesa'
import { SecondHeroBanner } from '../components/Home/SecondHeroBanner'
import { Products } from '../components/Home/Products'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Maesalab Tech Indonesia</title>
        <meta name="description" content="Focused on Web Standards to build better technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <HeroBanner />
        <Products />
        <WhyMaesa />
        <Testimonials />
        <SecondHeroBanner />
      </main>

      <Footer />
    </div>
  )
}

export default Home
