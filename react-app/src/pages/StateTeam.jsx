import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import '../assets/css/our-team.css';

const StateTeam = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <SEO 
        title="State Team" 
        description="Our team members across different states."
      />
      <Header />
      {/* <div className="banner_area">
        <div className="container">
          <div className="setion_banner">
            <h1 className="section_heading">टीम के सदस्य</h1>
          </div>
        </div>
      </div> */}

      <div className="card-container" id="cardContainer">
        <div className="card">
          <img src="/OurTeam images/State team/img1.jpg" alt="Card Image 1" />
          <h3>आ. श्री हार्दिक हुंडिया जी</h3>
          <div className="line"></div>
          <p className="description">
            समन्वयक, महाराष्ट्र, रामायण रिसर्च काउंसिल
            <br />
            वरिष्ठ पत्रकार
          </p>
        </div>
        <div className="card">
          <img src="/OurTeam images/State team/img2.jpg" alt="Card Image 2" />
          <h3>श्री बब्बन सिंह जी</h3>
          <div className="line"></div>
          <p className="description">
            प्रभारी, बिहार प्रदेश, रामायण रिसर्च
            <br />
            काउंसिल
            <br />
            समाजसेवी
          </p>
        </div>
        <div className="card">
          <img src="/OurTeam images/State team/img3.jpg" alt="Card Image 3" />
          <h3>आ. श्री ऋषिकेश सिंह जी</h3>
          <div className="line"></div>
          <p className="description">
            सह-प्रभारी, बिहार प्रदेश, रामायण रिसर्च काउंसिल
            <br />
            समाजसेवी
          </p>
        </div>
        <div className="card">
          <img src="/OurTeam images/State team/img4.png" alt="Card Image 4" />
          <h3>स्वामी दिव्यानंद जी महाराज</h3>
          <div className="line"></div>
          <p className="description">
            संयोजक, झारखंड, रामायण रिसर्च काउंसिल
            <br />
            समाजसेवी
          </p>
        </div>
        <div className="card">
          <img src="/OurTeam images/State team/img5.png" alt="Card Image 5" />
          <h3>आचार्य संतोष पाण्डेय जी</h3>
          <div className="line"></div>
          <p className="description">
            मुख्य कार्यकारिणी सदस्य, उत्तर प्रदेश
            <br />
            ज्योतिषाचार्य
          </p>
        </div>
        <div className="card">
          <img src="/OurTeam images/State team/img6.png" alt="Card Image 6" />
          <h3>श्री विनोद अग्रवाल जी</h3>
          <div className="line"></div>
          <p className="description">
            मुख्य कार्यकारिणी सदस्य, उत्तर प्रदेश
            <br />
            समाजसेवी, उत्तर प्रदेश
          </p>
        </div>

        <div className={`card ${showMore ? '' : 'hidden'}`}>
          <img src="/OurTeam images/State team/img7.png" alt="Card Image 7" />
          <h3>श्री उमानंद कौशिक जी</h3>
          <div className="line"></div>
          <p className="description">
            मुख्य कार्यकारिणी सदस्य, उत्तर प्रदेश
            <br />
            समाजसेवी
          </p>
        </div>
        <div className={`card ${showMore ? '' : 'hidden'}`}>
          <img src="/OurTeam images/State team/img8.png" alt="Card Image 8" />
          <h3>श्री दिवाकर तिवारी जी</h3>
          <div className="line"></div>
          <p className="description">
            समन्वयक, उत्तर प्रदेश, रामायण रिसर्च काउंसिल
            <br />
            समाजसेवी
          </p>
        </div>
      </div>

      {!showMore && (
        <div className="see-more-wrapper">
          <button className="see-more" onClick={() => setShowMore(true)}>
            See More
          </button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default StateTeam;
