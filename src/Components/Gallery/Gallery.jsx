import { useEffect, useState } from 'react';
import './Gallery.css';
import { FaSearchPlus, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import axios from 'axios';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import ReactLoading from 'react-loading'; // Import the loading component

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loading, setLoading] = useState(true); // Loading state

   useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://backend.eifdda.org/api/galleries?populate=*');
                const data = await response.json();
                const galleryImages = data.data[0].image.map(img => ({
                    src: `https://backend.eifdda.org${img.url}`, 
                    alt: img.name
                }));
                setImages(galleryImages); 
                setLoading(false);
            } catch (error) { 
                console.error('Error fetching images:', error); 
            } 
        }; 
        
        fetchImages();
    }, []);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = (e) => {
        e.stopPropagation(); // Prevent event from bubbling up and closing the modal
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation(); // Prevent event from bubbling up and closing the modal
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <Header activeLink={"RESOURCES"} />

            <div className="gallery-container">
                <h1 className="gallery-title">Our Gallery</h1>
                
                {loading ? ( // Show loading spinner if loading
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                        <ReactLoading type="bars" color="#3498db" height={50} width={50} />
                    </div>
                ) : (
                    <div className="gallery-grid">
                        {images.map((image, index) => (
                            <div key={index} className="gallery-item" onClick={() => openModal(index)}>
                                <img src={image.src} alt={image.alt} className="gallery-image" />
                                <div className="gallery-overlay">
                                    <FaSearchPlus className="gallery-icon" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <FaArrowLeft className="modal-arrow" onClick={prevImage} />
                        <img src={images[currentImageIndex].src} alt="Modal Content" className="modal-image" />
                        <FaArrowRight className="modal-arrow" onClick={nextImage} />
                        <span className="close" onClick={closeModal}>&times;</span>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};

export default Gallery;
