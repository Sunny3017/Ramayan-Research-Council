import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import '../pagescss/JoinOurTeam.css';

const JoinOurTeam = () => {
    const [formData, setFormData] = useState({
        name: '',
        fathersName: '',
        state: '',
        district: '',
        address: '',
        phone: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/volunteer`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    fathersName: '',
                    state: '',
                    district: '',
                    address: '',
                    phone: '',
                    email: '',
                    message: ''
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <>
            <SEO 
                title="Join Our Team" 
                description="Become a member of Ramayan Research Council and contribute to the noble cause."
            />
            <Header />
            {/* <div className="banner_area">
                <div className="container">
                    <div className="setion_banner">
                        <h1 className="section_heading">परिवार का हिस्सा बने</h1>
                    </div>
                </div>
            </div> */}

            <div className="body-container join-team-container">
                <div className="container">
                    <div className="form-container join-form-container">
                        <h2 className="form-heading">सदस्यता फॉर्म (Membership Form)</h2>
                        
                        {status === 'success' && (
                            <div className="status-success">
                                धन्यवाद! आपका आवेदन सफलतापूर्वक जमा कर लिया गया है। हम जल्द ही आपसे संपर्क करेंगे।
                            </div>
                        )}
                        
                        {status === 'error' && (
                            <div className="status-error">
                                क्षमा करें, कुछ त्रुटि हुई। कृपया पुनः प्रयास करें।
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label form-label-custom">पूरा नाम (Name) *</label>
                                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label form-label-custom">पिता का नाम (Father's Name) *</label>
                                    <input type="text" className="form-control" name="fathersName" value={formData.fathersName} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label form-label-custom">ईमेल (Email ID) *</label>
                                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label form-label-custom">संपर्क नंबर (Contact Number) *</label>
                                    <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label form-label-custom">राज्य (State) *</label>
                                    <input type="text" className="form-control" name="state" value={formData.state} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label form-label-custom">जिला (District) *</label>
                                    <input type="text" className="form-control" name="district" value={formData.district} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label form-label-custom">स्थायी पता (Permanent Address) *</label>
                                <textarea className="form-control" name="address" value={formData.address} onChange={handleChange} rows="2" required></textarea>
                            </div>

                            <div className="mb-3">
                                <label className="form-label form-label-custom">आप हमसे क्यों जुड़ना चाहते हैं? (Why do you want to join us?)</label>
                                <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} rows="4"></textarea>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary submit-button" disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Sending...' : 'Submit / जमा करें'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default JoinOurTeam;
