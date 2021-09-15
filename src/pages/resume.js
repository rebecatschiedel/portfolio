import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';

import profile from '../assets/images/profile-photo.jpeg';

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

    <section id="resume" className="about2-section bg-light">
      <div className="container">
        <img className="img-fluid mb-3 mb-lg-0" src={profile} alt="" />
        <div className="center">
          <a
            href="../assets/images/Rebeca_Guedes_Resume.pdf"
            download="Rebeca-Guedes-Portfolio"
          >
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
