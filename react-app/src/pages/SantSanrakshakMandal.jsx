import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import '../assets/css/our-team.css';

const SantSanrakshakMandal = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <SEO 
        title="Sant Sanrakshak Mandal" 
        description="Our spiritual guides and protectors."
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
          <img src="/OurTeam images/Sant Mandal/img1.png" alt="Card Image 1" />
          <h3>पूज्य श्री महंत स्वामी ज्ञानदेव सिंह जी महाराज</h3>
          <div className="line"></div>
          <p className="description">
            संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            आचार्य महामंडलेश्वर, निर्मली अखाड़ा
          </p>
        </div>

        <div className="card">
          <img src="/OurTeam images/Sant Mandal/img2.jpg" alt="Card Image 2" />
          <h3>पूज्य महामण्डलेश्वर गीता मनीषी स्वामी श्री ज्ञानानंद जी महाराज</h3>
          <div className="line"></div>
          <p className="description">
            संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            करनाल, हरियाणा.
          </p>
        </div>

        <div className="card">
          <img src="/OurTeam images/Sant Mandal/img3.png" alt="Card Image 3" />
          <h3>पूज्य स्वामी शारदानन्द सरस्वती जी महाराज</h3>
          <div className="line"></div>
          <p className="description">
            संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            विश्व मंगलम सेवा न्यास, वृंदावन (यूपी)
          </p>
        </div>

        <div className="card">
          <img src="/OurTeam images/Sant Mandal/img4.png" alt="Card Image 4" />
          <h3>पूज्य महामंडलेश्वर श्री श्री १००८ श्री महंत विजयदास भैया जी महाराज</h3>
          <div className="line"></div>
          <p className="description">
            संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            आश्रम आनन्दधाम (वल्लभगढ़, हरियाणा)
          </p>
        </div>

        <div className="card">
          <img src="/OurTeam images/Sant Mandal/img5.png" alt="Card Image 5" />
          <h3>पूज्य महामण्डलेश्वर स्वामी श्री ईश्वर दास जी महाराज</h3>
          <div className="line"></div>
          <p className="description">
            संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            श्रीकृष्णायन देशी गोरक्षा एवं गोलोक धाम सेवा समिति (हरिद्वार)
          </p>
        </div>

        <div className="card">
          <img src="/OurTeam images/Sant Mandal/img6.png" alt="Card Image 6" />
          <h3>श्री महंत आचार्य संगीत कृष्ण सांवरिया बाबा</h3>
          <div className="line"></div>
          <p className="description">
            संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            अध्यक्ष, अखिल भारतीय चार संप्रदाय निर्मोहि अग्नि अखाड़ा (यवतमाल, महाराष्ट्र)
          </p>
        </div>

        <div className={`card ${showMore ? '' : 'hidden'}`}>
          <img src="/OurTeam images/Sant Mandal/img7.png" alt="Card Image 7" />
          <h3>जगतगुरु श्री वैदेहीवल्लभाचार्य जी महाराज</h3>
          <div className="line"></div>
          <p className="description">
            संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            जगतगुरु श्री विजयरामरावलाचार्य द्वार पीठाधीश्वर
          </p>
        </div>

        <div className={`card ${showMore ? '' : 'hidden'}`}>
          <img src="/OurTeam images/Sant Mandal/img8.png" alt="Card Image 8" />
          <h3>पूज्य श्रीजी रमण योगी जी महाराज</h3>
          <div className="line"></div>
          <p className="description">
            मुख्य कार्यकारिणी सदस्य, मध्य प्रदेश
            <br />
            महालक्ष्मी उपासक
          </p>
        </div>

        <div className={`card ${showMore ? '' : 'hidden'}`}>
          <img src="/OurTeam images/Sant Mandal/img9.png" alt="Card Image 9" />
          <h3>श्री श्री 1008 रामचंद्राचार्य परमहंस पूज्य स्वामी आगमानंद जी महाराज</h3>
          <div className="line"></div>
          <p className="description">
            संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            श्रीमहाशमशानी उग्रकालिका सिद्ध शक्तिपीठ, नगरह, भागलपुर (बिहार)
          </p>
        </div>

        <div className={`card ${showMore ? '' : 'hidden'}`}>
          <img src="/OurTeam images/Sant Mandal/img10.png" alt="Card Image 10" />
          <h3>महामंडलेश्वर महंत सच्चिदानंद दास शास्री जी महाराज</h3>
          <div className="line"></div>
          <p className="description">
            संरक्षक, रामायण रिसर्च काउंसिल, वृंदावन
            <br />
            संस्थापक अध्यक्ष, श्री गोपाल जी मंदिर सेवा ट्रस्ट
          </p>
        </div>

        <div className={`card ${showMore ? '' : 'hidden'}`}>
          <img src="/OurTeam images/Sant Mandal/img11.png" alt="Card Image 11" />
          <h3>स्वामी जगन्नाथंद गिरी जी</h3>
          <div className="line"></div>
          <p className="description">
            संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            सचिव, भारत सेवाश्रम संघ, भुवनेश्वर, ओड़िशा
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

export default SantSanrakshakMandal;
