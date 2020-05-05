import React from 'react'
import Layout from '../components/layout'
import { Link, useStaticQuery , graphql } from 'gatsby'
import blogStyles from './blog.module.scss'

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
                        fields {
                            slug
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
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {      
                   return (
                    <li className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>{edge.node.frontmatter.date}</p>
                        </Link>
                    </li>
                    )
                })}
               
            </ol>
        </Layout>
    )
} 

export default BlogPage

 