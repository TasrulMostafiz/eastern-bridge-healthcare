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
import WhyChina from './pages/treatment/WhyChina';
import CarT from './pages/treatment/CarT';
import GeneTherapy from './pages/treatment/GeneTherapy';
import Parkinsons from './pages/treatment/Parkinsons';
import MinimallyInvasive from './pages/treatment/MinimallyInvasive';
import TCM from './pages/treatment/TCM';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />           
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/patients" element={<Patients />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/consultants" element={<Consultants />} />
          <Route path="/treatment/why-china" element={<WhyChina />} />
          <Route path="/treatment/car-t" element={<CarT />} />
          <Route path="/treatment/gene-therapy" element={<GeneTherapy />} />
          <Route path="/treatment/parkinsons" element={<Parkinsons />} />
          <Route path="/treatment/minimally-invasive" element={<MinimallyInvasive />} />
          <Route path="/treatment/tcm" element={<TCM />} />
          <Route path="*" element={<NotFound />} />
          
          {/* Add other routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;