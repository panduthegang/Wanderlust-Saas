import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import DestinationsCatalogue from './pages/DestinationsCatalogue';
import DestinationDetails from './pages/DestinationDetails';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<DestinationsCatalogue />} />
        <Route path="/destinations/:slug" element={<DestinationDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
