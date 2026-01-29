import React from 'react';
import { Link } from 'react-router-dom';
import '../componentscss/Footer.css';

const Footer = () => {
    return (
        <footer className="footer_section">
            <div className="container">
                <div className="ft_logo">
                    <img src="/images/footer_logo.png" alt="Ramayan Research Council" />
                </div>
                <div className="ft_content">
                    <ul className="address_section">
                        <li>
                            <span>पता</span>
                            <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                        </li>
                        <li>
                            <span>फोन</span>
                            <p>+91-8368320801, <br />+91-8130767023</p>
                        </li>
                        <li>
                            <span>ई-मेल</span>
                            <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                        </li>
                    </ul>

                    <ul className="quick_links">
                        <li><span>जानिए</span></li>
                        <li><Link to="/about-us">हमारे बारे में</Link></li>
                        <li><Link to="/our-aim">हमारे उद्देश्य</Link></li>
                    </ul>

                    <ul className="support_links">
                        <li><span>सोशल मीडिया</span></li>
                        <li><a href="https://www.youtube.com/@ramayanresearchcouncil" target="_blank" rel="noopener noreferrer">Youtube</a></li>
                        <li><a href="https://www.facebook.com/RamayanResearchCouncil/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.instagram.com/ramayanresearchcouncil/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>

                    <ul className="ft_text footer-text-column">
                        <li>
                            <p>
                                'रामायण रिसर्च काउंसिल', नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copy_rightsection">
                <p>Copyright © 2025 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
