import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Press = () => {
  return (
    <>
      <SEO 
        title="Press & Media" 
        description="Latest news and media coverage about Ramayan Research Council."
      />
      <Header />
      {/* <div className="banner_area">
        <div className="container">
          <div className="setion_banner">
            <h1 className="section_heading">MEDIA CORNER</h1>
          </div>
        </div>
      </div> */}

      <section className="content-section">
        <img src="/divimages/map.png" alt="World Map" className="background-image" />

        <div className="content">
          <p className="subtitle-one">🕉 OUR LATEST NEWS 🕉</p>
          <h1 className="news-title-one">
            Read and explore your
            <br />
            knowledge through our news
          </h1>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Press;
