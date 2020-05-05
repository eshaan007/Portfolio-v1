import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return(
        <Layout>
            <Head title="Home"/>
            <article>
                <h1><strong>Hello!</strong> 👋</h1>
                <p>I'm <strong>Eshaan Khurana</strong>, a Web-Developer focused on building beautiful interfaces. 
                I am currently a Sophomore @IIIT Vadodara. Check my Profile <a class="highlight-link" href="https://github.com/eshaan007" target="_blank">@eshaan007</a>👩🏻‍💻</p>
                <p><a href="mailto:eshaany2k@gmail.com" class="arrow-link">Get in touch ➡️</a></p>
            </article> 
        </Layout>
    )
}

export default IndexPage