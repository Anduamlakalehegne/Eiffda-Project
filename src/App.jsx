import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Donation from './Components/Donation/Donation';
import AboutUs from './Components/About Us/AboutUs';
import ContactUs from './Components/Contact Us/ContactUs';
import Events from './Components/Events/Events';
import UpcomingEvents from './Components/Events/UpcomingEvents';
import News from './Components/News/News';
import Gallery from './Components/Gallery/Gallery';
import CoreFocusAreas from './Components/Programs & Initiatives/CoreFocusAreas';
import CurrentProjects from './Components/Programs & Initiatives/CurrentProjects';
import CaseAndSuccessStories from './Components/Programs & Initiatives/CaseAndSuccessStories';
import TermsAndConditions from './Components/Privacy Policy and Terms of Use/TermsAndConditions';
import PrivacyPolicy from './Components/Privacy Policy and Terms of Use/PrivacyPolicy';
import Publication from './Components/Publications/Publications';
import { Circles } from 'react-loader-spinner';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouteWithLoading /> 
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/CoreFocusAreas" element={<CoreFocusAreas />} />
          <Route path="/CurrentProjects" element={<CurrentProjects />} />
          <Route path="/CaseAndSuccessStories" element={<CaseAndSuccessStories />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/publications" element={<Publication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// A separate component to handle loading and location change
function RouteWithLoading() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Set the loading state to true when the route is changing
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Set your desired timeout duration here (in ms)

    return () => clearTimeout(timer); // Cleanup timer when the component unmounts
  }, [location]); // Trigger on route change

  return (
    <>
      {loading && (
        <div className="loader">
          <Circles
            height="60"
            width="60"
            color="#FF6B0B"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </>
  );
}

export default App;
