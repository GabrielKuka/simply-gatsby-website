import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';

export default function About(){

    const query = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    description
                }
            }
        }
    `)

    const description = query.site.siteMetadata.description  

    return (
        <Layout>
            <h2>About page</h2>
            <p>
                {description}
            </p>
        </Layout>
    ) 
}

