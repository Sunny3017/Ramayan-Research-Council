import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import '../pagescss/PhotoGallery.css';

const PhotoGallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(50);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const BATCH_SIZE = 50; // Load 50 images at a time

  useEffect(() => {
    const fetchImages = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/gallery`);
      const data = await response.json();
      const formattedImages = data.map(img => ({
        src: img.url,
        title: img.description
      }));
      setGalleryImages(formattedImages);
      setVisibleImages(formattedImages.slice(0, 50));
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

    fetchImages();
  }, []);

  const loadMoreImages = useCallback(() => {
    const nextCount = loadedCount + BATCH_SIZE;
    const nextImages = galleryImages.slice(0, nextCount);
    setVisibleImages(nextImages);
    setLoadedCount(nextCount);
  }, [loadedCount, galleryImages]);

  // Initial batch loaded via useState; subsequent batches via button

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const showPrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, galleryImages]); // Added galleryImages dependency

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
    document.body.style.overflow = 'auto';
  }, [lightboxOpen]);

  // Helper to fix image paths
  const getImagePath = (src) => {
    return src;
  };

  return (
    <>
      <SEO 
        title="Photo Gallery" 
        description="View photos of Ramayan Research Council events, initiatives, and the development of Sitamarhi."
      />
      <Header />
      
      {/* <div className="heading_banner">
        <div className="heading_text">Gallery</div>
      </div> */}

      <div className="about_us_gallery">
        <div className="container">
          <div className="gallery_text">
            <img src="/abimages/om_icon.png" alt="om" />Gallery<img src="/abimages/om_icon.png" alt="om" />
          </div>
          <div className="heading">Explore our gallery to know how we works</div>
          
          <div className="video_grid" id="gallery">
            {visibleImages.map((img, index) => (
              <img 
                key={index} 
                src={getImagePath(img.src)} 
                alt={`Gallery ${index}`}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>

          {loadedCount < galleryImages.length && (
            <div className="wrapper">
              <div id="loadMore" className="see_more_btn" onClick={loadMoreImages}>
                See More
              </div>
            </div>
          )}
        </div>
      </div>

      {lightboxOpen && (
        <div id="lightbox" className="lightbox">
          <span className="close" id="closeBtn" onClick={closeLightbox}>×</span>
          <img 
            id="lightboxImg" 
            src={getImagePath(galleryImages[currentImageIndex].src)} 
            alt="zoomed image" 
          />
          
          <div className="nav">
            <span id="prev" onClick={showPrev}>❮</span>
            <span id="next" onClick={showNext}>❯</span>
          </div>
          <div id="lightboxCaption" className="caption">
            {galleryImages[currentImageIndex].title}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PhotoGallery;
