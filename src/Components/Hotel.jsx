import React, { useState } from 'react'
import { useContext } from 'react'
import { ContextData } from './Context'

const Hotel = () => {
    const {hotelData,setHotelData} = useContext(ContextData)
    const {text,setText} = useContext(ContextData)
    const data=hotelData.filter((e)=>e.address.includes(text))
  return (
    <div className='hotel-main'>
      <div className="hotel-card">
 
        <div className="hotel-card__media">
          <img
            src="https://loremflickr.com/480/400/hotel,resort,pool"
            alt="Marée Bay Resort exterior and pool"
          />
 
          <div className="rating-pill">
            <i class="fa-solid fa-star"></i>
            4.8 (214 reviews)
          </div>
        </div>
 
        <div className="hotel-card__content">
 
          <div>
            <h2 className="hotel-card__name">Marée Bay Resort</h2>
            <p className="hotel-card__address">
              <i class="fa-solid fa-location-dot"></i>
              14 Baga Beach Road, Calangute, Goa 403516
            </p>
          </div>
 
          <div className="hotel-card__stay">
            <div className="stay-block">
              <span className="stay-label">Avaiable-From</span>
              <span className="stay-date">Fri, 12 Sep</span>
              <span className="stay-time">From 2:00 PM</span>
            </div>
            <div className="stay-divider"></div>
            <div className="stay-block stay-block--end">
              <span className="stay-label">Avaiable-Till</span>
              <span className="stay-date">Mon, 15 Sep</span>
              <span className="stay-time">Until 11:00 AM</span>
            </div>
          </div>
 
          <div className="hotel-card__footer">
            <div className="price">
              <span className="price__amount">₹6,400</span>
              <span className="price__unit">/ night</span>
            </div>
            <button className="book-btn" type="button">Book now</button>
          </div>
 
        </div>
      </div>
    </div>
  )
}

export default Hotel
