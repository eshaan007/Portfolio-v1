import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery , graphql } from 'gatsby'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title 
                            date
                        }
                    }
                }
            }
        }
    `)

    return(
        <Layout>
            <h1>Blog</h1>
            <p>Posts will be updated here!</p>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {      
                   return (
                    <li>
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>{edge.node.frontmatter.date}</p>
                    </li>
                    )
                })}
               
            </ol>
        </Layout>
    )
}

export default BlogPage

 