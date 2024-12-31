import { useState } from 'react';
import './ContactUs.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaYoutube } from 'react-icons/fa';
// import { BsFacebook, BsTelegram, BsTwitter, } from 'react-icons/bs';
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsTelegram} from "react-icons/bs";
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('https://back.eifdda.org/contact-us', formData);
            MySwal.fire({
                title: 'Message Sent!',
                text: 'Your message has been sent successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            MySwal.fire({
                title: 'Error!',
                text: 'There was an error sending your message. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <>
            <Header activeLink={"CONTACT"} />

            <div className="contact-us">
                <div className="contact-us-container">
                    <div className="contact-info">
                        <h1>Contact Us</h1>
                        <p>We would love to hear from you! Please fill out the form below to get in touch with us.</p>
                        <div className="contactInfo">
                            <div className="contactInfo-item">
                                <FaMapMarkerAlt className="contactInfoicon" />
                                <p>Addis Ababa, Ethiopia</p>
                            </div>
                            <div className="contactInfo-item">
                                <FaPhoneAlt className="contactInfoicon" />
                                <p><a href="tel:+251911741562">+251911741562</a></p>
                            </div>
                            <div className="contactInfo-item">
                                <FaEnvelope className="contactInfoicon" />
                                <p><a href="mailto:eifdda.foryou@gmail.com">eifdda.foryou@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="social-media">
                            <a href="https://www.facebook.com/eifdda/" className="social-icon" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
                            <a href="https://t.me/eifdda" className="social-icon" target="_blank" rel="noopener noreferrer"><BsTelegram /></a>
                            <a href="https://twitter.com/EifddaForyou" className="social-icon" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
                            <a href="https://www.youtube.com/@eifddaforyou7528" className="social-icon" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                            <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                            <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6230.201853059392!2d38.729506!3d8.9401545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b81006cf08aaf%3A0x8acc33a70a229936!2sEIFDDA!5e1!3m2!1sen!2set!4v1729678356126!5m2!1sen!2set"
                        width="100%"
                        height="450"
                        // style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >

                    </iframe>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ContactUs;
