import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import '../assets/css/our-team.css';

const SitaSakhiSamethi = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <SEO 
        title="Sita Sakhi Samiti" 
        description="Our women's wing dedicated to Maa Sita."
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
          <img src="/OurTeam images/SitaShakti member/img1.png" alt="Card Image 1" />
          <h3>पूज्य गुरु मां चैतन्य मीरा</h3>
          <div className="line"></div>
          <p className="description">
            मुख्य कार्यकारिणी सदस्य, सीता सखी समिति, रामायण रिसर्च काउंसिल
            <br />
            आध्यात्मिक दार्शनिक
          </p>
        </div>
        <div className="card">
          <img src="/OurTeam images/SitaShakti member/img2.png" alt="Card Image 2" />
          <h3>श्रीमती अन्नपूर्णा देवी जी</h3>
          <div className="line"></div>
          <p className="description">
            मुख्य कार्यकारिणी सदस्य, सीता सखी समिति, रामायण रिसर्च काउंसिल
            <br />
            मा. कैबिनेट मंत्री, महिला एवं बाल विकास, भारत सरकार
          </p>
        </div>
        <div className="card">
          <img src="/OurTeam images/SitaShakti member/img3.png" alt="Card Image 3" />
          <h3>श्रीमती रमा देवी जी</h3>
          <div className="line"></div>
          <p className="description">
            मुख्य कार्यकारिणी सदस्य, सीता सखी समिति,
            <br />
            रामायण रिसर्च काउंसिल
            <br />
            मा. पूर्व सांसद, शिवहर, बिहार
          </p>
        </div>
        <div className="card">
          <img src="/OurTeam images/SitaShakti member/img4.png" alt="Card Image 4" />
          <h3>श्रीमती केशरी देवी पटेल जी</h3>
          <div className="line"></div>
          <p className="description">
            मुख्य कार्यकारिणी सदस्य, सीता सखी समिति,
            <br />
            रामायण रिसर्च काउंसिल
            <br />
            मा. पूर्व सांसद, फूलपुर (प्रयागराज), उत्तर प्रदेश
          </p>
        </div>
        <div className="card">
          <img src="/OurTeam images/SitaShakti member/img5.png" alt="Card Image 5" />
          <h3>श्रीमती रीता बहुगुणा जोशी जी</h3>
          <div className="line"></div>
          <p className="description">
            मुख्य कार्यकारिणी सदस्य, सीता सखी समिति,
            <br />
            रामायण रिसर्च काउंसिल
            <br />
            मा. पूर्व सांसद, प्रयागराज, उत्तर प्रदेश
          </p>
        </div>
        <div className="card">
          <img src="/OurTeam images/SitaShakti member/img6.png" alt="Card Image 6" />
          <h3>श्रीमती क्वीन ओझा जी</h3>
          <div className="line"></div>
          <p className="description">
            मुख्य कार्यकारिणी सदस्य, सीता सखी समिति,
            <br />
            रामायण रिसर्च काउंसिल
            <br />
            मा. पूर्व सांसद, गुआहाटी, असम
          </p>
        </div>

        <div className={`card ${showMore ? '' : 'hidden'}`}>
          <img src="/OurTeam images/SitaShakti member/img7.png" alt="Card Image 7" />
          <h3>श्रीमती देबश्री चौधरी जी</h3>
          <div className="line"></div>
          <p className="description">
            मुख्य कार्यकारिणी सदस्य, सीता सखी समिति,
            <br />
            रामायण रिसर्च काउंसिल
            <br />
            मा. पूर्व सांसद, रायगंज, पश्चिम बंगाल
          </p>
        </div>
        <div className={`card ${showMore ? '' : 'hidden'}`}>
          <img src="/OurTeam images/SitaShakti member/img8.png" alt="Card Image 8" />
          <h3>श्रीमती गीताबेन वी. राठवा जी</h3>
          <div className="line"></div>
          <p className="description">
            मुख्य कार्यकारिणी सदस्य, सीता सखी समिति,
            <br />
            रामायण रिसर्च काउंसिल
            <br />
            मा. पूर्व सांसद, छोटा उदयपुर, गुजरात
          </p>
        </div>
        <div className={`card ${showMore ? '' : 'hidden'}`}>
          <img src="/OurTeam images/SitaShakti member/img9.png" alt="Card Image 9" />
          <h3>श्रीमती संध्या सुमन राय जी</h3>
          <div className="line"></div>
          <p className="description">
            मुख्य कार्यकारिणी सदस्य, सीता सखी समिति,
            <br />
            रामायण रिसर्च काउंसिल
            <br />
            मा. सांसद, भिण्ड-दतिया, मध्य प्रदेश
          </p>
        </div>
        <div className={`card ${showMore ? '' : 'hidden'}`}>
          <img src="/OurTeam images/SitaShakti member/img10.png" alt="Card Image 10" />
          <h3>पूज्य छोटी गुरु मां</h3>
          <div className="line"></div>
          <p className="description">
            मुख्य कार्यकारिणी सदस्य,
            <br />
            सीता सखी समिति,
            <br />
            रामायण रिसर्च काउंसिल
            <br />
            मोटिवेटर
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

export default SitaSakhiSamethi;
