import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css'
import { GatsbyImage } from 'gatsby-plugin-image';

export default function MainProject({data}){
    console.log(data)
    const projects = data.myProjects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <div className={styles.projects}>
                    {projects.map(project => (
                        <Link to={"/projects/"+project.frontmatter.slug} key={project.id}>
                            <div>
                                <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}/>
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </div> 
                <p>Like my projects? Contact me at {contact}</p>
            </div>
        </Layout>
    )
}

export const projectsQuery= graphql`
query MyQuery {
    myProjects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`