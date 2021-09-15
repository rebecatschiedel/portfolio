import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';

import resume from '../assets/images/resume.png';
import download from '../assets/images/Rebeca_Guedes_Resume.pdf';

const AboutPage = () => (
  <Layout>
    <Header />
    <header className="about">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Resume</h1>
        </div>
      </div>
    </header>

    <section id="resume" className="about2-section bg-light">
      <div className="container">
        <div className="center">
          <img className="resume mb-3 mb-lg-0" src={resume} alt="" />
        </div>
        <div className="center">
          <a href={download} download="Rebeca-Guedes-Portfolio">
            <button className="btn2 btn-primary">
              <i class="fa fa-download"></i>Download
            </button>
          </a>
        </div>
      </div>
    </section>
    <SocialLinks />
    <Footer />
  </Layout>
);

export default AboutPage;
