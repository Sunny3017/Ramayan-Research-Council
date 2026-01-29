import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EmptyPage = () => {
  return (
    <>
      <Header />
      <section className="progress-section">
        <div className="progress-container">
          <div className="progress-icon">🚧</div>
          <h1 className="progress-title">Work Under Progress</h1>
          <p className="progress-subtitle">We’re currently building something amazing. Stay tuned!</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EmptyPage;
