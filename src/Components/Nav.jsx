import { useContext, useState } from "react"
import { ContextData } from "./Context"


const Nav = () => {

  function submit(e){
    e.preventDefault()
  }
  const [display, setDisplay] = useState(false)
  const {text,setText} = useContext(ContextData)
  const {checkInDate,setCheckInDate} = useContext(ContextData)
  const {checkOutDate,setCheckOutDate} = useContext(ContextData)
  // const {room,setRoom} = useContext(ContextData)
  // const {guest,setGuest}=useContext(ContextData)
  const {rmAndGuest,setRmAndGuest}=useContext(ContextData)

  function update(id,newQty){
    setRmAndGuest(prevRmAndGuest=>
      prevRmAndGuest.map(e=>        
        e.id==id?{...e,Guest:newQty}:e
      )
    )
  }

  return (
    <div>
      <nav className="navbar">
        <p className="logo" >Euler</p>
 
        <form className="search-capsule" role="search" onSubmit={submit}>
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
        
        <div className="field" onClick={()=>{
          setDisplay(true)
        }} >
              <i className="fa-solid fa-user-group"></i>
              <div className="field-text">
                <label>Rooms &amp; guests</label>
                <div className="counter-row">
                  <div className="counter">
                    <span type="number">1</span>
                    <span>room</span>
                  </div>
                  <div className="counter">
                    <span type="number"  aria-label="Guests">1</span>
                    <span>guests</span>
                  </div>
                </div>
              </div>
        </div>
        { display &&
          rmAndGuest.map((e)=>{
            return <>
            <div class="rg-box" id="rgBox" key={e.id}  >

            <div class="rg-header">
              <span class="rg-title">Room &amp; Guests</span>
              <i class="fa-solid fa-xmark rg-cancel" id="rgCancel" onClick={()=>{
                setDisplay(false)
              }}></i>
            </div>
 
            <div class="rg-columns">
              <span class="rg-col-label">Room</span>
              <span class="rg-col-label">Guest</span>
            </div>
 
            <div class="rg-body" id="rgBody">
              <div class="rg-row">
                <span class="rg-room-label"><i class="fa-solid fa-bed"></i>Room {e.Room}</span>
              <div class="rg-qty-control">
                <button class="rg-qty-btn rg-qty-minus" onClick={()=>{
                  if(e.Guest>1){
                    update(e.id,e.Guest-1)
                  }

                }}><i class="fa-solid fa-minus"></i></button>
                <span class="rg-qty-value">{e.Guest}</span>
                <button class="rg-qty-btn rg-qty-plus" onClick={()=>{
                  if(e.Guest<5){
                    update(e.id,e.Guest+1)
                  }
                }}><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
          
            <div class="rg-footer" id="rgAddRoom">
              <i class="fa-solid fa-plus"></i> Add Room
            </div>
          </div>
          </div>
          </>
         })
}
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
