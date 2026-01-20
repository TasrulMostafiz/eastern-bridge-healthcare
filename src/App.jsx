import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Patients from './pages/Patients';
import Hospitals from './pages/Hospitals';
import Consultants from './pages/Consultants';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="*" element={<NotFound />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/consultants" element={<Consultants />} /> */}
          
          {/* Add other routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;