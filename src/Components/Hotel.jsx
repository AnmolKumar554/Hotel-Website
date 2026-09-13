import React, { useState } from 'react'
import { useContext } from 'react'
import { ContextData } from './Context'

const Hotel = () => {
    const {hotelData,setHotelData} = useContext(ContextData)
    const {text,setText} = useContext(ContextData)
    const {checkInDate,setCheckInDate} = useContext(ContextData)
    const {checkOutDate,setCheckOutDate} = useContext(ContextData)
    const {fData,setFData} = useContext(ContextData)
    const [range, setRange] = useState(6200)
  return (
  <>
  <div className='hero-filter'>
    <div className='filter'>
      <div class="filter-sidebar">
        <div class="filter-sidebar__header">
        <h2>Filters</h2>
      </div>

      <div class="filter-section">
        <span class="filter-section__label">Price range</span>
        <span class="filter-section__label">Current Price ₹{range}</span>
      <div class="range-slider">
        <input type="range" min="1500" max="6200" step="10" defaultValue="6200" aria-label="Price" value={range} onChange={(e)=>{
          setRange(e.target.value)
        }}></input>
      </div>
      <div class="range-slider__scale"><span>₹1500</span><span>₹6200</span></div>
    </div>

    <hr class="filter-divider"></hr>

    <div class="filter-section">
      <span class="filter-section__label">Amenities</span>

      <div class="amenities-list">
        <label class="chip">
          <input type="checkbox" ></input>
          <span class="chip__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 8.5c5-5 11-5 16 0"/><path d="M7 12c3.5-3.5 6.5-3.5 10 0"/><path d="M10 15.5c1.5-1.5 2.5-1.5 4 0"/><circle cx="12" cy="19" r="1" fill="currentColor" stroke="none"/></svg></span>
          <span class="chip__label">Wifi</span>
          <span class="chip__check" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg></span>
        </label>
      </div>
    </div>
  </div>
    </div>
    <div className='hotel-main'>
      {fData.map((e)=>{
        if((e.availableFrom<=checkInDate && e.availableTo>=checkInDate && checkInDate<checkOutDate) && (e.availableTo>=checkOutDate && e.availableFrom<=checkOutDate && checkOutDate>checkInDate) && e.price<=range){
          return <>
              <div className="hotel-card">
                <div className="hotel-card__media">
                  <img
                  src={e.image}
                  alt={e.name}
                  />
          <div className="rating-pill">
            <i class="fa-solid fa-star"></i>
            {e.rating} ({e.reviews} reviews)
          </div>
          <div class="offer-badge">{e.offer}</div>
        </div>
 
        <div className="hotel-card__content">
 
          <div>
            <h2 className="hotel-card__name">{e.name}</h2>
            <p className="hotel-card__address">
              <i class="fa-solid fa-location-dot"></i>
              {e.expandedAddress}
            </p>
            <ul class="amenities">
              {e.amenities.map((el)=>{
                return <li>
                  {el}
                </li>
              })}
            </ul>
          </div>
 
          <div className="hotel-card__stay">
            <div className="stay-block">
              <span className="stay-label">Avaiable-From</span>
              <span className="stay-date">{e.availableFrom}</span>
              <span className="stay-time"></span>
            </div>
            <div className="stay-divider"></div>
            <div className="stay-block stay-block--end">
              <span className="stay-label">Avaiable-Till</span>
              <span className="stay-date">{e.availableTo}</span>
              <span className="stay-time"></span>
            </div>
          </div>
 
          <div className="hotel-card__footer">
            <div className="price">
              <span className="price__amount">₹{e.price}</span>
              <span className="price__unit">/ night</span>
            </div>
            <button className="book-btn" type="button">View Details</button>
          </div>
 
        </div>
      </div>
          </>
        }})}
    </div>
    </div>
  </>
  )
}

export default Hotel
