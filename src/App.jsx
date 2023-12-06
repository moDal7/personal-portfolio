import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hello from './components/Hello.jsx'
import Projects from './components/Projects.jsx'
import './App.css'


function App() {

  return (
    <>
      <Navbar />
      <Hello />
      <Projects />
    </>
  )
}

export default App
