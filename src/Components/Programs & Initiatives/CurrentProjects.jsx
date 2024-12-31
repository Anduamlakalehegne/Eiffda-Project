import { useEffect, useState } from 'react';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';
import './CurrentProjects.css';
import "animate.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactLoading from 'react-loading'; // Import ReactLoading

const MySwal = withReactContent(Swal);

const CurrentProjects = () => {
    const [projectData, setProjectData] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    // Fetch project data from API
    useEffect(() => {
        const fetchProjectData = async () => {
            setLoading(true); // Set loading to true before fetching
            try {
                const response = await fetch('https://backend.eifdda.org/api/current-projects?populate=*');
                const data = await response.json();
                if (data.data.length > 0) {
                    setProjectData(data.data);
                }
            } catch (error) {
                console.error('Error fetching project data:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchProjectData();
    }, []);

    const openProjectModal = (project) => {
        if (!project) return;

        const descriptionElements = project.description.map((descItem, index) => {
            return descItem.children.map((child, childIndex) => (
                <p key={`${index}-${childIndex}`}>{child.text}</p>
            ));
        });

        MySwal.fire({
            html: (
                <div className="project">
                    <h2 className="project-title">{project.title}</h2>
                    <div style={{ textAlign: 'justify' }}>{descriptionElements}</div>
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
                    <p>Current Projects</p>
                </div>

                <section>
                    {loading ? ( // Show loading spinner if loading
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                            <ReactLoading type="bars" color="#3498db" height={50} width={50} />
                        </div>
                    ) : (
                        <div className="what-we-do3">

                            {projectData.map((project, index) => (
                                <div className="what-we-do-item3" key={index}>
                                    <h3>{project.title}</h3>
                                    <p>
                                        {project.description[0]?.children[0]?.text.slice(0, 290)}
                                    </p>
                                    <a onClick={() => openProjectModal(project)} className="read-more">Read more</a>
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

export default CurrentProjects;
