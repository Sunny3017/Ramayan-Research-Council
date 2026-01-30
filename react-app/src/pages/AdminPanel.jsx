import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../pagescss/AdminPanel.css';

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('gallery'); // 'gallery', 'slider', 'print', 'volunteers'
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
    const [printLink, setPrintLink] = useState('');
    const [printDate, setPrintDate] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [volunteers, setVolunteers] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editDescription, setEditDescription] = useState('');
    const navigate = useNavigate();

    const token = localStorage.getItem('adminToken');

    useEffect(() => {
        if (!token) {
            navigate('/admin/login');
        } else {
            fetchData();
        }
    }, [navigate, token, activeTab]);

    const fetchData = async () => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            if (activeTab === 'volunteers') {
                const response = await fetch(`${apiUrl}/api/volunteer`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const data = await response.json();
                setVolunteers(data);
            } else {
                let endpoint = `${apiUrl}/api/gallery`;
                if (activeTab === 'slider') endpoint = `${apiUrl}/api/slider`;
                if (activeTab === 'print') endpoint = `${apiUrl}/api/print-media`;
                
                const response = await fetch(endpoint);
                const data = await response.json();
                setImages(data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        
        if (!file) {
             setMessage('Please select a file');
             return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append('image', file);
        
        if (activeTab === 'gallery') {
            formData.append('description', description || '');
        } else if (activeTab === 'print') {
            formData.append('link', printLink || '#');
            formData.append('date', printDate || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
        }

        try {
            let endpoint = 'http://localhost:5000/api/gallery/upload';
            if (activeTab === 'slider') endpoint = 'http://localhost:5000/api/slider/upload';
            if (activeTab === 'print') endpoint = 'http://localhost:5000/api/print-media/upload';

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (response.ok) {
                setMessage('Image uploaded successfully!');
                setFile(null);
                setDescription('');
                setPrintLink('');
                setPrintDate('');
                fetchData(); // Refresh list
            } else {
                const data = await response.json();
                setMessage(data.message || 'Upload failed');
            }
        } catch (err) {
            console.error('Error uploading image:', err);
            setMessage('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this item?')) return;

        try {
            let endpoint = `http://localhost:5000/api/gallery/${id}`;
            if (activeTab === 'slider') endpoint = `http://localhost:5000/api/slider/${id}`;
            if (activeTab === 'print') endpoint = `http://localhost:5000/api/print-media/${id}`;

            const response = await fetch(endpoint, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                setImages(images.filter(img => img._id !== id));
            } else {
                alert('Failed to delete item');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const startEditing = (img) => {
        setEditingId(img._id);
        setEditDescription(img.description);
    };

    const cancelEditing = () => {
        setEditingId(null);
        setEditDescription('');
    };

    const handleUpdate = async (id) => {
        if (activeTab !== 'gallery') return; 

        try {
            const response = await fetch(`http://localhost:5000/api/gallery/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ description: editDescription }),
            });

            if (response.ok) {
                const updatedImage = await response.json();
                setImages(images.map(img => (img._id === id ? updatedImage : img)));
                setEditingId(null);
            } else {
                alert('Failed to update image');
            }
        } catch (error) {
            console.error('Error updating image:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    const getTabTitle = () => {
        if (activeTab === 'gallery') return 'Gallery';
        if (activeTab === 'slider') return 'Slider';
        if (activeTab === 'print') return 'Print Media';
        return 'Join Our Team Data';
    };

    return (
        <>
            <Header />
            <div className="admin-panel-container">
                <div className="admin-panel-header">
                    <h2>Admin Panel</h2>
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                </div>

                <div className="admin-sub-nav">
                    <button 
                        className={`sub-nav-btn ${activeTab === 'gallery' ? 'active' : ''}`}
                        onClick={() => { setActiveTab('gallery'); setMessage(''); }}
                    >
                        Gallery Management
                    </button>
                    <button 
                        className={`sub-nav-btn ${activeTab === 'slider' ? 'active' : ''}`}
                        onClick={() => { setActiveTab('slider'); setMessage(''); }}
                    >
                        Slider Management
                    </button>
                    <button 
                        className={`sub-nav-btn ${activeTab === 'print' ? 'active' : ''}`}
                        onClick={() => { setActiveTab('print'); setMessage(''); }}
                    >
                        Print Media Management
                    </button>
                    <button 
                        className={`sub-nav-btn ${activeTab === 'volunteers' ? 'active' : ''}`}
                        onClick={() => { setActiveTab('volunteers'); setMessage(''); }}
                    >
                        Join Our Team Data
                    </button>
                </div>
                
                {/* Upload Section - Only show if NOT volunteers tab */}
                {activeTab !== 'volunteers' && (
                    <div className="upload-section">
                        <h3>Upload New {getTabTitle()} Item</h3>
                        {message && <p className={message.includes('success') ? 'upload-message-success' : 'upload-message-error'}>{message}</p>}
                        <form onSubmit={handleUpload} className="upload-form">
                            <div>
                                <input
                                    type="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    accept="image/*"
                                    className="file-input"
                                />
                            </div>
                            
                            {activeTab === 'gallery' && (
                                <div className="description-container">
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Enter image description"
                                        rows="2"
                                        className="description-textarea"
                                    />
                                </div>
                            )}

                            {activeTab === 'print' && (
                                <>
                                    <div className="description-container">
                                        <input
                                            type="text"
                                            value={printLink}
                                            onChange={(e) => setPrintLink(e.target.value)}
                                            placeholder="Enter news link (e.g., https://...)"
                                            className="text-input"
                                            style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                                        />
                                    </div>
                                    <div className="description-container">
                                        <input
                                            type="text"
                                            value={printDate}
                                            onChange={(e) => setPrintDate(e.target.value)}
                                            placeholder="Enter date (e.g., April 27, 2023)"
                                            className="text-input"
                                            style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                                        />
                                    </div>
                                </>
                            )}

                            <button 
                                type="submit" 
                                disabled={loading}
                                className="upload-button"
                            >
                                {loading ? 'Uploading...' : 'Upload'}
                            </button>
                        </form>
                    </div>
                )}

                {/* Management Section */}
                {activeTab === 'volunteers' ? (
                    <div className="volunteers-section">
                        <h3>Submitted Applications ({volunteers.length})</h3>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Date</th>
                                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Name</th>
                                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Father's Name</th>
                                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Contact</th>
                                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Location</th>
                                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {volunteers.map((vol) => (
                                        <tr key={vol._id} style={{ borderBottom: '1px solid #dee2e6' }}>
                                            <td style={{ padding: '12px' }}>{new Date(vol.createdAt).toLocaleDateString()}</td>
                                            <td style={{ padding: '12px' }}>{vol.name}</td>
                                            <td style={{ padding: '12px' }}>{vol.fathersName}</td>
                                            <td style={{ padding: '12px' }}>
                                                <div>{vol.phone}</div>
                                                <div style={{ fontSize: '0.85em', color: '#666' }}>{vol.email}</div>
                                            </td>
                                            <td style={{ padding: '12px' }}>
                                                <div>{vol.district}, {vol.state}</div>
                                                <div style={{ fontSize: '0.85em', color: '#666' }}>{vol.address}</div>
                                            </td>
                                            <td style={{ padding: '12px', maxWidth: '300px' }}>{vol.message}</td>
                                        </tr>
                                    ))}
                                    {volunteers.length === 0 && (
                                        <tr>
                                            <td colSpan="6" style={{ padding: '20px', textAlign: 'center' }}>No applications found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <>
                        <h3>Manage {getTabTitle()} Items ({images.length})</h3>
                        <div className="gallery-grid">
                    {images.map((img) => (
                        <div key={img._id} className="gallery-item">
                            <div className="gallery-image-container">
                                <img src={activeTab === 'print' ? img.image : img.url} alt={img.description || img.alt || 'Image'} className="gallery-image" />
                            </div>
                            <div className="gallery-content">
                                <p className="upload-info">
                                    Uploaded: {new Date(img.createdAt).toLocaleDateString()} {new Date(img.createdAt).toLocaleTimeString()}
                                </p>
                                
                                {activeTab === 'print' && (
                                    <div style={{ marginBottom: '10px' }}>
                                        <p style={{ fontSize: '0.9rem', color: '#555' }}><strong>Date:</strong> {img.date}</p>
                                        <p style={{ fontSize: '0.9rem', color: '#555' }}>
                                            <strong>Link:</strong> <a href={img.link} target="_blank" rel="noopener noreferrer" style={{color: '#d32f2f'}}>{img.link !== '#' ? 'View News' : 'No Link'}</a>
                                        </p>
                                    </div>
                                )}

                                {editingId === img._id ? (
                                    <div>
                                        <textarea 
                                            value={editDescription} 
                                            onChange={(e) => setEditDescription(e.target.value)}
                                            className="edit-textarea"
                                            rows="3"
                                        />
                                        <div className="edit-actions">
                                            <button onClick={() => handleUpdate(img._id)} className="save-button">Save</button>
                                            <button onClick={cancelEditing} className="cancel-button">Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        {activeTab === 'gallery' && <p className="description-text">{img.description}</p>}
                                        <div className="item-actions">
                                            {activeTab === 'gallery' && (
                                                <button onClick={() => startEditing(img)} className="edit-button">Edit Caption</button>
                                            )}
                                            <button onClick={() => handleDelete(img._id)} className="delete-button">Delete</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default AdminPanel;
