import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Display from './components/Display'
import Navbar from './components/Navbar'
import AboutUs from './about/AboutUs'
import Signin from './signin/Signin'
import Contact from './contact/Contact'
export default function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Display/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/contact' element={<Contact/>} />
     </Routes>
  
    </div>
  )
}
