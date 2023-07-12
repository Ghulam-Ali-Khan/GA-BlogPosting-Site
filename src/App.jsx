import { useState } from 'react'

// import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import {Route, Routes} from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import BlogDetail from './pages/BlogDetail';
import CategoryPage from './pages/CategoryPage';
function App() {
 

  return (
  <>
  <Header/>

<Routes>
<Route path="/" element={<Home />}/>
<Route path="/about" element={<About />}/>
<Route path="/contact" element={<Contact />}/>
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/search-results" element={<SearchPage/>} />
<Route path="/blog-detail" element={<BlogDetail/>} />
<Route path="/category-list" element={<CategoryPage/>} />
</Routes>

  <Footer/>
  </>
  )
}

export default App
