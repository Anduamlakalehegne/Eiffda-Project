import { useEffect, useState } from 'react';
import './Events.css';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import ReactLoading from 'react-loading'; // Import ReactLoading

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true); // Start loading
            try {
                const response = await fetch('https://backend.eifdda.org/api/event-archives?populate=*');
                const data = await response.json();
                setEvents(data.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchEvents();
    }, []);

    return (
        <>
            <Header activeLink={"NEWS & EVENT"} />

            <h1 style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px', fontSize: '27px' }}>Events Archived</h1>

            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                    <ReactLoading type="bars" color="#3498db" height={50} width={50} />
                </div>
            ) : (
                <div className="events">
                    {events.map((event) => (
                        <div key={event.id} className="event">
                            <h2>{event.title}</h2>
                            <p><FaCalendarAlt /> {new Date(event.date).toLocaleDateString()}</p>
                            <p><FaMapMarkerAlt /> {event.location}</p>
                            <p>{event.description[0]?.children[0]?.text}</p>
                            {/* Add "Read More" functionality if needed */}
                        </div>
                    ))}
                </div>
            )}
            <Footer />
        </>
    );
};

export default Events;
