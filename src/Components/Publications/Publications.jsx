import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// import './News.css';
import { FaCalendarAlt } from 'react-icons/fa';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';
import ReactLoading from 'react-loading';

const MySwal = withReactContent(Swal);

const Publication = () => {
    const [publicationData, setPublicationData] = useState([]);
    const [loading, setLoading] = useState(true);

    const baseURL = 'https://backend.eifdda.org';

    const showDetail = (publication) => {
        MySwal.fire({
            html: (
                <div className='popContainer'>
                    <p style={{ textAlign: "center", fontSize: "27px", color: "#ff5722" }}>{publication.title}</p>
                    <img src={`${baseURL}${publication.image[0]?.url}`} alt="Detail" style={{ width: '95%', borderRadius: '5px' }} />
                    <label style={{ marginTop: '20px' }}><strong> <FaCalendarAlt /> Published:</strong> {new Date(publication.publishedAt).toLocaleDateString()}</label>
                    {publication.description.map((para, index) => (
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
        const fetchPublications = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://backend.eifdda.org/api/publications?populate=*');
                const data = await response.json();
                setPublicationData(data.data);
            } catch (error) {
                console.error('Error fetching publications:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPublications();
    }, []);

    return (
        <>
            <Header activeLink={"PUBLICATIONS"} />

            <section className="articles-section">
                <div className="impact-content">
                    <h5 style={{ color: '#007459', fontSize: '27px' }}>Our Publications</h5>
                </div>

                {loading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                        <ReactLoading type="bars" color="#3498db" height={50} width={50} />
                    </div>
                ) : (
                    <div className="articles-container">
                        {publicationData.map((publication) => (
                            <div className="article-card" key={publication.id}>
                                <img src={`${baseURL}${publication.image[0]?.formats.thumbnail.url}`} alt={`Publication ${publication.id}`} />
                                <div className="article-content">
                                    <h4>{publication.title}</h4>
                                    <p>{publication.description[0]?.children[0]?.text.slice(0, 160)}{publication.description[0]?.children[0]?.text.length > 160 ? '...' : ''}</p>
                                    <h3><FaCalendarAlt /> Published: {new Date(publication.publishedAt).toLocaleDateString()}</h3>
                                    <a onClick={() => showDetail(publication)} className="read-more" style={{ backgroundColor: '#ff6229' }}>Read More</a>
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

export default Publication;
