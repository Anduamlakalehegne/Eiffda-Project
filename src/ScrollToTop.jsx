import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Every time the route changes, it will scroll to the top

  return null; // This component does not render anything
};

export default ScrollToTop;
