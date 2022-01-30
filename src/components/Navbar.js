import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

export default function Navbar(){

    const query = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `) 

    const { title } = query.site.siteMetadata

    return (
        <nav>
            <h1>{ title }</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    )
}