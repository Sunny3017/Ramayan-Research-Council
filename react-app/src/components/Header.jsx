import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../componentscss/Header.css';

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('scroll-disable');
        } else {
            document.body.classList.remove('scroll-disable');
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const scriptId = 'google-translate-script';
        
        // Inject Google Translate Script
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            document.body.appendChild(script);
            
            // Define global init function
            window.googleTranslateElementInit = () => {
                if (window.google && window.google.translate) {
                    new window.google.translate.TranslateElement({
                        pageLanguage: 'hi', // Set source language to Hindi as default
                        includedLanguages: 'en,hi',
                        autoDisplay: false
                    }, 'google_translate_element');
                }
            };
        }

    }, []);

    // Auto-hide custom popup after 7 seconds
    const [showTranslate, setShowTranslate] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTranslate(false);
        }, 7000); 
        return () => clearTimeout(timer);
    }, []);

    // Custom Language Switcher Function
    const changeLanguage = (langCode) => {
        // Try to find the Google Translate dropdown (seamless switching)
        const googleSelect = document.querySelector('.goog-te-combo');
        
        if (googleSelect) {
            googleSelect.value = langCode;
            googleSelect.dispatchEvent(new Event('change'));
        } else {
            // Fallback: Cookie method (requires reload)
            const cookieName = 'googtrans';
            // Source is Hindi ('hi'), target is langCode
            const cookieValue = `/hi/${langCode}`; 
            const domain = window.location.hostname;
            
            // Clear existing cookies to avoid conflicts
            document.cookie = `${cookieName}=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
            document.cookie = `${cookieName}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;

            // Set new cookie if target is not 'hi' (assuming 'hi' is original)
            // If target is 'hi', we just want to clear the cookie to revert to original
            if (langCode !== 'hi') {
                document.cookie = `${cookieName}=${cookieValue}; path=/; domain=${domain}`;
                document.cookie = `${cookieName}=${cookieValue}; path=/;`; // Fallback
            }
            
            window.location.reload();
        }
    };

    return (
        <header>
            {/* Join Our Team Top Bar */}
            <div 
                onClick={() => navigate('/join-our-team')} 
                className="join-team-bar"
            >
                <div className="marquee-container">
                    <div className="marquee-text">
                        परिवार का हिस्सा बने • रामायण रिसर्च काउंसिल के साथ मिलकर धर्म और राष्ट्र की सेवा करें 
                    </div>
                    <div className="marquee-text">
                        परिवार का हिस्सा बने • रामायण रिसर्च काउंसिल के साथ मिलकर धर्म और राष्ट्र की सेवा करें 
                    </div>
                </div>
            </div>

            {/* Hidden Google Translate Element (Required for script to work) */}
            <div id="google_translate_element"></div>

            {/* Custom Translate Popup */}
            <div className={`custom-translate-popup ${showTranslate ? 'visible' : 'hidden'}`}>
                <div className="lang-title">Choose Language</div>
                <div className="lang-btn-container">
                    <button 
                        onClick={() => changeLanguage('en')}
                        className="lang-btn"
                    >
                        English
                    </button>
                    <button 
                        onClick={() => changeLanguage('hi')}
                        className="lang-btn-primary"
                    >
                        हिंदी
                    </button>
                </div>
                <button 
                    onClick={() => setShowTranslate(false)}
                    className="translate-close-btn"
                >
                    ✕
                </button>
            </div>

            <div className="container-fluid">
                <div className="row top_bar hidden_mobile">
                    <div className="container">
                        <div className="courtesy_bar">
                            <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                            <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
                        </div>
                    </div>
                </div>
                <div className="header_container">
                    <div className="container">
                        <div className="header_bar">
                            <div className="header_social hidden_mobile">
                                <ul>
                                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/" className="facebook">facebook</a></li>
                                    <li><a href="https://x.com/RamayanResearch" className="xtwitter">xtwitter</a></li>
                                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/" className="instagram">instagram</a></li>
                                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil" className="youtube">youtube</a></li>
                                </ul>
                            </div>
                            <div className="nav_logo">
                                <ul className="hidden_mobile">
                                    <li><a href="#">हमारे बारे में</a>
                                        <ul>
                                            <li><Link to="/about-us">सीतामढ़ी में काउंसिल का संकल्प</Link></li>
                                            <li><Link to="/about-us">काउंसिल के बारे में</Link></li>
                                            <li><Link to="/our-aim">काउंसिल के उद्देश्य</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/teamMember">हमारी टीम</Link> 
                                            <ul>
                                                <li><Link to="/teamMember">टीम के सदस्य</Link></li>
                                                <li><Link to="/sitaSakhiSamethi">सीता सखी समिति</Link></li>
                                                <li><Link to="/santSanrakshakMandal">संत-संरक्षक मण्डल</Link></li>
                                                <li><Link to="/reaserchersTeam">शोधार्थियों की टीम</Link></li>
                                                <li><Link to="/stateTeam">राज्यों की टीम</Link></li>
                                                <li><Link to="/advisorteam">हमारे सलाहकार</Link></li>
                                            </ul></li>
                                    <li><Link to="/emptyPage">हमारे कार्य</Link>
                                    <ul>
                                            <li><a href="https://maasita.com/">मां सीताजी के लिए</a></li>
                                            <li><a href="https://rammandirbook.com/">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                                            <li><a href="https://ramayanvarta.com/">रामायण वार्ता</a></li>
                                            <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                                            <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                                            <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="logo">
                                    <Link to="/"><img src="/images/logo.png" alt="Ramaynmanch" /></Link>
                                </div>
                                <ul className="hidden_mobile">
                                    <li><a href="# ">मीडिया</a>
                                    <ul>
                                            <li><Link to="/events">इवेंट्स</Link></li>
                                            <li><Link to="/press">प्रेस रिलीज</Link></li>
                                            <li><Link to="/press">वेब मीडिया कवरेज</Link></li>
                                            <li><Link to="/printgallery">प्रिंट मीडिया कवरेज</Link></li>
                                            <li><Link to="/press">टीवी मीडिया कवरेज</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/photoGallery">गैलरी</Link>
                                    <ul>
                                            <li><Link to="/videoGallery">वीडियो गैलरी</Link></li>
                                            <li><Link to="/photoGallery">मीडिया गैलरी</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/president">संदेश</Link>
                                     <ul>
                                            <li><Link to="/president">अध्यक्ष</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="join_rcc hidden_mobile"><Link to="/join-our-team">Join RRC</Link></div>
                        </div>
                        <div className="header_mobile_navbar hidden-desktop">
                            <div className="top_barNav">
                                <div className={`menu_open ${isMenuOpen ? 'active' : ''} menu-toggle-btn-custom`} onClick={toggleMenu} aria-label="Toggle menu">open</div>
                                <div className={`nav_slidebar ${isMenuOpen ? 'active' : ''}`}>
                                    <ul className="menu_bar">
                                        <li className={activeDropdown === 0 ? 'active-dropdown' : ''}>
                                            <div onClick={() => toggleDropdown(0)} style={{cursor: 'pointer'}}>हमारे बारे में</div>
                                            <span className="dropdown_arrow" onClick={() => toggleDropdown(0)}></span>
                                            <ul className={`submenu-list ${activeDropdown === 0 ? 'active' : ''}`}>
                                                <li><Link to="/about-us" onClick={toggleMenu}>सीतामढ़ी में काउंसिल का संकल्प</Link></li>
                                                <li><Link to="/about-us" onClick={toggleMenu}>काउंसिल के बारे में</Link></li>
                                                <li><Link to="/our-aim" onClick={toggleMenu}>काउंसिल के उद्देश्य</Link></li>
                                            </ul>
                                        </li>
                                        <li className={activeDropdown === 1 ? 'active-dropdown' : ''}>
                                            <div onClick={() => toggleDropdown(1)} style={{cursor: 'pointer'}}>हमारी टीम</div>
                                            <span className="dropdown_arrow" onClick={() => toggleDropdown(1)}></span>
                                            <ul className={`submenu-list ${activeDropdown === 1 ? 'active' : ''}`}>
                                                <li><Link to="/teamMember" onClick={toggleMenu}>टीम के सदस्य</Link></li>
                                                <li><Link to="/sitaSakhiSamethi" onClick={toggleMenu}>सीता सखी समिति</Link></li>
                                                <li><Link to="/santSanrakshakMandal" onClick={toggleMenu}>संत-संरक्षक मण्डल</Link></li>
                                                <li><Link to="/reaserchersTeam" onClick={toggleMenu}>शोधार्थियों की टीम</Link></li>
                                                <li><Link to="/stateTeam" onClick={toggleMenu}>राज्यों की टीम</Link></li>
                                                <li><Link to="/advisorteam" onClick={toggleMenu}>हमारे सलाहकार</Link></li>
                                            </ul>
                                        </li>
                                        <li className={activeDropdown === 2 ? 'active-dropdown' : ''}>
                                            <div onClick={() => toggleDropdown(2)} style={{cursor: 'pointer'}}>हमारे कार्य</div>
                                            <span className="dropdown_arrow" onClick={() => toggleDropdown(2)}></span>
                                            <ul className={`submenu-list ${activeDropdown === 2 ? 'active' : ''}`}>
                                                <li><a href="https://maasita.com/">मां सीताजी के लिए</a></li>
                                                <li><a href="https://rammandirbook.com/">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                                                <li><a href="https://ramayanvarta.com/">रामायण वार्ता</a></li>
                                                <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                                                <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                                                <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                                            </ul>
                                        </li>
                                        <li className={activeDropdown === 3 ? 'active-dropdown' : ''}>
                                            <div onClick={() => toggleDropdown(3)} style={{cursor: 'pointer'}}>मीडिया</div>
                                            <span className="dropdown_arrow" onClick={() => toggleDropdown(3)}></span>
                                            <ul className={`submenu-list ${activeDropdown === 3 ? 'active' : ''}`}>
                                                <li><Link to="/events" onClick={toggleMenu}>इवेंट्स</Link></li>
                                                <li><Link to="/press" onClick={toggleMenu}>प्रेस रिलीज</Link></li>
                                                <li><Link to="/press" onClick={toggleMenu}>वेब मीडिया कवरेज</Link></li>
                                                <li><Link to="/printgallery" onClick={toggleMenu}>प्रिंट मीडिया कवरेज</Link></li>
                                                <li><Link to="/press" onClick={toggleMenu}>टीवी मीडिया कवरेज</Link></li>
                                            </ul>
                                        </li>
                                        <li className={activeDropdown === 4 ? 'active-dropdown' : ''}>
                                            <div onClick={() => toggleDropdown(4)} style={{cursor: 'pointer'}}>गैलरी</div>
                                            <span className="dropdown_arrow" onClick={() => toggleDropdown(4)}></span>
                                            <ul className={`submenu-list ${activeDropdown === 4 ? 'active' : ''}`}>
                                                <li><Link to="/videoGallery" onClick={toggleMenu}>वीडियो गैलरी</Link></li>
                                                <li><Link to="/photoGallery" onClick={toggleMenu}>मीडिया गैलरी</Link></li>
                                            </ul>
                                        </li>
                                        <li className={activeDropdown === 5 ? 'active-dropdown' : ''}>
                                            <div onClick={() => toggleDropdown(5)} style={{cursor: 'pointer'}}>संदेश</div>
                                            <span className="dropdown_arrow" onClick={() => toggleDropdown(5)}></span>
                                            <ul className={`submenu-list ${activeDropdown === 5 ? 'active' : ''}`}>
                                                <li><Link to="/president" onClick={toggleMenu}>अध्यक्ष</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mobile-join-rrc-item">
                                            <Link to="/join-our-team" className="mobile-join-rrc-btn" onClick={toggleMenu}>Join RRC</Link>
                                        </li>
                                    </ul>
                                    <div className="courtesy_bar">
                                        <div className="site_mail"><a
                                                href="mailto:info@ramayanparivar.com">info@ramayanmanch.com</a></div>
                                        <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
                                    </div>
                                    <div className="header_social">
                                        <ul>
                                            <li><a href="https://www.facebook.com/RamayanResearchCouncil/" className="facebook">facebook</a></li>
                                            <li><a href="https://x.com/RamayanResearch" className="xtwitter">xtwitter</a></li>
                                            <li><a href="https://www.instagram.com/ramayanresearchcouncil/" className="instagram">instagram</a></li>
                                            <li><a href="https://www.youtube.com/@ramayanresearchcouncil" className="youtube">youtube</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;