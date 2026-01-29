import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import '../pagescss/Events.css';

const Events = () => {
  return (
    <>
      <SEO 
        title="Events" 
        description="Upcoming and past events of Ramayan Research Council."
      />
      <Header />
      <section className="custom-news-section">
        <div className="custom-news-wrapper">
          <h5 className="custom-news-heading">🕉 OUR LATEST NEWS 🕉</h5>
          <h2 className="custom-news-subheading">
            Read and explore your<br />
            knowledge through our news
          </h2>

          <div className="custom-news-grid">
            {/* start */}
            <div className="news-card">
              <img src="/divimages/event1.png" alt="Event" className="news-card-img" />

              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days"></i>
                  <span>July 30, 2024</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock"></i>
                  <span>Start at: 03:00 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                The Council has decided to publish a fortnightly tabloid, which will be completely in Sanskrit language. 'Ramayan Varta' is to be launched not only in print, but also for a website www.ramayanvarta.com (ramayanvarta.com) and mobile-app.
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">Constitution Club, New Delhi</p>
            </div>

            <div className="news-card">
              <img src="/divimages/event2.png" alt="Event" className="news-card-img" />

              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days"></i>
                  <span>July 08, 2023</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock"></i>
                  <span>Start at: 04:00 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                Resolved to make the world's tallest statue of Maa Bhagwati Sita in Sitamadhi
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                33, Sanskar Bharti, Deendayal Upadhyay Marg. You are cordially invited.
              </p>
            </div>

            <div className="news-card">
              <img src="/divimages/event3.png" alt="Event" className="news-card-img" />

              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days"></i>
                  <span>April 07, 2022</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock"></i>
                  <span>Start at: 06:30 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                Indradhanush Shri Shyam Nishan Shobha Yatra - इंद्रधनुष श्री श्याम निशान शोभा यात्रा दिनांक 3 मार्च 2023 संध्या 6:30 बजे स्थान:- देवी बाबू धर्मशाला नया भवन एम.पी. द्विवेदी रोड, भागलपुर, बिहार
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                Devi Babu Dharamshala New Building M.P. Dwivedi Road, Bhagalpur, Bihar
              </p>
            </div>

            <div className="news-card">
              <img src="/divimages/event4.png" alt="Event" className="news-card-img" />

              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days"></i>
                  <span>April 07, 2022</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock"></i>
                  <span>Start at: 03:00 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                Dedication ceremony of Shri Bhagwati Sita Mahashakti Instrument
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                Constitution Club
              </p>
            </div>

            <div className="news-card">
              <img src="/divimages/event5.png" alt="Event" className="news-card-img" />

              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days"></i>
                  <span>February 23, 2023</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock"></i>
                  <span>Start at: 12:00 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                Invitation Letter Ramayana Research Council You are cordially invited to the press conference for special information
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                Bihar Industries Association Industry House, Sinha Library Road, Patna Bihar
              </p>
            </div>

            <div className="news-card">
              <img src="/divimages/event6.png" alt="Event" className="news-card-img" />

              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days"></i>
                  <span>October 28, 2020</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock"></i>
                  <span>Start at: 05:00 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                All of you dignitaries will be honored with Digital Ramlila Manchan Prasar Sahayog Samman by Namo Mantra Foundation.
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                On the Facebook page of Namo Mantra Foundation
              </p>
            </div>

            <div className="news-card">
              <img src="/divimages/event7.png" alt="Event" className="news-card-img" />

              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days"></i>
                  <span>December 21, 2022</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock"></i>
                  <span>Start at: 04:30 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                Seminar organized under the aegis of Ramayana Research Council
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                Deputy Speaker Hall Annexe Constitution Club, New Delhi
              </p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Events;
