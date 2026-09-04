import React from 'react'
import Nav from './Components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hotel from './Components/Hotel'
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
      </Routes>
      
    </div>
  )
}

export default App
