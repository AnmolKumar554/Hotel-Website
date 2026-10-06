import { useContext, useState } from "react"
import { ContextData } from "./Context"
import { UNSAFE_useScrollRestoration, useNavigate } from "react-router-dom"

const Nav = () => {

  
  const {hotelData,setHotelData} = useContext(ContextData)
  const {fData,setFData} = useContext(ContextData)
  const [display, setDisplay] = useState(false)
  const [click, setClick] = useState(false)
  const {text,setText} = useContext(ContextData)
  const {checkInDate,setCheckInDate} = useContext(ContextData)
  const {checkOutDate,setCheckOutDate} = useContext(ContextData)
  const [count, setCount] = useState(1)
  const [total, setTotal] = useState(1)
  const [finalTotal, setFinalTotal] = useState(0)
  const {rmAndGuest,setRmAndGuest}=useContext(ContextData)
  const {rmData,setRmData} = useContext(ContextData)
  
  
  const navigate=useNavigate()

  function update(id,newQty){
    setRmAndGuest(prevRmAndGuest=>
      prevRmAndGuest.map(e=>        
        e.id==id?{...e,Guest:newQty}:e
      )
    )
  }
  
  const addedRmAndGuest=rmAndGuest.slice(0,count)
  function addRoomAndGuest(){
    if(count<rmAndGuest.length){
      setCount(prev=>prev+1)
      setTotal(prev=>prev+1)
      console.log(addedRmAndGuest);
      
    }
  }
  
  function submit(e){
    e.preventDefault()
    setFData(hotelData.filter((el)=> el.address.includes(text)))
    console.log(fData);
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
              <input id="destination" type="text" placeholder="Search city or hotel" value={text.charAt(0).toUpperCase()+text.slice(1).toLowerCase()} onKeyDown={(e)=>{
                if(e.key="Enter"){
                  setFData(hotelData.filter((e)=> e.address.includes(text.charAt(0).toUpperCase()+text.slice(1).toLowerCase())))
                }
              }} onChange={(e)=>{
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
              <span type="number">{addedRmAndGuest.length}</span>
              <span>room</span>
            </div>
            <div className="counter">
              <span type="number"  aria-label="Guests">{total}</span>
              <span>guests</span>
            </div>
            </div>
          </div>
        </div>
        {display &&
            <div class="rg-box" id="rgBox">

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
                {addedRmAndGuest.map((e)=>{
                  return<>
                      <div class="rg-row">
                        <span class="rg-room-label"><i class="fa-solid fa-bed"></i>Room {e.Room}</span>
                        <div class="rg-qty-control">
                          <button class="rg-qty-btn rg-qty-minus"   onClick={()=>{                           
                            if(e.Guest>1){
                              update(e.id,e.Guest-1)
                              setTotal(prev=>prev-1)
                            }

                          }}><i class="fa-solid fa-minus"></i></button>
                          <span class="rg-qty-value">{e.Guest}</span>
                          <button class="rg-qty-btn rg-qty-plus"  onClick={()=>{
                            if(e.Guest<5){
                            update(e.id,e.Guest+1)
                            setTotal(prev=>prev+1)
                          }
                          }}><i class="fa-solid fa-plus"></i></button>
                        </div>
                      </div>
                  </>
                })}
              </div>
            <button class="rg-footer" id="rgAddRoom"  onClick={addRoomAndGuest}>
              <i class="fa-solid fa-plus"></i> Add Room
            </button>
            <button class="rg-footer" id="rgAddRoom"  onClick={()=>{
          
              if(count>1){
                setRmAndGuest(prev=>
                  prev.map((item,index)=>
                    index===count-1 ? {...item,Guest:1} : item
                  )
                )
                setCount(prev=> prev-1)
                setTotal(total-Number(addedRmAndGuest[count-1].Guest))
              }}}>
              <i class="fa-solid fa-minus"></i>
              Remove Room
            </button>
          </div>
          }
          <button type="submit" className="search-btn" onClick={()=>{
            if(text===""){
              alert("enter something")
            }else{
              navigate("/data")
            }
            setFData(hotelData.filter((e)=> e.address.includes(text)))
          }}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Search</span>
          </button>
        </form>
      </nav>
    </div>
  )
}

export default Nav