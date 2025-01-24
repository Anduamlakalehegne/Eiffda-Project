import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsTelegram} from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top-item">
                    <FaPhoneAlt className="footer-icon" />
                    <div>
                        <h4>Call us for an appointment</h4>
                        <p>(+251) 940441215</p>
                        <p>(+251) 911746712</p>
                    </div>
                </div>
                <div className="footer-top-item">
                    <FaEnvelope className="footer-icon" />
                    <div>
                        <h4>Feel free to contact us.</h4>
                        <p><a href="mailto:eifdda.foryou@gmail.com">eifdda.foryou@gmail.com</a></p>
                        <p><a href="mailto:info@eifdda.org"> info@eifdda.org</a></p>
                        <p><a href="mailto:ewof.eiy@eifdda.org"> ewof.eiy@eifdda.org</a></p>
                    </div>
                </div>
                <div className="footer-top-item">
                    <FaMapMarkerAlt className="footer-icon" />
                    <div>
                        <h4>Address</h4>
                        <p>Ethiopia, Addiss Ababa,</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-links">
                    <div>
                        <h3>DONATE</h3>
                        <ul>
                            <li><a href="/donation">Donate to EIFDDA</a></li>
                            <li><a href="#">Sponsor Our Cause</a></li>
                            <li><a href="/TermsAndConditions">Terms And Conditions</a></li>
                            <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>ABOUT US</h3>
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/about#what-we-do">What we do</a></li>
                            <li><a href="/events">Past Events</a></li>
                            <li><a href="/UpcomingEvents">Upcoming Events</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>USefull Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/news">News</a></li>
                            <li><a href="#">Gellry</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>CONTACT US</h3>
                        <ul>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir//Ethiopia+Interfaith+Forum+for+Development,+Dialogue,+and+Action+(EIFDDA)+Addis+Ababa/@8.9401492,38.7320809,1589m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x164b81006cf08aaf:0x8acc33a70a229936!2m2!1d38.7320809!2d8.9401492!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D">Ethiopia, Addiss Ababa, Garment</a></li>
                            <li><a href="#">0940441215/0911746712</a></li>
                            <li><a href="mailto:eifdda.foryou@gmail.com">eifdda.foryou@gmail.com</a></li>
                            <li><a href="mailto:info@eifdda.org"> info@eifdda.org</a></li>
                        </ul>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/eifdda/" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
                            <a href="https://t.me/eifdda " target="_blank" rel="noopener noreferrer"><BsTelegram /></a>
                            <a href="https://twitter.com/EifddaForyou" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
                            <a href="https://www.youtube.com/@eifddaforyou7528" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{width:'80%', color:'#444'}}/>
            <p style={{textAlign:'center', fontSize:'15p'}}><a href='mailto:anduamlakalehegne@gmail.com' style={{textDecoration:'none', display:'block',color:'#777'}}>Website by Marefiya Tech</a></p>
        </footer>
    );
};

export default Footer;
