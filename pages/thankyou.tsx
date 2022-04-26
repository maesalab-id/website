import { Container, Title, Text, Button } from "@mantine/core"
import NextLink from "next/link"
import { IconChevronLeft } from "@tabler/icons"
import Head from "next/head"
import React from "react"
import { SEO } from "../components"
import { Footer } from "../components/Home/Footer"
import { Header } from "../components/Home/Header"
import { MaesalabLogo } from "../components/Maesalab"

const ThankYou: React.FC = () => {
  return (
    <>
      <Head>
        <title>Thank You!</title>
        <meta name="description" content="Focused on Web Standards to build better technologies" />
        <link rel="icon" href="/favicon.ico" />
        <SEO />
      </Head>

      {/* <Header /> */}

      <main>
        <Container
          my="xl"
          sx={{
            height: "50vh",
          }}>
          <MaesalabLogo />
          <Title mt="lg">
            <Text variant="gradient" gradient={{ from: 'green', to: 'teal' }} inherit>
              Thank you for getting in touch
            </Text>
          </Title>
          <Text mt="md">We appreciate you contacting us. Somebody from our team will get back to you shortly.</Text>
          <NextLink href="/" passHref>
            <Button
              variant="outline"
              component="a"
              mt="md"
              leftIcon={<IconChevronLeft size={12} />}
            >
              Back to Home
            </Button>
          </NextLink>
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default ThankYou