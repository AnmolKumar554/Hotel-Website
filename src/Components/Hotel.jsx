import React, { useState } from 'react'
import { useContext } from 'react'
import { ContextData } from './Context'

const Hotel = () => {
    const {hotelData,setHotelData} = useContext(ContextData)
    const {text,setText} = useContext(ContextData)
    const {checkInDate,setCheckInDate} = useContext(ContextData)
    const {checkOutDate,setCheckOutDate} = useContext(ContextData)
    const {fData,setFData} = useContext(ContextData)
    
  return (
    <div className='hotel-main'>
      {fData.map((e)=>{
        if((e.availableFrom<=checkInDate && e.availableTo>=checkInDate && checkInDate<checkOutDate) && (e.availableTo>=checkOutDate && e.availableFrom<=checkOutDate && checkOutDate>checkInDate)){
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
            <button className="book-btn" type="button">Book now</button>
          </div>
 
        </div>
      </div>
          </>
        }})}
    </div>
  )
}

export default Hotel
