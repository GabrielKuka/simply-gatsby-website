import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import * as styles from '../styles/home.module.css'
import {GatsbyImage} from 'gatsby-plugin-image'

export default function Home({data}) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>This is my test.</p>
          <Link className={styles.btn} to="/projects">My Portfolio</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData}/>
      </section>
    </Layout>
  ) 
}

// Query to retrieve an image from sr/images/ and make it fluid
export const bannerQuery = graphql`
query bannerQuery {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
    }
  }
}
`