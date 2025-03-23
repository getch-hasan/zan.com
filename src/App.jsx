import { useEffect, useState } from 'react'
import './App.css'
import HeroSection from './Components/Home/HeroSection'
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Home/Services'
import About from './Components/Home/About'
import Contact from './Components/Home/Contact'
import Footer from './Components/Footer'
import 'aos/dist/aos.css';
import Aos from 'aos'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import PrivacyPolicy from './Components/Privecy'
import TermsConditions from './Components/TermsCondition'
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-condition" element={<TermsConditions />} />
    </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
