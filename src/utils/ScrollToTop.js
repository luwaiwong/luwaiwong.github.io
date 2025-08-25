import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Gets the current path from React Router

  useEffect(() => {
    // When the pathname changes (i.e., route changes), scroll to the top
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array: re-run this effect when `pathname` changes

  return null; // This component doesn't render any UI
}

export default ScrollToTop;