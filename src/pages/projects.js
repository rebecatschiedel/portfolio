import React from 'react';

import Layout from '../components/Layout';

import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import hackathon from '../assets/images/hackathon.jpg';
import redesign from '../assets/images/redesign.jpg';
import capstone from '../assets/images/capstone.jpg';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="about">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Projects</h1>
        </div>
      </div>
    </header>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={capstone} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Easy Research</h4>
              <p className="text-black-50 mb-0">
                UI/UX Designer <br />
                Intuitive organizational research assistant.
              </p>
              <Link to="/case-study">
                <button className="btn2 btn-primary">Case Study</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6 center">
            <img className="img-fluid img-hackathon" src={hackathon} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Work Buoy</h4>
                  <p className="mb-0 text-white-50">
                    Industry Project <br />
                    Your mental health in first place during the return to the
                    office. <br />
                    <br />
                    <strong className="text-white">COMING SOON!</strong>
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6 center">
            <img className="img-fluid img-redesign" src={redesign} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Sweet Stand Redesign</h4>
                  <p className="mb-0 text-white-50">
                    Website Redesign <br />
                    Redesign of a local bakery to improve their engagement
                    during COVID-19. <br />
                    <br />
                    <strong className="text-white">COMING SOON!</strong>
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
