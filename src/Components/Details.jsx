import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ContextData } from './Context'

const Details = () => {
  const {hotelData,setHotelData} = useContext(ContextData)
  const {id} = useParams()
  const hotel=hotelData.find((e)=>e.id===Number(id))
  const {checkInDate,setCheckInDate} = useContext(ContextData)
  const {checkOutDate,setCheckOutDate} = useContext(ContextData)
  const {total, setTotal} = useContext(ContextData)
  return (
    <div className='hero-detail'>
        <Link to={"/data"} className="hd-back-link">
          <span aria-hidden="true"><i className="fa-solid fa-arrow-left-long"></i></span> Back to hotels
        </Link>
 
      <main className="hd-wrap"> 
 
  
        <section className="hd-gallery" aria-label="Photo gallery">
          {hotel.image.map((e)=>{
            return <img className="hd-g1" src={e} alt={hotel.name}></img>
          })}
    
          {/* <button class="hd-show-all">All photos</button> */}
        </section>
 
  
  <div class="hd-title-row">
    <div>
      <p class="hd-kicker">Business Hotel · {hotel.address}</p>
      <h1>{hotel.name}</h1>
      <p class="hd-location"><i class="fa-solid fa-location-dot"></i> {hotel.expandedAddress}</p>
    </div>
    <a href="#reviews" class="hd-rating-block">
      <span class="hd-rating-num"><i class="fa-solid fa-star"></i>{hotel.rating}</span>
      {/* <span class="hd-rating-stars" aria-hidden="true">★★★★☆</span> */}
      <span class="hd-rating-count">{hotel.reviews} reviews</span>
    </a>
  </div>
 
  <div class="hd-layout">
 
    
    <div class="hd-main-col">
 
      <section class="hd-block">
        
      </section>
 
      <hr></hr>
 
      <section class="hd-block">
        <h2>Amenities</h2>
        <ul class="hd-amenities">
          {hotel.amenities.map((e)=>{
            return<>
              <li>
                {e}
              </li>
            </>
          })}
            
            
        </ul>
      </section>
 
      <hr></hr>
 
      <section class="hd-block" id="reviews">
        <h2>Reviews</h2>
        <ul class="hd-review-list">
            {hotel.reviewData.map((e)=>{
              return <>
              <li class="hd-review">
                <div>
                  <p class="hd-review-name">{e.name}</p>
                  <p class="hd-review-stars" aria-hidden="true">{e.rating}</p>
                  <p>{e.comment}</p>
                </div>
              </li>
              </>
            })}
        </ul>
      </section>
 
      <hr></hr>
 
 
    </div>
 
    
    <aside class="hd-sidebar">
      <div class="hd-booking-card">
        <p class="hd-booking-price">₹{hotel.price} <span>/night</span></p>
        <p class="hd-booking-sub">Deluxe Room · taxes included</p>
 
        <div class="hd-booking-fields">
          <div class="hd-field">
            <label>Check-in</label>
            <span>{checkInDate}</span>
          </div>
          <div class="hd-field">
            <label>Check-out</label>
            <span>{checkOutDate}</span>
          </div>
          <div class="hd-field">
            <label>Guests</label>
            <span>{total} adults</span>
          </div>
        </div>
 
        <Link to={`/booking/${hotel.id}`}><button class="hd-book-btn" >Book Now</button></Link>
        <p class="hd-booking-note">Free cancellation until 24 hours before check-in</p>
      </div>
    </aside>
 
  </div>
</main>
 

<div class="hd-mobile-bar">
  <div>
    <p class="hd-price">₹{hotel.price}<span>/night</span></p>
    <p class="hd-sub">Deluxe Room</p>
  </div>
  <Link to={`/booking/${hotel.id}`}><button class="hd-book-btn" >Book Now</button></Link>
</div>
    </div>
  )
}

export default Details
