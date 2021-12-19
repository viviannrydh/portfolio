import React, { useState } from 'react'
import './App.css'
import Projects from './components/Projects'
import selfie from './images/selfie.jpg'
import Aboutme from "./components/Aboutme"
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Aboutme />
      <Projects />
    </div>
  )
}

export default App
