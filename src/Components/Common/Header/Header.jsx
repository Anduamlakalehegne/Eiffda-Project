import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { BsFacebook, BsTelegram, BsTwitter } from "react-icons/bs";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsTelegram} from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import './Header.css';
import "animate.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Header = ({ activeLink, handleClick }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const cardstoggle2 = () => {
        MySwal.fire({
            html: (
                <div className='contactLists2'>
                    <label style={{ fontSize: '30px', color: '#ff6b0b', fontWeight: '700', margin: '50px' }}>News & Event</label>
                    <>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={news}>Latest News</p>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={UpcomingEvents}>Upcoming Events</p>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={passedEvents}>Event Archive</p>
                    </>
                </div>
            ),
            showConfirmButton: false,
            showCloseButton: true,
            width: "500px",
            showClass: {
                popup: "animate__animated animate__bounceIn",
            },
            hideClass: {
                popup: "animate__animated animate__zoomOut",
            }
        });
    };

    const cardstoggleResources = () => {
        MySwal.fire({
            html: (
                <div className='contactLists2'>
                    <label style={{ fontSize: '30px', color: '#ff6b0b', fontWeight: '700', margin: '50px' }}>Resources</label>
                    <>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={navigateToPublications}>Publications</p>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={navigateToGallery}>Gallery</p>
                    </>
                </div>
            ),
            showConfirmButton: false,
            showCloseButton: true,
            width: "500px",
            showClass: {
                popup: "animate__animated animate__bounceIn",
            },
            hideClass: {
                popup: "animate__animated animate__zoomOut",
            }
        });
    };

    const cardstoggleGetInvolved = () => {
        MySwal.fire({
            html: (
                <div className='contactLists2'>
                    <label style={{ fontSize: '30px', color: '#ff6b0b', fontWeight: '700', margin: '50px' }}>Get Involved</label>
                    <>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={navigateToDonate}>Donate</p>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={navigateToVolunteer}>Volunteer</p>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={navigateToVolunteer}>Collaboration</p>
                    </>
                </div>
            ),
            showConfirmButton: false,
            showCloseButton: true,
            width: "500px",
            showClass: {
                popup: "animate__animated animate__bounceIn",
            },
            hideClass: {
                popup: "animate__animated animate__zoomOut",
            }
        });
    };

    const cardstoggleProgram = () => {
        MySwal.fire({
            html: (
                <div className='contactLists2'>
                    <label style={{ fontSize: '25px', color: '#ff6b0b', fontWeight: '700', margin: '50px' }}>Programs & Initiatives</label>
                    <>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={CoreFocusAreas}>Core Focus Areas</p>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={CurrentProjects}>Current Projects</p>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={CaseAndSuccessStories}>Case Studies and Success Stories</p>
                    </>
                </div>
            ),
            showConfirmButton: false,
            showCloseButton: true,
            width: "500px",
            showClass: {
                popup: "animate__animated animate__bounceIn", 
            },
            hideClass: {
                popup: "animate__animated animate__zoomOut", 
            }
        });
    };

    // const handleGalleryClick = () => {
    //     MySwal.fire({
    //         title: 'Gallery',
    //         text: 'Coming Soon!',
    //         icon: 'info',
    //         confirmButtonText: 'OK'
    //     });
    // };

    const news = () => {
        MySwal.close();
        navigate('/news');
    };

    const UpcomingEvents = () => {
        MySwal.close();
        navigate('/UpcomingEvents');
    };

    const passedEvents = () => {
        MySwal.close();
        navigate('/events');
    };

    const navigateToPublications = () => {
        MySwal.close();
        navigate('/publications');
    };

    const navigateToGallery = () => {
        MySwal.close();
        navigate('/Gallery');
    };

    const navigateToDonate = () => {
        MySwal.close();
        navigate('/donation');
    };

    const navigateToVolunteer = () => {
        MySwal.close();
        navigate('/contact');
    };

    const CoreFocusAreas = () => {
        MySwal.close();
        navigate('/CoreFocusAreas');
    };

    const CurrentProjects = () => {
        MySwal.close();
        navigate('/CurrentProjects');
    };

    const CaseAndSuccessStories = () => {
        MySwal.close();
        navigate('/CaseAndSuccessStories');
    };

    return (
        <>
            <header className="header2">
                <ul className="nav-links2">
                    <li><a href="tel:0940441215">0940441215/0911746712</a></li> 
                    <li><a href="mailto:info@eifdda.org">info@eifdda.org</a></li>
                </ul>
                <nav>
                    <ul className="nav-links3">
                        <li><a href="https://www.facebook.com/eifdda/" target="_blank" rel="noopener noreferrer"><BsFacebook /></a></li>
                        <li><a href="https://t.me/eifdda" target="_blank" rel="noopener noreferrer"><BsTelegram /></a></li>
                        <li><a href="https://twitter.com/EifddaForyou" target="_blank" rel="noopener noreferrer"><BsTwitter /></a></li>
                        <li><a href="https://www.youtube.com/@eifddaforyou7528" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><BsInstagram /></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a></li>
                    </ul>
                </nav>
            </header>
            <header className="header">
                <div className="logo">
                    <a href="/" style={{ display: 'block', textDecoration: 'none' }}>
                        <img src={logo} alt="Logo" style={{ width: '80px' }} />
                    </a>
                    <p>ETHIOPIA INTERFAITH FORUM FOR DEVELOPMENT <br /> DIALOGUE AND ACTION (EIFDDA)</p>
                </div>
                <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {[
                            { name: 'HOME', path: '/' },
                            { name: 'ABOUT US', path: '/about' },
                            { name: 'PROGRAMS & INITIATIVES' },
                            { name: 'NEWS & EVENT' },
                            { name: 'RESOURCES' },
                            { name: 'CONTACT', path: '/contact' },
                            { name: 'GET INVOLVED' },
                        ].map((link) => (
                            <li key={link.name}>
                                {link.name === 'NEWS & EVENT' ? (
                                    <span
                                        className={activeLink === link.name ? 'active' : ''}
                                        onClick={cardstoggle2}
                                        style={{ cursor: 'pointer', }}
                                    >
                                        {link.name}
                                    </span>
                                ) : link.name === 'PROGRAMS & INITIATIVES' ? (
                                    <span
                                        className={activeLink === link.name ? 'active' : ''}
                                        onClick={cardstoggleProgram}
                                        style={{ cursor: 'pointer', }}
                                    >
                                        {link.name}
                                    </span>
                                ) : link.name === 'RESOURCES' ? (
                                    <span
                                        className={activeLink === link.name ? 'active' : ''}
                                        onClick={cardstoggleResources}
                                        style={{ cursor: 'pointer', }}
                                    >
                                        {link.name}
                                    </span>
                                ) : link.name === 'GET INVOLVED' ? (
                                    <span
                                         className="volunteer-btn no-hover"
                                        onClick={cardstoggleGetInvolved}
                                        style={{ cursor: 'pointer', color: "#f3f3f3"}}
                                    >
                                        {link.name}
                                    </span>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={activeLink === link.name ? 'active' : ''}
                                        onClick={() => handleClick(link.name)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </header>
        </>
    );
};

export default Header;
