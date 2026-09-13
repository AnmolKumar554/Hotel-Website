import React from 'react'
import Nav from './Components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hotel from './Components/Hotel'
import Footer from './Components/Footer'
import Details from './Components/Details'
import Booking from './Components/Booking'
const App = () => {

  function update(id,newQty){
    setCart(prevCart=>
      prevCart.map(e=>        
        e.id==id?{...e,qty:newQty}:e
      )
    )
  }
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/data' element={<Hotel />}></Route>
        <Route path='/details' element={<Details />}></Route>
        <Route path='/booking' element={<Booking />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
