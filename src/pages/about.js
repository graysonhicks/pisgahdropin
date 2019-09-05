import React from "react"
import { Heading } from "grommet"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Heading level={2}>About</Heading>
    </Layout>
  )
}

export default AboutPage
