import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './News.css';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';
import ReactLoading from 'react-loading'; // Import ReactLoading

const MySwal = withReactContent(Swal);

const News = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);

    const baseURL = 'https://backend.eifdda.org'; // Replace with your actual base URL

    const showDetail = (news) => {
        MySwal.fire({
            html: (
                <div className='popContainer'>
                    <p style={{ textAlign: "center", fontSize: "27px", color: "#ff5722" }}>{news.Title}</p>
                    <img src={`${baseURL}${news.detail_image[0]?.url}`} alt="Detail" style={{ width: '95%', borderRadius: '5px' }} />
                    <label style={{marginTop:'20px'}}><strong> <FaCalendarAlt /> Date:</strong> {news.date}</label>
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
            setLoading(true); // Set loading before fetching
            try {
                const response = await fetch('https://backend.eifdda.org/api/newss?populate=*');
                const data = await response.json();
                setNewsData(data.data);
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchNews();
    }, []);

    return (
        <>
            <Header activeLink={"NEWS & EVENT"} />

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
        </>
    );
};

export default News;
