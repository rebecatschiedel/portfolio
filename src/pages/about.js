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
          <h1 className="mx-auto my-0 text-uppercase">About Me</h1>
        </div>
      </div>
    </header>

    <section id="projects" className="about2-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={profile} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Rebeca Guedes</h4>
              <p className="text-black-50 mb-0">
                Hey! <br />
                I'm Rebeca, a former cookie-company owner from Brazil.
                <br />
                <br />
                On the first COVID-19 lockdown, I fell in love with coding, but
                during the learning process I started to feel as if something
                were missing, as if I weren't able to connect with the final
                user of what I made.
                <br />
                At that point, I got in contact with UX design and it was a
                perfect match. I truly enjoy seeing the impact of my work and
                efforts on the lives of every single user.
                <br />
                Exploring different solutions while coding and designing,
                different places while hiking, different tastes while baking and
                different points of view while photographing are my favorite
                activities.
                <br />
                <br />
                Vancouver gives me the best environment to achieve all of that!
              </p>
              <button className="btn2 btn-primary">
                <a href="mailto:rebecatcmg@gmail.com">
                  <i class="fa fa-envelope"></i>Contact Me
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SocialLinks />
    <Footer />
  </Layout>
);

export default AboutPage;
