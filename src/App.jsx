import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WarriorCulture from './pages/WarriorCulture'
import IndividualCamps from './pages/IndividualCamps'
import MindsetTraining from './pages/MindsetTraining'
import BeGrundyFoundation from './pages/BeGrundyFoundation'
import AboutTommy from './pages/AboutTommy'
import Media from './pages/Media'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    if (typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push({
        event: 'virtualPageview',
        pagePath: pathname,
        pageTitle: document.title,
      })
    }
  }, [pathname])
  return null
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/warrior-culture" element={<WarriorCulture />} />
          <Route path="/individual-camps" element={<IndividualCamps />} />
          <Route path="/mindset-training" element={<MindsetTraining />} />
          <Route path="/be-grundy-foundation" element={<BeGrundyFoundation />} />
          <Route path="/about" element={<AboutTommy />} />
          <Route path="/media" element={<Media />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
