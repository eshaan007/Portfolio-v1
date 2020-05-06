import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return(
        <footer className={footerStyles.footer}>
            <p><span className="linkcolor"><a href="https://github.com/eshaan007" target="_blank"> Created by {data.site.siteMetadata.author} © 2020 </a></span></p>
        </footer>
    )
}

export default Footer