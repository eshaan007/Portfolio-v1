import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return(
        <Layout>
            <h1> Hey there ! </h1>
            <h2> I'm Eshaan, A Web Developer living in Navi Mumbai</h2>
            <p> Need a dev? <Link to="/contact">Contact me for details!!</Link></p>
        </Layout>
    )
}

export default IndexPage