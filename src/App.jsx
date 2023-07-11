import { useState } from 'react'

// import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import {Route, Routes} from 'react-router-dom';
function App() {
 

  return (
  <>
  <Header/>

<Routes>
<Route path="/" element={<Home />}/>
<Route path="/about" element={<About />}/>
<Route path="/contact" element={<Contact />}/>
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
</Routes>

  <Footer/>
  </>
  )
}

export default App
