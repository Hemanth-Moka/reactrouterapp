import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './routingdemo/NavBar'
import Footer from './routingdemo/Footer'

// import './App.css'

function App() {
  return (
    <div>
      <h2>React Routing / Navigation Demo</h2>
      <BrowserRouter>
        <NavBar/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App