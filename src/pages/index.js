import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head';
import AboutPage from './about'
import Header from '../components/header'
import Footer from '../components/footer'
import ContactPage from './contact'
import avatar from '../images/avataaar.png'

const IndexPage = () => {
    return(
        <Layout>
            <Head title="Home"/>
            <Header />
        
            <article className = "contain">
                <h4 className="intro">Hi, my name is </h4>
                <h2 className="name">Eshaan Khurana.</h2>
                <h2 className="aftername"> I build things for the web.</h2>
                <h4 className="desc">I'm a Sophomore @ IIIT, Vadodara specializing in building websites using various frameworks.
                Check my Profile <a className="highlight-link" href="https://github.com/eshaan007" target="_blank" rel="noopener noreferrer">@eshaan007</a>👩🏻‍💻</h4>
                <p>
                    <button className="arrow-link" target="_blank" rel="noopener noreferrer">
                        <a href="mailto:eshaany2k@gmail.com">
                            Get in touch
                        </a>
                    </button>
                </p>
            </article> 

            <img className="myavatar" src = {avatar} alt="Avatar"/>

            <AboutPage />
            <ContactPage />
            <Footer/>
        </Layout>
        
    )
}

export default IndexPage