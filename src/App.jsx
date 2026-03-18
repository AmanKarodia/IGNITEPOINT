import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OurVision from './components/OurVision';
import AboutUs from './components/AboutUs';
import ClassroomRef from './components/ClassroomRef';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import WhyUs from './components/whyUs';
import CourseCat from './components/CourseCat';
import Gallary from './Pages/Gallary';
import ApplyForm from './Pages/Apply';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Enquiry" element={<EnquiryPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Courses" element={<CoursePage />} />
        <Route path="/Apply" element={<ApplyPage />} />
        <Route path="/Gallary" element={<GallaryPage />} />
      </Routes>
    </Router>
  );
}

export const LandingPage = () => (
  <>
    <Navbar />
    <Hero />
    <WhyUs />
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
    <Contact />
    <Footer />
  </>
);

export const CoursePage = () => (
  <>
    <Navbar />
    <Courses />
    <CourseCat />
    <Footer />
  </>
);

export const GallaryPage = () => (
  <>
    <Navbar />
    <Gallary />
    <Footer />
  </>
);

export const ApplyPage = () => (
  <>
    <Navbar />
    <ApplyForm />
    <Footer />
  </>
);



export default App;