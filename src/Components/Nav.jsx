import { useContext, useState } from "react"
import { ContextData } from "./Context"


const Nav = () => {

  const {text,setText} = useContext(ContextData)
  const {checkInDate,setCheckInDate} = useContext(ContextData)
  const {checkOutDate,setCheckOutDate} = useContext(ContextData)
  return (
    <div>
      <nav className="navbar">
        <p className="logo" >Euler</p>
 
        <form className="search-capsule" role="search">
          <div className="field">
            <i className="fa-solid fa-location-dot"></i>
            <div className="field-text">
              <label for="destination">Destination</label>
              <input id="destination" type="text" placeholder="Search city or hotel" value={text} onChange={(e)=>{
                setText(e.target.value)
              }}></input>
            </div>
          </div>
 
          <div className="field">
            <i className="fa-solid fa-calendar-days"></i>
            <div className="field-text">
        <label>Date</label>
        <div className="date-row">
          <div className="date-col">
            <span className="date-sublabel">Check-in</span>
            <input className="date-input" id="checkin" type="date" aria-label="Check-in date" value={checkInDate} onChange={(e)=>{
              setCheckInDate(e.target.value)
            }}></input>
          </div>
          <div className="date-divider"></div>
          <div className="date-col">
            <span className="date-sublabel">Check-out</span>
            <input className="date-input" id="checkout" type="date" aria-label="Check-out date" value={checkOutDate} onChange={(e)=>{
              setCheckOutDate(e.target.value)
            }} ></input>
          </div>
        </div>
      </div>
          </div>
 
          <div className="field">
              <i className="fa-solid fa-user-group"></i>
              <div className="field-text">
                <label>Rooms &amp; guests</label>
                <div className="counter-row">
                  <div className="counter">
                    <input type="number"></input>
                    <span>room</span>
                  </div>
                  <div className="counter">
                    <input type="number"  aria-label="Guests"></input>
                    <span>guests</span>
                  </div>
                </div>
              </div>
          </div>
 
          <button type="submit" className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Search</span>
          </button>
 
        </form>
      </nav>
    </div>
  )
}

export default Nav
