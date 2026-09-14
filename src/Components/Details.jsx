import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ContextData } from './Context'

const Details = () => {
  const {hotelData,setHotelData} = useContext(ContextData)
  const {id} = useParams()
  const hotel=hotelData.find((e)=>e.id===Number(id))
  const {checkInDate,setCheckInDate} = useContext(ContextData)
  const {checkOutDate,setCheckOutDate} = useContext(ContextData)
  return (
    <div className='hero-detail'>
        <Link to={"/data"} class="hd-back-link">
          <span aria-hidden="true">←</span> Back to hotels
        </Link>
 
<main class="hd-wrap">
 
  
  <section class="hd-gallery" aria-label="Photo gallery">
    <img class="hd-g1" src="https://picsum.photos/seed/maurya1/900/700" alt="Hotel Maurya, exterior"></img>
    <img class="hd-g2" src="https://picsum.photos/seed/maurya2/500/400" alt="Guest room"></img>
    <img class="hd-g3" src="https://picsum.photos/seed/maurya3/500/400" alt="Hotel lobby"></img>
    {/* <img class="hd-g4" src="https://picsum.photos/seed/maurya4/500/400" alt="Hotel restaurant"></img>
    <img class="hd-g5" src="https://picsum.photos/seed/maurya5/500/400" alt="Bathroom"></img> */}
    <button class="hd-show-all">All photos</button>
  </section>
 
  
  <div class="hd-title-row">
    <div>
      <p class="hd-kicker">Business Hotel · {hotel.address}</p>
      <h1>{hotel.name}</h1>
      <p class="hd-location"><i class="fa-solid fa-location-dot"></i> {hotel.expandedAddress}</p>
    </div>
    <a href="#reviews" class="hd-rating-block">
      <span class="hd-rating-num">{hotel.rating}</span>
      {/* <span class="hd-rating-stars" aria-hidden="true">★★★★☆</span> */}
      <span class="hd-rating-count">{hotel.reviews} reviews</span>
    </a>
  </div>
 
  <div class="hd-layout">
 
    
    <div class="hd-main-col">
 
      <section class="hd-block">
        {/* <h2>About this hotel</h2>
        <p>
          Hotel Maurya sits a few minutes from Fraser Road's shopping strip and
          the Hartali More junction, with easy access to Patna Junction and the
          city's business district. Rooms are quiet and well kept, built around
          the essentials — a comfortable bed, reliable air conditioning, and a
          front desk that's staffed around the clock for whatever comes up.
        </p> */}
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
 
      {/* <section class="hd-block">
        <h2>Rooms</h2>
 
        <article class="hd-room">
          <img src="https://picsum.photos/seed/maurya-deluxe/240/180" alt="Deluxe Room"></img>
          <div class="hd-room-info">
            <h3>Deluxe Room</h3>
            <p class="hd-room-specs">2 guests · 1 bed · 28 m²</p>
            <p class="hd-room-tags">WiFi · Air Conditioning</p>
          </div>
          <div class="hd-room-price">
            <p class="hd-price">₹1,800<span>/night</span></p>
            <button class="hd-select-btn">Select</button>
          </div>
        </article>
 
        <article class="hd-room">
          <img src="https://picsum.photos/seed/maurya-exec/240/180" alt="Executive Suite"></img>
          <div class="hd-room-info">
            <h3>Executive Suite</h3>
            <p class="hd-room-specs">3 guests · 2 beds · 42 m²</p>
            <p class="hd-room-tags">WiFi · Air Conditioning · Room Service</p>
          </div>
          <div class="hd-room-price">
            <p class="hd-price">₹3,200<span>/night</span></p>
            <button class="hd-select-btn">Select</button>
          </div>
        </article>
      </section> */}
 
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
            <span>{hotel.Guest} adults</span>
          </div>
        </div>
 
        <button class="hd-book-btn">Book Now</button>
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
  <button class="hd-book-btn">Book Now</button>
</div>
    </div>
  )
}

export default Details
