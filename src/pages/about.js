import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1> About me</h1>
            <h4> I am a Web Developer and a student at IIITV.</h4>
            <h4> Contact us <Link to="/contact">here!</Link></h4>
        </Layout>
    )
}

export default AboutPage