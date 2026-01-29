import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import '../assets/css/our-team.css';

const AdvisorTeam = () => {
  return (
    <>
      <SEO 
        title="Advisor Team" 
        description="Our distinguished advisors."
      />
      <Header />
      {/* <div className="banner_area">
        <div className="container">
          <div className="setion_banner">
            <h1 className="section_heading">Our Team</h1>
          </div>
        </div>
      </div> */}

      <div className="card-container" id="cardContainer">
        <div className="card">
          <img src="/OurTeam images/team member/team10.png" alt="Card Image 6" />
          <h3>श्री मनहर भाई जाला जी</h3>
          <div className="line"></div>
          <p className="description">
            सदस्य, रामायण रिसर्च काउंसिल
            <br />
            पूर्व चेयरमैन, राष्ट्रीय सफाई कर्मचारी आयोग, भारत सरकार
          </p>
        </div>

        <div className="card">
          <img src="/OurTeam images/team member/team18.png" alt="Card Image 6" />
          <h3>श्री चंद्रशेखर मिश्रा जी</h3>
          <div className="line"></div>
          <p className="description">
            कार्यालय प्रभारी, रामायण रिसर्च काउंसिल
            <br />
            पूर्व एडिशनल सेक्रेटरी, राज्य सभा
          </p>
        </div>

        <div className="card">
          <img src="/OurTeam images/team member/team19.png" alt="Card Image 6" />
          <h3>श्री एनके झा जी</h3>
          <div className="line"></div>
          <p className="description">
            सदस्य, रामायण रिसर्च काउंसिल
            <br />
            पूर्व निदेशक, लोक सभा सचिवालय
          </p>
        </div>

        <div className="card">
          <img src="/OurTeam images/team member/team21.jpg" alt="Card Image 6" />
          <h3>साध्वी प्रज्ञा भारती जी</h3>
          <div className="line"></div>
          <p className="description">
            हिन्दू स्कॉलर, संयोजक, सीता सखी समिति
            <br />
            समाजसेवी
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdvisorTeam;
