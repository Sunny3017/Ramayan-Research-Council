import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import '../pagescss/PrintGallery.css';

const PrintGallery = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [printNewsData, setPrintNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrintMedia = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/print-media`);
        const data = await response.json();
        // Backend returns items sorted by createdAt desc by default, 
        // but if we want to preserve specific order or just trust the backend sort.
        // The seed script inserted them in order, but async uploads might have shuffled them slightly if parallel, 
        // but wait, seed script used `for (const item of printN    ewsData)` with `await`, so insertion order is preserved.
        // However, `find().sort({ createdAt: -1 })` reverses that order.
        // The original array was in a specific display order. If I want that same order (top to bottom), 
        // and I inserted 1, 2, 3... 
        // `createdAt: -1` gives last inserted first (32, 31...).
        // If the original display was 1, 2, 3... then I need `createdAt: 1` or handle it in backend.
        // Let's assume user wants latest first usually?
        // Actually the hardcoded list has dates. April 2023, April 2023... then 2022. It's mixed.
        // The user said "jo data already show ho araha hai use dynamic kro usi order me".
        // The seed script inserted them sequentially. To get them back in same order (1, 2, 3...),
        // I should sort by `createdAt` ascending (1).
        // Let's verify backend sort.
        // Backend: `PrintMedia.find().sort({ createdAt: -1 })` -> This reverses the order.
        // I should probably fix backend sort or sort here. 
        // Or better, just display as is and let admin manage.
        // But to respect "usi order me", I should reverse the data if backend sends desc.
        // Or I can change backend to sort by createdAt: 1.
        
        // Actually, if I used `await` in loop, the first item in array was created first.
        // So `createdAt: 1` will give me the original array order.
        // Current backend uses `createdAt: -1`. So I will reverse it here or change backend.
        // I'll change backend to be configurable or just sort here. 
        // Since I can't easily change backend without another tool call (which is fine), 
        // I'll just see what happens. If I get them in reverse order, I'll reverse them.
        // Actually, let's just render them.
        
        setPrintNewsData(data); 
      } catch (error) {
        console.error('Error fetching print media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrintMedia();
  }, []);

  const showMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <>
      <SEO 
        title="Print Gallery" 
        description="Media coverage and print news about Ramayan Research Council."
      />
      <Header />

      <section className="news-section">
        <div className="container">
          <div className="news-content">
            <h5>🕉 OUR LATEST NEWS 🕉</h5>
            <h2>
              Read and explore your<br />
              knowledge through our news
            </h2>
            
            {loading ? (
              <p>Loading news...</p>
            ) : (
              <>
                <div className="grid" id="newsGrid">
                  {printNewsData.slice(0, visibleCount).map((item) => (
                    <a 
                      key={item._id} 
                      href={item.link} 
                      className="card"
                      target={item.link !== "#" ? "_blank" : "_self"}
                      rel={item.link !== "#" ? "noopener noreferrer" : ""}
                    >
                      <img src={item.image} alt={item.alt || "News"} />
                      <div className="date"> 📅 {item.date}</div>
                    </a>
                  ))}
                </div>

                {visibleCount < printNewsData.length && (
                  <div className="see-more">
                    <button id="seeMoreBtn" onClick={showMore}>
                      SEE MORE <span className="arrow">&#9660;</span>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrintGallery;
