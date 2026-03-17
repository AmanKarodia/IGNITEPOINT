import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OurVision from './components/OurVision';
import AboutUs from './components/AboutUs';
import ClassroomRef from './components/ClassroomRef';
import Contact from './Pages/Contact';
import ApplyForm from './Pages/ApplyForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Enquiry" element={<EnquiryPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export const LandingPage = () => (
  <>
    <Navbar />
    <Hero />
    <OurVision />
    <AboutUs />
    <ClassroomRef />
    <Footer />
  </>
);

export const EnquiryPage = () => (
  <>
    <Navbar />
    <Hero />
    <ApplyForm />
    <Footer />
  </>
);

export const ContactPage = () => (
  <>
    <Navbar />
    <Hero />
    <Contact />
    <Footer />
  </>
);

export default App;