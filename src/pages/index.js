import * as React from "react"

import "./index.css"

import Layout from "../components/layout"
import HeroContent from "../components/hero/heroContent"
import Map from "../components/map/map"
import Blog from "../components/blog/blog"
import TopReaders from "../components/topReaders/topReaders"
import Information from "../components/information/information"
import Partners from "../components/partners/partners"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroContent />
    <Map />
    <Blog />
    <TopReaders />
    <Information />
    <Partners />
  </Layout>
)

export default IndexPage
