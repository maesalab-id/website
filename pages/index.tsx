import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/Home/Footer'
import { HeroBanner } from '../components/Home/HeroBanner'
import { Testimonials } from '../components/Home/Testimonials'
import { WhyMaesa } from '../components/Home/WhyMaesa'
import { SecondHeroBanner } from '../components/Home/SecondHeroBanner'
import { Products } from '../components/Home/Products'
import { About } from '../components/Home/About'
import { SEO } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Maesalab Tech Indonesia</title>
        <meta name="description" content="Focused on Web Standards to build better technologies. Assist all types of companies and governments in Indonesia in utilizing a reliable and integrated information system." />
        <link rel="icon" href="/favicon.ico" />
        <SEO />
      </Head>

      <HeroBanner />
      <main>
        <Products />
        <WhyMaesa />
        <Testimonials />
        <About />
        <SecondHeroBanner />
      </main>

      <Footer />
    </div>
  )
}

export default Home
