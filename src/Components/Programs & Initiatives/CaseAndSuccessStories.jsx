import { useEffect, useState } from 'react';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';
import './CurrentProjects.css';
import "animate.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import ReactLoading from 'react-loading';

const MySwal = withReactContent(Swal);

const CaseAndSuccessStories = () => {
    const [loading, setLoading] = useState(true);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            setLoading(true); // Set loading before fetching
            try {
                const response = await axios.get('https://backend.eifdda.org/api/case-and-success-stories?populate=*');
                setStories(response.data.data); // Assuming data is in response.data.data
            } catch (error) {
                console.error('Error fetching stories:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchStories();
    }, []);

    const showStoryDetails = (story) => {
        const descriptionHtml = story.description.map((para, index) => (
            <p key={index} className="project-description">
                {para.children.map(child => child.text).join(' ')}
            </p>
        ));

        MySwal.fire({
            html: (
                <div className="project">
                    <h2 className="project-title">{story.title}</h2>
                    {descriptionHtml}
                </div>
            ),
            position: "top-end",
            width: "900px",
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

    return (
        <>
            <Header activeLink={"PROGRAMS & INITIATIVES"} />
            <div style={{ width: "100%", margin: 'auto' }}>
                <div className="projects-title">
                    <p>Case & Success Stories</p>
                </div>

                <section>
                    {loading ? ( // Show loading spinner if loading
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                            <ReactLoading type="bars" color="#3498db" height={50} width={50} />
                        </div>
                    ) : (
                        <div className="what-we-do3">
                            {stories.map(story => (
                                <div className="what-we-do-item3" key={story.id}>
                                    <h3>{story.title}</h3>
                                    <p>
                                        {story.description[1]?.children[0]?.text.slice(0, 280)}
                                        {/* {story.description[1]?.children[0]?.text.length > 180 ? '...' : ''} */}
                                    </p>
                                    <a onClick={() => showStoryDetails(story)} className="read-more">Read more</a>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
            <Footer />
        </>
    );
};

export default CaseAndSuccessStories;
