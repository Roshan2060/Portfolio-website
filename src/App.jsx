import { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Skill from './component/Skill'
import Contact from './component/Contact'
import Footer from './component/Footer'
function App() {

  return (
    <>
    <Navbar/>
    <Home />
   <About />
   <Skill/>
   <Contact/>
    <Footer/>
    </>
  )
}

export default App
