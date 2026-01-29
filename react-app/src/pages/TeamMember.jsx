import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import '../assets/css/our-team.css';

const TeamMember = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(true);
    };

    return (
        <>
            <SEO 
                title="Team Members" 
                description="Meet the team behind Ramayan Research Council."
            />
            <Header />
            {/* <div className="banner_area">
                <div className="container">
                    <div className="setion_banner">
                        <h1 className="section_heading">Our Team</h1>
                    </div>
                </div>
            </div> */}

            <div className="card-container" id="cardContainer">
                {/* Always visible cards */}
                <div className="card">
                    <img src="/OurTeam images/team member/team1.png" alt="Card Image 1" />
                    <h3>श्री श्री 1008 पूज्य परमहंस स्वामी सांदीपेंद्र जी महाराज</h3>
                    <div className="line"></div>
                    <p className="description">अध्यक्ष, रामायण रिसर्च काउंसिल <br />
                        माता बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</p>
                </div>
                <div className="card">
                    <img src="/OurTeam images/team member/team2.png" alt="Card Image 2" />
                    <h3>पूज्य महामण्डलेश्वर आचार्य श्री स्वामी चित्प्रकाशानन्द गिरि जी महाराज</h3>
                    <div className="line"></div>
                    <p className="description">संयोजक, रामायण रिसर्च काउंसिल <br />
                        परमधाम आश्रम, वृंदावन</p>
                </div>
                <div className="card">
                    <img src="/OurTeam images/team member/team3.png" alt="Card Image 3" />
                    <h3>पूज्य महंत डॉ. स्वामी भरत दास जी महाराज </h3> <br />
                    <div className="line"></div>
                    <p className="description">उपाध्यक्ष, रामायण रिसर्च काउंसिल
                        महंत,<br /> उदासीन संगत ऋषि आश्रम, अयोध्या (रानोपाली), उत्तर प्रदेश</p>
                </div>
                <div className="card">
                    <img src="/OurTeam images/team member/team4.png" alt="Card Image 3" />
                    <h3>श्री अजय भट्ट जी</h3>
                    <div className="line"></div>
                    <p className="description">अध्यक्ष, बोर्ड ऑफ ट्रस्टी, रामायण रि. का.
                        <br />
                        पूर्व केंद्रीय मंत्री एवं सांसद, उत्तराखण्ड</p>
                </div>
                <div className="card">
                    <img src="/OurTeam images/team member/team5.jpg" alt="Card Image 3" />
                    <h3>श्री अश्विनी चौबे जी</h3>
                    <div className="line"></div>
                    <p className="description">मुख्य संरक्षक, रामायण रिसर्च काउंसिल
                        <br />
                        पूर्व केंद्रीय राज्य मंत्री</p>
                </div>
                <div className="card">
                    <img src="/OurTeam images/team member/team6.jpg" alt="Card Image 3" />
                    <h3>डॉ. साध्वी अपराजितानंद गिरी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य,<br /> रामायण रिसर्च काउंसिल
                        <br />
                        निरंजनी अखाड़ा</p>
                </div>

                {/* Hidden cards */}
                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team7.png" alt="Card Image 4" />
                    <h3>श्री देव रत्न शर्मा जी</h3>
                    <div className="line"></div>
                    <p className="description">वरिष्ठ सदस्य, रामायण रिसर्च काउंसिल
                        <br />
                        पूर्व ओएसडी, मध्य प्रदेश सरकार</p>
                </div>
                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team8.png" alt="Card Image 5" />
                    <h3>श्री देव दत्त शर्मा जी</h3>
                    <div className="line"></div>
                    <p className="description">वरिष्ठ   सदस्य, रामायण रिसर्च काउंसिल
                        <br />
                        सेवानिवृत्त आईएएस</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team11.png" alt="Card Image 6" />
                    <h3>श्री कुमार सुशांत जी</h3>
                    <div className="line"></div>
                    <p className="description">महासचिव, रामायण रिसर्च काउंसिल
                        <br />
                        लेखक एवं पूर्व सलाहकार, भारत सरकार</p>
                </div>
                
                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team13.png" alt="Card Image 6" />
                    <h3>श्री रितेश अग्रवाल जी</h3>
                    <div className="line"></div>
                    <p className="description">प्रभारी, लीगल-सेल, रामायण रिसर्च काउंसिल
                        <br />
                        अधिवक्ता, सुप्रीम कोर्ट</p>
                </div>
                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team14.png" alt="Card Image 6" />
                    <h3>श्री केवल कपूर जी</h3>
                    <div className="line"></div>
                    <p className="description">अध्यक्ष, कॉरपोरेट अफेयर्स एवं प्रभारी, ग्रंथ (श्रीरामलला- मन से मंदिर तक)
                        <br />
                        मीडिया प्रोफेशनल</p>
                </div>
                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team15.png" alt="Card Image 6" />
                    <h3>श्री पितांबर मिश्र जी
                    </h3>
                    <div className="line"></div>
                    <p className="description">सचिव, रामायण रिसर्च काउंसिल
                        <br />
                        शोधार्थी</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/vivek_sharma_ji.png" alt="vivek_sharma_ji" />
                    <h3>श्री विवेक शर्मा जी</h3>
                    <div className="line"></div>
                    <p className="description">विशेष सचिव, रामायण रिसर्च काउंसिल</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team17.png" alt="Card Image 6" />
                    <h3>श्री रौशन सिंह जी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल
                        <br />
                        स्वयंसेवक, आरएसएस</p>
                </div>


                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team23.png" alt="Card Image 6" />
                    <h3>श्री कमल चिब जी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल
                        <br />
                        समाजसेवी</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/laxminarayan-bhala.jpg" alt="Card Image 6" />
                    <h3>श्री लक्ष्मी नारायण भाला जी 'लक्खी दा'</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/Aditya-Jha.jpg" alt="Card Image 6" />
                    <h3>श्री आदित्य झा जी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team44.png" alt="Card Image 6" />
                    <h3>श्री रविकान्त गर्ग जी</h3>
                    <div className="line"></div>
                    <p className="description">वरिष्ठ उपाध्यक्ष, रामायण रिसर्च काउंसिल
                        <br />
                        पूर्व अध्यक्ष, उप्र व्यापार कल्याण बोर्ड,<br /> उप्र सरकार</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team46.png" alt="Card Image 6" />
                    <h3>श्री जीके केडिया जी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल
                        <br />
                        निदेशक, G. K. Kedia & Co.</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team20.png" alt="Card Image 6" />
                    <h3>श्री राजीव कुमार सिंह जी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल
                        <br />
                        आईटी प्रोफेशनल</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team24.png" alt="Card Image 6" />
                    <h3>श्री प्रण शर्मा जी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल
                        <br />
                        प्रेसिडेंट, श्री वैद्धनाथ आयुर्वेद भवन प्रा. लि.</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/amber-agrawal.jpg" alt="Card Image 6" />
                    <h3>श्री अम्बर अग्रवाल जी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/श्री-वेंकट-रेड्डी-यर्रम-जी.jpg" alt="Card Image 6" />
                    <h3>श्श्री वेंकट रेड्डी यर्रम जी</h3>
                    <div className="line"></div>
                    <p className="description">समन्वयक, दक्षिण भारत</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/shivam-singh-ji.jpg" alt="Card Image 6" />
                    <h3>श्री शिवम सिंह जी</h3>
                    <div className="line"></div>
                    <p className="description">आईटी हेड, रामायण रिसर्च काउंसिल<br />आईटी प्रोफेशनल</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team25.png" alt="Card Image 6" />
                    <h3>श्री अजय छंगाणी जी</h3>
                    <div className="line"></div>
                    <p className="description">Co-ordinator, कॉरपोरेट सेल, रामा. रिस. का.
                        <br />
                        आईटी प्रोफेशनल</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team27.jpg" alt="Card Image 6" />
                    <h3>श्री रुपेश रंजन जी</h3>
                    <div className="line"></div>
                    <p className="description">कोषाध्यक्ष, रामायण रिसर्च काउंसिल
                        <br />
                        सीए</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team29.png" alt="Card Image 6" />
                    <h3>श्रीमती अर्चना सिंघल जी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल
                        <br />
                        समाजसेविका</p>
                </div>
                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team30.png" alt="Card Image 6" />
                    <h3>श्रीमती अम्बिका शर्मा जी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल
                        <br />
                        समाजसेवी</p>
                </div>
                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team31.png" alt="Card Image 6" />
                    <h3>श्रीमती पूनम झा जी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल
                        <br />
                        अधिवक्ता, दिल्ली हाईकोर्ट</p>
                </div>
                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team32.png" alt="Card Image 6" />
                    <h3>श्री सोहन गिरी जी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल
                        <br />
                        समाजसेवी</p>
                </div>
                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team33.png" alt="Card Image 6" />
                    <h3>श्री राणा वैभव जी</h3>
                    <div className="line"></div>
                    <p className="description">समन्वयक, विश्वविद्यालय विभाग, RRC
                        <br />
                        शिक्षा क्षेत्र से जुड़े समाजसेवी</p>
                </div>
                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team34.png" alt="Card Image 6" />
                    <h3>श्री शशांक सिंह जी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल
                        <br />
                        समाजसेवी</p>
                </div>
                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team35.png" alt="Card Image 6" />
                    <h3>श्री कुमार स्मृति</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल
                        <br />
                        मीडिया प्रोफेशनल</p>
                </div>
                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team36.png" alt="Card Image 6" />
                    <h3>श्री आनंद मोहन सिंह जी</h3>
                    <div className="line"></div>
                    <p className="description">सह-प्रभारी, आईटी-सेल, रामायण रिसर्च काउं.
                        <br />
                        आईटी प्रोफेशनल</p>
                </div>
                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team37.png" alt="Card Image 6" />
                    <h3>श्री सुभाष झा जी</h3>
                    <div className="line"></div>
                    <p className="description">सह-प्रभारी, आईटी-सेल, रामायण रिसर्च काउंसिल<br />आईटी प्रोफेशनल</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team38.png" alt="Card Image 6" />
                    <h3>श्री रजनीश गुप्ता जी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल<br />समाजसेवी</p>
                </div>

                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team39.png" alt="Card Image 6" />
                    <h3>श्रीमती रितिका झा जी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल
                        <br />
                        समाजसेवी</p>
                </div>
                <div className={`card ${showMore ? '' : 'hidden'}`}>
                    <img src="/OurTeam images/team member/team40.png" alt="Card Image 6" />
                    <h3>श्री विकास वर्मा जी</h3>
                    <div className="line"></div>
                    <p className="description">सदस्य, रामायण रिसर्च काउंसिल
                        <br />
                        समाजसेवी</p>
                </div>

            </div>
            
            {!showMore && (
                <div className="see-more-wrapper">
                    <button className="see-more" onClick={toggleShowMore}>See More</button>
                </div>
            )}
            
            <Footer />
        </>
    );
};

export default TeamMember;
