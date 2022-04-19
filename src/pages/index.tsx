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
import { Services } from '../components/Home/Services'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Maesalab Tech Indonesia</title>
        <meta name="description" content="Focused on Web Standards to build better technologies" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" key="twcard" />

        <meta property="og:type" content="article" key="ogtype" />
        <meta property="og:title" content={"Maesalab Tech Indonesia"} key="ogtitle" />
        <meta property="og:description" content={`Focused on Web Standards to build better technologies`} key="ogdesc" />
        <meta property="og:image" content={"/favicon.ico"} key="ogimage" />
        <meta property="og:image:width" content={"512"} key="ogimagewidth" />
        <meta property="og:image:height" content={"512"} key="ogimageheight" />
        <meta property="og:site_name" content="Maesalab" key="ogsitename" />
        <meta property="og:url" content={`https://maesalab.com`} key="ogurl" />
      </Head>

      <Header />

      <main>
        <HeroBanner />
        <Products />
        <WhyMaesa />
        <Testimonials />
        <Services />
        <SecondHeroBanner />
      </main>

      <Footer />
    </div>
  )
}

export default Home
