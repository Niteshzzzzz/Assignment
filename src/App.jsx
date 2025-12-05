import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import About from './components/About'
import MarqueeStrip from './components/Marquee'
import ProjectsSection from './components/ProjectsSection'

function App() {
      const [dark, setDark] = useState(false);


  return (
    <>
      <NavBar dark={dark} setDark={setDark} />
      <HeroSection dark={dark} setDark={setDark} />
      <MarqueeStrip dark={dark} />
      <About dark={dark} setDark={setDark} />
      <ServicesSection dark={dark} setDark={setDark} />
      <ProjectsSection dark={dark} />
      <ContactSection dark={dark} setDark={setDark} />
      <Footer dark={dark} setDark={setDark} />
    </>
  )
}

export default App
