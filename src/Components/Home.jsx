import React, { useContext, useState } from 'react'
import Context, { ContextData } from './Context'
import { UNSAFE_useScrollRestoration, useNavigate } from 'react-router-dom'

const Home = () => {

  const {places,setPlaces} = useContext(ContextData)
  const {text,setText} = useContext(ContextData)
  const {checkInDate,setCheckInDate} = useContext(ContextData)
  const {checkOutDate,setCheckOutDate} = useContext(ContextData)
  const {hotelData,setHotelData} = useContext(ContextData)
  const navigate=useNavigate()
  const [state, setState] = useState(["Patna","Mumbai","Goa","Jaipur","Bengaluru","Uttar","Punjab","Hyderabad"])

  function bestHotels(name){
    const newHotel=hotelData.filter((e)=> e.address.includes(name) && (e.rating>=4));
    return (<article class="home-hotel-card">
              <div class="home-hotel-card__art home-hotel-art-1"><img src={newHotel[0].image[0]}></img></div>

                <div class="home-hotel-card__body">
                  <h3 class="home-hotel-card__name">{newHotel[0].name}</h3>
                  <p class="home-hotel-card__state">{newHotel[0].address}</p>
                <div class="home-hotel-card__rating"><i className="fa-regular fa-star"></i>{newHotel[0].rating} <span>({newHotel[0].reviews})</span></div>
                <p class="home-hotel-card__price"><strong>₹{newHotel[0].price}</strong>/ night</p>
              </div>
            </article>)
  }

  return (
    <div className='home-body'>
<div class="home-wrap">
  <div class="home-topbar">
    <div class="home-brand"><svg><use href="#icon-logo"/></svg>Stay Way</div>
    <div class="home-topbar-actions">
      <span>Help</span>
      <span class="home-sign-in">Sign in</span>
    </div>
  </div>
</div>
 
<main class="home-wrap">
 
  {/* Popular destinations */}
  <section aria-labelledby="dest-heading">
    <div class="home-section-head">
      <div>
        <h2 id="dest-heading">Popular  destinations</h2>
        <p class="home-kicker">Landmark towns worth building a trip around.</p>
      </div>
      <a href="#" class="home-view-all">View all <svg><use href="#icon-arrow"/></svg></a>
    </div>
 
    <div class="home-dest-grid">
      {places.map((e)=>{
        return(<article class="home-dest-card" onClick={()=>{
                  setText(e.stateName)
                  setCheckInDate("2026-09-03")
                  setCheckOutDate("2026-09-09")
                  navigate("/data")
                }}>
                <img src={e.img}></img>
                <div class="home-dest-card__art home-dest-art-1"><svg><use href="#icon-statue"/></svg></div>
                <div class="home-dest-card__info">
                  <p class="home-dest-card__place">{e.stateName}</p>
                  <p class="home-dest-card__meta">{e.stays}stays</p>
                </div>
              </article>)
      })}
      
    </div>
  </section>
 
  {/* Popular hotels */}
  <section aria-labelledby="hotels-heading">
    <div class="home-hotels-head-row">
      <div>
        <h2 id="hotels-heading">Popular hotels</h2>
        <p class="home-kicker">Well-reviewed stays across this week's top routes.</p>
      </div>
      <div class="home-nav-pair">
        <button class="home-nav-btn" id="prevBtn" aria-label="Scroll to previous hotels"><svg><use href="#icon-chevron-left"/></svg></button>
        <button class="home-nav-btn" id="nextBtn" aria-label="Scroll to next hotels"><svg><use href="#icon-chevron-right"/></svg></button>
      </div>
    </div>
 
    <div class="home-hotels-row" id="hotelsRow">

      {state.map((e)=>bestHotels(e))}
    </div>
  </section>
 
  <footer>© 2026 Stay Way. Illustrative listings for demonstration.</footer>
</main>
    </div>
  )
}

export default Home
