import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return(
        <Layout>
            <Head title="Home"/>
            <h1> Hello ! </h1>
            <h2> I'm Eshaan, A Web Developer/ Student @ IIITV/ Tech Enthusiast</h2>
            <p> Need a dev? <Link to="/contact">Contact me for details!!</Link></p>
        </Layout>
    )
}

export default IndexPage