import { useState, useEffect } from 'react';
import './HeroSection.css';
import { FaHandHoldingHeart, FaHandsHelping, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { FaHeart, FaRegLightbulb, } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import "animate.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link, useNavigate } from 'react-router-dom';
const MySwal = withReactContent(Swal);
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
// import axios from 'axios';
import ReactLoading from 'react-loading'; // Import the loading spinner

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);
    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.on('slideChange', () => {
                setActiveIndex(swiperInstance.realIndex);
            });
        }
    }, [swiperInstance]);

    const handleSlideClick = (index) => {
        MySwal.fire({
            title: <p style={{ fontSize: '22px' }}>{slider.title}</p>,
            html: (
                <div>
                    <img src={`${BASE_URL}${slider.image[0].url}`} alt={`Image ${index + 1}`} style={{ width: '25%', height: 'auto' }} />
                    {slider.description.map((paragraph, index) => (
                        <p key={index} style={{ fontSize: '18px', textAlign: 'justify', padding: '5px' }}>
                            {paragraph.children.map(child => child.text).join(' ')}
                        </p>
                    ))}
                </div>
            ),
            position: "top-end",
            width: "700px",
            showCloseButton: true,
            showConfirmButton: false,
            showClass: {
                popup: 'animate__animated animate__slideInRight',
            },
            hideClass: {
                popup: 'animate__animated animate__slideOutRight',
            }
        });
    };

    // const [slidesDetail, setSlidesDetail] = useState([]);



    const BASE_URL = 'https://backend.eifdda.org'; // Add your base URL
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const fetchPartnersAndDonors = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://backend.eifdda.org/api/partners-and-donors?populate=*');
                const data = await response.json();
                setPartners(data.data);
            } catch (error) {
                console.error('Error fetching partners and donors:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPartnersAndDonors();
    }, []);

    const handleSlideClick3 = (index) => {
        const slide = partners[index];
        const imageUrl = slide.image[0]?.url; // Access the first image URL

        MySwal.fire({
            title: <p style={{ fontSize: '22px' }}>{slide.name}</p>,
            html: (
                <div>
                    {imageUrl && (
                        <img src={`https://backend.eifdda.org${imageUrl}`} alt={`Image ${index + 1}`} style={{ width: '25%', height: 'auto' }} />
                    )}
                    {slide.description.map((desc, descIndex) => (
                        <p key={descIndex} style={{ fontSize: '18px', textAlign: 'justify', padding: '5px' }}>
                            {desc.children.map((child) => child.text).join('')}
                        </p>
                    ))}
                </div>
            ),
            position: "top-end",
            width: "700px",
            showCloseButton: true,
            showConfirmButton: false,
            showClass: {
                popup: `animate__animated animate__slideInRight`,
            },
            hideClass: {
                popup: `animate__animated animate__slideOutRight`,
            }
        });
    };

    const handleExploreClick = (slide) => {
        MySwal.fire({
            title: slide.title,
            html: (
                <div style={{ textAlign: 'justify' }}>
                    <img src={`${BASE_URL}${slide.image[0].url}`} alt="AU Visit" style={{ width: '100%', height: 'auto', marginBottom: '15px' }} />
                    {slide.description.map((paragraph, index) => (
                        <p key={index}>{paragraph.children.map(child => child.text).join(' ')}</p>
                    ))}
                    {slide.detail_images && slide.detail_images.length > 0 ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
                            {slide.detail_images.map((detailImage, index) => (
                                <img
                                    key={index}
                                    src={`${BASE_URL}${detailImage.url}`}
                                    alt={`Detail Image ${index + 1}`}
                                    style={{ width: '100%', height: '270px' }}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>No additional images available.</p>
                    )}
                </div>
            ),
            showCloseButton: true,
            width: '900px',
            showClass: {
                popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
            }
        });
    };

    const navigate = useNavigate();
    const cardstoggleGetInvolved = () => {
        MySwal.fire({
            html: (
                <div className='contactLists2'>
                    <label style={{ fontSize: '30px', color: '#ff6b0b', fontWeight: '700', margin: '50px' }}>Get Involved</label>
                    <>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={navigateToDonate}>Donate</p>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={navigateToVolunteer}>Volunteer</p>
                        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={navigateToGallery}>Collaboration</p>
                    </>
                </div>
            ),
            showConfirmButton: false,
            showDenyButton: false,
            showCloseButton: true,
            width: "400px",
            denyButtonText: "Close",
            imageClass: "img-responsive",
            imageAlt: "Custom image",
            showClass: {
                popup: "animate__animated animate__bounceIn",
            },
            hideClass: {
                popup: "animate__animated animate__zoomOut",
            }
        });
    };
    const navigateToDonate = () => {
        MySwal.close();
        navigate('/donation');
    };
    const navigateToVolunteer = () => {
        MySwal.close();
        navigate('/contact');
    };
    const navigateToGallery = () => {
        MySwal.close();
        navigate('/Gallery');
    };

    const [slider, setSlides] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchSlides = async () => {
            setLoading(true); // Set loading before fetching
            try {
                const response = await fetch(`${BASE_URL}/api/sliders?populate=*`);
                const data = await response.json();
                setSlides(data.data);
            } catch (error) {
                console.error('Error fetching slides:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchSlides();
    }, []);



    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch('https://backend.eifdda.org/api/images?populate=*');
                const data = await response.json();
                const imageUrl = data.data[0].image[0].formats.large.url;
                setImageUrl(`https://backend.eifdda.org${imageUrl}`);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };
        fetchImage();
    }, []);

    const [donors, setDonors] = useState([]);
    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const response = await fetch('https://backend.eifdda.org/api/donors?populate=*');
                const data = await response.json();
                setDonors(data.data);
                // setSlidesDetail(data.data)
            } catch (error) {
                console.error('Error fetching partners:', error);
            }
        };
        fetchPartners();
    }, []);

    const [newsData, setNewsData] = useState([]);
    const baseURL = 'https://backend.eifdda.org'; // Replace with your actual base URL
    const showDetail = (news) => {
        MySwal.fire({
            html: (
                <div className='popContainer'>
                    <p style={{ textAlign: "center", fontSize: "27px", color: "#ff5722" }}>{news.Title}</p>
                    <img src={`${baseURL}${news.detail_image[0]?.url}`} alt="Detail" style={{ width: '95%', borderRadius: '5px' }} />
                    <label style={{ marginTop: '20px' }}><strong> <FaCalendarAlt /> Date:</strong> {news.date}</label>
                    <label><strong> <FaMapMarkerAlt /> Location:</strong> {news.location}</label>
                    {news.description.map((para, index) => (
                        <p key={index}>{para.children[0].text}</p>
                    ))}
                </div>
            ),
            showCloseButton: true,
            width: '900px',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    };
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://backend.eifdda.org/api/newss?populate=*');
                const data = await response.json();
                setNewsData(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching news:', error);
                setLoading(false);
            }
        };
        fetchNews();
    }, []);

    const getTargetDate = () => {
        const now = new Date();
        const currentYear = now.getFullYear();
        const targetDate = new Date(currentYear, 1, 1); // February 1 of the current year

        // If February 1 has already passed this year, set it for next year
        if (now > targetDate) {
            targetDate.setFullYear(currentYear + 1);
        }

        return targetDate;
    };

    const targetDate = getTargetDate();

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const { days, hours, minutes, seconds } = timeLeft;



    return (
        <div>
            <Header activeLink={"HOME"} />
            <main>

                <div style={{
                    zIndex: "100",
                    position: 'absolute',
                    top: '40%', // Center vertically
                    left: '50%', // Center horizontally
                    transform: 'translate(-50%, -50%)', // Adjust for exact center
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '10px',
                    width: '80%', // Adjust width as needed
                    maxWidth: '600px', // Optional: Set a max-width for larger screens
                }}>
                    <div className="countdown-container">
                        <h1 style={{ color: 'white' }} className="countdown-title">World Interfaith Harmony Week</h1>
                        <div className="countdown-grid">
                            <div className="countdown-item">
                                <span className="countdown-value">{days}</span>
                                <span className="countdown-label">Days</span>
                            </div>
                            <div className="countdown-item">
                                <span className="countdown-value">{hours}</span>
                                <span className="countdown-label">Hours</span>
                            </div>
                            <div className="countdown-item">
                                <span className="countdown-value">{minutes}</span>
                                <span className="countdown-label">Minutes</span>
                            </div>
                            <div className="countdown-item">
                                <span className="countdown-value">{seconds}</span>
                                <span className="countdown-label">Seconds</span>
                            </div>
                        </div>
                    </div>

                </div>


                {loading ? ( // Show loading spinner if loading
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                        <ReactLoading type="bars" color="#3498db" height={50} width={50} />
                    </div>
                ) : (


                    <Swiper
                        onSwiper={setSwiperInstance}
                        style={{ height: '100%', cursor: 'pointer' }}
                        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                        centeredSlides={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 7000, disableOnInteraction: false }}
                        speed={1000}
                        navigation={{ clickable: true }}
                        pagination={{ clickable: true }}
                    >
                        {slider.map((slide, index) => (
                            <SwiperSlide
                                key={slide.id}
                                onClick={() => handleSlideClick(index)}
                            // onMouseEnter={() => swiperInstance.slideTo(index)}  
                            >
                                <div className="hero" style={{ background: `url(${BASE_URL}${slide.image[0].url}) no-repeat center center/cover` }}>
                                    <div className="hero-content">
                                        <h2>{slide.title}</h2>
                                        <p>{slide.description[0].children[0].text}</p>
                                        <div className="hero-buttons">
                                            <a className="btn btn-donate" style={{ backgroundColor: '#ff6229' }} onClick={() => handleExploreClick(slide)}>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </main>

            <section className="info-section">
                <div className="info-content">
                    <h4>Welcome to EIFDDA </h4>
                    <h3>DRIVE SOCIAL CHANGE THROUGH INTERFAITH UNITY: Transform Lives and Empower Communities Across Ethiopia and Beyond </h3>
                    <p>
                        At EIFDDA, we harness the power of faith to foster peace, advocate for human rights, and empower communities.
                        By uniting Ethiopia&apos;s diverse religious groups, we drive value-based development and create lasting change.
                        Join us in building a just and harmonious society.
                    </p>
                    <a href="/about" className="btn">Explore Our Impact</a>
                    <a onClick={cardstoggleGetInvolved} className="btn2">Get Involved</a>
                </div>
                <div className="info-images">
                    {imageUrl ? <img src={imageUrl} alt="Image 1" /> : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                        <ReactLoading type="bars" color="#3498db" height={50} width={50} />
                    </div>}
                </div>
            </section>

            <section>
                <h1 style={{ textAlign: 'center', color: '#007459' }}>Partners and Donors</h1>

                {loading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                        <ReactLoading type="bars" color="#3498db" height={50} width={50} />
                    </div>
                ) : (
                    <Swiper
                        onSwiper={setSwiperInstance}
                        style={{ margin: '20px', marginTop: '50px', cursor: 'pointer' }}
                        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                        centeredSlides={true}
                        spaceBetween={0}
                        slidesPerView={5}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        speed={1000}
                        navigation={{ clickable: true }}
                    >
                        {partners.map((slide, index) => (
                            <SwiperSlide
                                key={slide.id}
                                className='sliderImage'
                                onClick={() => handleSlideClick3(index)}
                            // onMouseEnter={() => setActiveIndex(index)}
                            // onMouseLeave={() => setActiveIndex(null)}
                            >
                                {slide.image[0]?.url ? (
                                    <img src={`https://backend.eifdda.org${slide.image[0].url}`} alt={`Image ${index + 1}`} />
                                ) : (
                                    <div>No Image Available</div>
                                )}
                                {activeIndex === index && (
                                    <div className="description">
                                        <p>{slide.name}</p>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </section>

            <section id="partners-section">
                <div className="partners-container">
                    {loading ? ( // Show loading spinner if loading
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                            <ReactLoading type="bars" color="#3498db" height={50} width={50} />
                        </div>
                    ) : (
                        donors.map((donor) => (
                            <div className="partner" key={donor.id}>
                                <a href={donor.description[0].children[1].url} target="_blank" rel="noopener noreferrer">
                                    <img src={`https://backend.eifdda.org${donor.image[0].url}`} alt={donor.title || 'donor'} />
                                </a>
                            </div>
                        ))
                    )}
                </div>
            </section>

            <section className="impact-section">
                <div className="impact-content">
                    <h4>Mission and Impact </h4>
                </div>
                <div className="impact-cards">
                    <div className="card">
                        <div className="card-icon"><FaHandHoldingHeart /></div>
                        <h3>Mission Statement:</h3>
                        <p>Our mission at EIFDDA is to foster a harmonious and just society through value-based development,
                            interfaith collaboration, and capacity-building. We unite faith-based and community organizations
                            to drive impactful change across Ethiopia and beyond.
                        </p>
                        {/* <a href="#" className="card-link">Learn More</a> */}
                    </div>
                    <div className="card">
                        <div className="card-icon"><FaUsers /></div>
                        <h3>Impact Summary: </h3>
                        <p>From advocating for human rights to promoting sustainable practices, our work addresses critical
                            issues and empowers communities. With your support, we amplify our efforts to create lasting change
                            and build a better future for all.
                        </p>
                        {/* <a href="#" className="card-link">Learn More</a> */}
                    </div>
                </div>
            </section>

            <div style={{ paddingBottom: '10px' }}>
                <Link to="/about" className="read-more3">Learn More</Link>
            </div>


            <section>
                <p className='coreStratage'>Core Strategic Focus Areas </p>
                <p className='coreStratageText' >
                    Explore the key areas where EIFDDA is making a difference. Our strategic focus areas drive
                    our mission forward, tackling pressing issues and fostering sustainable development.
                </p>
                <div className="what-we-do">
                    <div className="what-we-do-item">
                        <FaHandsHelping className="icon" />
                        <h3>Strengthening Capacity and Mobilizing Resources</h3>
                        <p>
                            We enhance the effectiveness of faith-based and community organizations by providing essential training and resources.
                            This integrated approach ensures that our partners can effectively address critical challenges such as human rights
                            advocacy and community development.
                        </p>
                        <a href="#" className="read-more">Learn More</a>
                    </div>
                    <div className="what-we-do-item">
                        <FaRegLightbulb className="icon" />
                        <h3>Interfaith Collaboration and Dialogue</h3>
                        <p>
                            We bridge gaps between religious communities through dialogue and joint projects, fostering understanding and cooperation.
                            Our efforts promote a cohesive society where diverse faiths work together for the common good.
                        </p>
                        <a href="#" className="read-more">Discover How</a>
                    </div>
                    <div className="what-we-do-item">
                        <FaUsers className="icon" />
                        <h3>Human Rights Advocacy</h3>
                        <p>
                            Our advocacy programs protect vulnerable groups and champion Freedom of Religion or Belief (FoRB). We work to end harmful
                            practices and ensure that everyone can live with dignity and respect.
                        </p>
                        <a href="#" className="read-more">See Our Success Stories</a>
                    </div>
                    <div className="what-we-do-item">
                        <FaHeart className="icon" />
                        <h3>Community Development</h3>
                        <p>
                            We empower communities by providing education, economic support, and essential services. Our initiatives help individuals
                            and families achieve self-reliance and improve their quality of life.
                        </p>
                        <a href="#" className="read-more">Find Out More</a>

                    </div>
                    <div className="what-we-do-item">
                        <FaHeart className="icon" />
                        <h3>Sustainable Development</h3>
                        <p>
                            Our commitment to sustainability addresses environmental challenges and promotes eco-friendly practices.
                            We support projects that ensure long-term benefits for communities and the planet.
                        </p>
                        <a href="#" className="read-more">Explore Our Projects</a>

                    </div>
                </div>

            </section>

            <section className="fixed-background-section">
                <div className="content">
                    <h1>Impact Highlights</h1>
                    <p>
                        Discover the stories of resilience, hope, and transformation brought to life by EIFDDA’s impactful initiatives.
                        These success stories illuminate the power of interfaith dialogue, community-driven solutions, and targeted
                        advocacy to change lives in Ethiopia’s most vulnerable regions.
                    </p>
                    <a href="/donation" className="btn">Read Our Stories</a>
                </div>
            </section>


            <section>
                <h2 style={{ textAlign: 'center', fontSize: '27px', color: '#007459', paddingTop: '27px' }}>
                    Get Involved
                </h2>
                <h4 className='title-get-involved'>Get Involved: Make a Difference!</h4>
                <p style={{ textAlign: 'center', width: '70%', margin: 'auto' }}>
                    Join our mission to create positive change. Your support is vital—here’s how you can help:
                </p>
                <div className="what-we-do2">
                    <div className="what-we-do-item2">
                        <FaHandsHelping className="icon" />
                        <h3>Donations</h3>
                        <p>
                            Fund vital programs that uplift communities.
                        </p>
                        <a href="/donation" className="read-more2">Donate</a>
                    </div>
                    <div className="what-we-do-item2">
                        <FaHeart className="icon" />
                        <h3>Volunteer</h3>
                        <p>
                            Share your time and skills to make an impact.
                        </p>
                        <a href="/contact" className="read-more2">Volunteer</a>
                    </div>
                    <div className="what-we-do-item2">
                        <FaUsers className="icon" />
                        <h3>Collaboration</h3>
                        <p>
                            Partner with us for Sustainable<br /> Change!
                        </p>
                        <a href="/contact" className="read-more2">Collaboration</a>

                    </div>
                </div>

            </section>

            <section className="articles-section">
                <div className="impact-content">
                    <h5 style={{ color: '#007459', fontSize: '27px' }}>Our News</h5>
                </div>

                {loading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                        <ReactLoading type="bars" color="#3498db" height={50} width={50} />
                    </div>
                ) : (
                    <div className="articles-container">
                        {newsData.map((news) => (
                            <div className="article-card" key={news.id}>
                                <img src={`${baseURL}${news.image[0]?.url}`} alt={`Article ${news.id}`} />
                                <div className="article-content">
                                    <h4>{news.Title}</h4>
                                    <p>{news.description[0]?.children[0]?.text.slice(0, 160)}{news.description[0]?.children[0]?.text.length > 160 ? '...' : ''}</p>
                                    <h3><FaCalendarAlt /> Date: {news.date}</h3>
                                    <h3><FaMapMarkerAlt /> Location: {news.location}</h3>
                                    <a onClick={() => showDetail(news)} className="read-more" style={{ backgroundColor: '#ff6229' }}>Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>


            <Footer />

        </div>
    );
};

export default Home;
