import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const VideoGallery = () => {
  return (
    <>
      <SEO 
        title="Video Gallery" 
        description="Watch videos and documentaries about our initiatives and events."
      />
      <Header />
      <div className="about_us_gallery">
        <div className="container">
          <div className="gallery_text">
            <img src="/abimages/om_icon.png" alt="om" />
            Gallery
            <img src="/abimages/om_icon.png" alt="om" />
          </div>
          <div className="heading">Explore our video gallery to know how we works</div>
          <div className="video_grid">
            <div className="video_box">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/Qf2I-4Lldco"
              ></iframe>
            </div>
            <div className="video_box">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/mWmIyWQVEBQ"
              ></iframe>
            </div>
            <div className="video_box">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/MjQKo2TaJUE"
              ></iframe>
            </div>
            <div className="video_box">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/BYTL39lRBaI"
              ></iframe>
            </div>
            <div className="video_box">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/ku13MUMyW3M"
              ></iframe>
            </div>
            <div className="video_box">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/fbv35ZVyIaE"
              ></iframe>
            </div>
            <div className="video_box">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/UTAJoqA4vX4"
              ></iframe>
            </div>
            <div className="video_box">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/395Rz4uavJo"
              ></iframe>
            </div>
            <div className="video_box">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/_Snrt_2c2BQ"
              ></iframe>
            </div>
            <div className="video_box">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/x0zZy2nj0Rk"
              ></iframe>
            </div>
            <div className="video_box">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/cihzB7UHUvw"
              ></iframe>
            </div>
            <div className="video_box">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/qR51rE2-aP0"
              ></iframe>
            </div>
          </div>
          <div className="wrapper">
            <div className="see_more_btn">See More</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VideoGallery;
