import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

import caseStudy from '../assets/images/case-study.png';

const AboutPage = () => (
  <Layout>
    <Header />
    <header className="about">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Case Study</h1>
        </div>
      </div>
    </header>
    <div className="case-study-width">
      <img className="img-fluid mb-3 mb-lg-0" src={caseStudy} alt="" />
    </div>
    <Footer />
  </Layout>
);

export default AboutPage;
