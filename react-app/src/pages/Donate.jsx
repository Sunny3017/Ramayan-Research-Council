import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import '../pagescss/Donate.css';

const Donate = () => {
    return (
        <>
            <SEO 
                title="Donate" 
                description="Support Ramayan Research Council. Your donation helps in the construction of Maa Sita's temple and preserving our culture."
            />
            <Header />
            
            {/* Main Content */}
            <div className="body-container donate-container">
                <div className="container">
                    
                    {/* Intro / Appeal Section */}
                    {/* <div className="donate-appeal"> */}
                        <h1 className="donate-heading">राष्ट्र और धर्म के इस महायज्ञ में अपनी आहुति दें</h1>
                        {/* <div className="donate-text-wrapper">
                            <div className="donate-text-box">
                                <p className="donate-text">
                                    'रामायण रिसर्च काउंसिल' माँ सीता की जन्मभूमि सीतामढ़ी को विश्व स्तरीय तीर्थ-स्थल बनाने और भारतीय संस्कृति के संरक्षण के लिए निरंतर कार्य कर रही है।
                                </p>
                                <p className="donate-text">
                                    आपके द्वारा दी गई सहयोग राशि का उपयोग माँ सीता के भव्य मंदिर निर्माण, संस्कृत भाषा के प्रचार-प्रसार, और संस्कारित नई पीढ़ी के निर्माण में किया जाएगा।
                                </p>
                                <p className="donate-text">
                                    धर्म के इस पुनीत कार्य में अपना सहयोग प्रदान कर पुण्य के भागी बनें।
                                </p>
                            </div>
                        </div>
                    </div> */}

                    {/* Donation Methods Grid */}
                    <div className="donation-methods">
                        
                        {/* Bank Transfer Card */}
                        <div className="method-card">
                            <div className="method-icon">🏦</div>
                            <h3 className="method-heading">बैंक ट्रांसफर (NEFT/RTGS)</h3>
                            <div className="bank-details">
                                <div className="bank-details-item">
                                    <strong>खाता नाम (Account Name):</strong>
                                    <span>Ramayan Research Council</span>
                                </div>
                                <div className="bank-details-item">
                                    <strong>बैंक का नाम (Bank Name):</strong>
                                    <span>[Axis Bank]</span>
                                </div>
                                <div className="bank-details-item">
                                    <strong>खाता संख्या (Account No.):</strong>
                                    <span>[922010000411808]</span>
                                </div>
                                <div className="bank-details-item">
                                    <strong>IFSC कोड:</strong>
                                    <span>[UTIB0002195]</span>
                                </div>
                                {/* <div className="bank-details-item">
                                    <strong>शाखा (Branch):</strong>
                                    <span>[Branch Address]</span>
                                </div> */}
                            </div>
                        </div>

                        {/* QR Code Card */}
                        <div className="method-card method-card-center">
                            <div className="method-icon">📱</div>
                            <h3 className="method-heading">QR कोड स्कैन करें</h3>
                            <div className="qr-container">
                                <img src="/images/scanner.jpeg" alt="UPI Scanner" className="qr-code-image" />
                                <p className="qr-helper-text">Google Pay, PhonePe, Paytm या किसी भी UPI ऐप से स्कैन करें</p>
                            </div>
                        </div>

                        {/* Contact/Support Card */}
                        <div className="method-card">
                            <div className="method-icon">📞</div>
                            <h3 className="method-heading">संपर्क करें</h3>
                            <div className="contact-content">
                                <p className="contact-text">
                                    यदि आपको दान करने में कोई समस्या आ रही है या आप अन्य माध्यमों (जैसे चेक/ड्राफ्ट) से सहयोग करना चाहते हैं, तो कृपया हमसे संपर्क करें:
                                </p>
                                <ul className="contact-list">
                                    <li className="contact-item">
                                        <span className="contact-icon">📧</span>
                                        <div className="contact-info">
                                            <strong>Email:</strong>
                                            <a href="mailto:info@ramayanmanch.com" className="contact-link">info@ramayanmanch.com</a>
                                              <strong>Phone No:</strong>
                                            <a href="mailto:info@ramayanmanch.com" className="contact-link">+91 81307 67023</a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="tax-note">
                                    <strong>नोट:</strong> सभी दान भारतीय आयकर अधिनियम के तहत छूट के पात्र हो सकते हैं (विवरण के लिए संपर्क करें)।
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Donate;