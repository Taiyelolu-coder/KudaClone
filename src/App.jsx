
import Header from "./Static/Header"
import Home from "./Pages/Home"
import Company from "./Pages/Company"
import Business from "./Pages/Company"
import Help from "./Pages/Help"
import Personal from "./Pages/Personal"
import Footer from "./Static/Footer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react"
import "./index.css"

const App = ()=> {
  

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/business" element={<Business/>} />
      <Route path="/companies" element={< Company/>} />
      <Route path="/help" element={<Help />} />
    

      </Routes>
      <Footer />
      </BrowserRouter>
    </>

  )
}

export default App


