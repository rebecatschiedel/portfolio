import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

// import profile from '../assets/images/profile-photo.jpeg';

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

    {/* <section id="projects" className="about2-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={profile} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Rebeca Guedes</h4>
              <p className="text-black-50 mb-0">
                After I founded my baking company, I enjoyed a few years
                creating products that would bring joy to my clients. When I had
                the opportunity to learn how to code, I discovered my ability to
                solve problems. After learning UX design I combined my previous
                experiences with my new favorite concept, User Centered Design,
                to empathize with the user and create a functional product.
              </p>
              <button className="btn2 btn-primary">
                <a href="mailto:rebecatcmg@gmail.com">Contact Me</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    <div className="center" style={{ marginTop: '2rem' }}>
      <h1>Coming Soon!!</h1>
    </div>
    <Footer />
  </Layout>
);

export default AboutPage;
