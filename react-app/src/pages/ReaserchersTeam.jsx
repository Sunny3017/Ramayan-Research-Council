import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import '../assets/css/our-team.css';

const ReaserchersTeam = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <SEO 
        title="Researchers Team" 
        description="Our dedicated researchers."
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
          <img src="/OurTeam images/Reasearch team/img1.png" alt="Card Image 1" />
          <h3>श्री विनीत पाण्डेय जी</h3>
          <div className="line"></div>
          <p className="description">
            शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            शोधार्थी, जवाहरलाल नेहरू विश्वविद्यालय
          </p>
        </div>

        <div className="card">
          <img src="/OurTeam images/Reasearch team/img2.png" alt="Card Image 2" />
          <h3>डॉ. अवधेश कुमार जी</h3>
          <div className="line"></div>
          <p className="description">
            शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            सहयोगी समन्वयक, इग्नू, नई दिल्ली
          </p>
        </div>

        <div className="card">
          <img src="/OurTeam images/Reasearch team/img3.png" alt="Card Image 3" />
          <h3>श्री आशुतोष तिवारी जी</h3>
          <div className="line"></div>
          <p className="description">
            शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            हिन्दी विभाग, दिल्ली विश्वविद्यालय
          </p>
        </div>

        <div className="card">
          <img src="/OurTeam images/Reasearch team/img4.png" alt="Card Image 4" />
          <h3>श्री निरंजन यादव जी</h3>
          <div className="line"></div>
          <p className="description">
            शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            हिंदी विभाग, दिल्ली विश्वविद्यालय
          </p>
        </div>

        <div className="card">
          <img src="/OurTeam images/Reasearch team/img5.jpg" alt="Card Image 5" />
          <h3>आचार्य पंकज अथर्व जी</h3>
          <div className="line"></div>
          <p className="description">
            शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            ज्योतिषाचार्य
          </p>
        </div>

        <div className="card">
          <img src="/OurTeam images/Reasearch team/img6.png" alt="Card Image 6" />
          <h3>श्री मनीष साहू जी</h3>
          <div className="line"></div>
          <p className="description">
            शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            हिंदी विभाग, दिल्ली विश्वविद्यालय
          </p>
        </div>

        <div className={`card ${showMore ? '' : 'hidden'}`}>
          <img src="/OurTeam images/Reasearch team/img7.png" alt="Card Image 7" />
          <h3>सुश्री ज्योति जी</h3>
          <div className="line"></div>
          <p className="description">
            शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            हिंदी विभाग, दिल्ली विश्वविद्यालय
          </p>
        </div>

        <div className={`card ${showMore ? '' : 'hidden'}`}>
          <img src="/OurTeam images/Reasearch team/img8.png" alt="Card Image 8" />
          <h3>श्री शिवांश मिश्र जी</h3>
          <div className="line"></div>
          <p className="description">
            शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            हिंदी विभाग, दिल्ली विश्वविद्यालय
          </p>
        </div>

        <div className={`card ${showMore ? '' : 'hidden'}`}>
          <img src="/OurTeam images/Reasearch team/img9.png" alt="Card Image 9" />
          <h3>सुश्री आयुषी सिंह जी</h3>
          <div className="line"></div>
          <p className="description">
            शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            हिंदी विभाग, दिल्ली विश्वविद्यालय
          </p>
        </div>

        <div className={`card ${showMore ? '' : 'hidden'}`}>
          <img src="/OurTeam images/Reasearch team/img10.png" alt="Card Image 10" />
          <h3>सुश्री खुशी सिंह जी</h3>
          <div className="line"></div>
          <p className="description">
            शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            हिंदी विभाग, दिल्ली विश्वविद्यालय
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

export default ReaserchersTeam;
