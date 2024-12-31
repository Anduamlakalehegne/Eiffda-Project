import { useEffect, useState } from 'react';
import './Events.css';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';
import { Typography, Box,  } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactLoading from 'react-loading'; // Import ReactLoading

const UpcomingEvents = () => {
  const MySwal = withReactContent(Swal);
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const showDetail = (event) => {
    MySwal.fire({
      html: (
        <div className='popContainer'>
          <Typography variant="h4" gutterBottom align="center" color="primary" style={{ marginTop: "20px" }}>
            {event.title}
          </Typography>
          {event.description.map((para, index) => (
            <Typography key={index} variant="body1" gutterBottom>
              {para.children[0].text}
            </Typography>
          ))}

          {/* Event Info */}
          <Box sx={{ justifyContent: 'space-between', mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EventIcon sx={{ mr: 1 }} color="action" />
              <Typography variant="body1">
                <strong>Date:</strong> {event.date ? event.date : "To be confirmed"}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PlaceIcon sx={{ mr: 1 }} color="action" />
              <Typography variant="body1">
                <strong>Location:</strong> {event.location}
              </Typography>
            </Box>
          </Box>

          {/* Additional sections can be populated similarly */}
        </div>
      ),
      showCloseButton: true,
      width: '800px',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  };

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch('https://backend.eifdda.org/api/upcoming-events?populate=*');
        const data = await response.json();
        setEventsData(data.data);
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

      <h1 style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px', fontSize: '27px' }}>Upcoming Events</h1>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
          <ReactLoading type="bars" color="#3498db" height={50} width={50} />
        </div>
      ) : (
        <div className="events">
          {eventsData.map((event) => (
            <div className="event" key={event.id}>
              <h2 style={{ display: 'flex', justifyContent: 'center' }}>{event.title}</h2>
              <p><FaCalendarAlt /> {event.date ? event.date : "To be confirmed"}</p>
              <p><FaMapMarkerAlt /> {event.location? event.location: "To be confirmed"}</p>
              <p>{event.description[0].children[0].text.slice(0, 180)}</p>
              <a onClick={() => showDetail(event)} className="read-more" style={{ backgroundColor: '#ff6229' }}>Read More</a>
            </div>
          ))}
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default UpcomingEvents;
