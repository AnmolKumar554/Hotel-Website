import React from 'react'

const Details = () => {
  return (
    <div className='hero-detail'>
        <a href="#" class="hd-back-link">
  <span aria-hidden="true">←</span> Back to hotels
</a>
 
<main class="hd-wrap">
 
  
  <section class="hd-gallery" aria-label="Photo gallery">
    <img class="hd-g1" src="https://picsum.photos/seed/maurya1/900/700" alt="Hotel Maurya, exterior"></img>
    {/* <img class="hd-g2" src="https://picsum.photos/seed/maurya2/500/400" alt="Guest room"></img>
    <img class="hd-g3" src="https://picsum.photos/seed/maurya3/500/400" alt="Hotel lobby"></img>
    <img class="hd-g4" src="https://picsum.photos/seed/maurya4/500/400" alt="Hotel restaurant"></img>
    <img class="hd-g5" src="https://picsum.photos/seed/maurya5/500/400" alt="Bathroom"></img> */}
    <button class="hd-show-all">All photos</button>
  </section>
 
  
  <div class="hd-title-row">
    <div>
      <p class="hd-kicker">Business Hotel · Patna</p>
      <h1>Hotel Maurya</h1>
      <p class="hd-location">📍 Fraser Road, near Hartali More, Patna</p>
    </div>
    <a href="#reviews" class="hd-rating-block">
      <span class="hd-rating-num">4.3</span>
      <span class="hd-rating-stars" aria-hidden="true">★★★★☆</span>
      <span class="hd-rating-count">128 reviews</span>
    </a>
  </div>
 
  <div class="hd-layout">
 
    
    <div class="hd-main-col">
 
      <section class="hd-block">
        <h2>About this hotel</h2>
        <p>
          Hotel Maurya sits a few minutes from Fraser Road's shopping strip and
          the Hartali More junction, with easy access to Patna Junction and the
          city's business district. Rooms are quiet and well kept, built around
          the essentials — a comfortable bed, reliable air conditioning, and a
          front desk that's staffed around the clock for whatever comes up.
        </p>
      </section>
 
      <hr></hr>
 
      <section class="hd-block">
        <h2>Amenities</h2>
        <ul class="hd-amenities">
          <li>
            <span class="hd-icon hd-icon--mint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 8.5c5.5-5 14.5-5 20 0"/><path d="M5.5 12.5c3.7-3.3 9.3-3.3 13 0"/><path d="M9 16.5c1.9-1.7 4.1-1.7 6 0"/><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/></svg>
            </span>
            WiFi
          </li>
          <li>
            <span class="hd-icon hd-icon--sky">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v18M4.5 6.5l15 11M19.5 6.5l-15 11"/></svg>
            </span>
            Air Conditioning
          </li>
          <li>
            <span class="hd-icon hd-icon--mint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 8h4a2.5 2.5 0 0 1 0 5H9v4"/></svg>
            </span>
            Parking
          </li>
          <li>
            <span class="hd-icon hd-icon--sky">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a2 2 0 0 0 4 0V3M8 10v11M18 3c-1.7 0-3 2.2-3 5s1.3 5 3 5v8"/></svg>
            </span>
            Restaurant
          </li>
          <li>
            <span class="hd-icon hd-icon--mint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18h16M4 18a8 8 0 0 1 16 0M12 10V6M9 6h6"/></svg>
            </span>
            Room Service
          </li>
          <li>
            <span class="hd-icon hd-icon--sky">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>
            </span>
            24-Hour Front Desk
          </li>
        </ul>
      </section>
 
      <hr></hr>
 
      <section class="hd-block" id="reviews">
        <h2>Reviews</h2>
 
        <div class="hd-review-summary">
          <div class="hd-review-score">
            <span class="hd-score-num">4.3</span>
            <span class="hd-rating-stars" aria-hidden="true">★★★★☆</span>
            <span class="hd-score-count">Based on 128 reviews</span>
          </div>
          <div class="hd-review-bars">
            <div class="hd-bar-row">
              <span>Cleanliness</span>
              <div class="hd-bar"><span></span></div>
              <span class="hd-bar-val">4.5</span>
            </div>
            <div class="hd-bar-row">
              <span>Location</span>
              <div class="hd-bar"><span></span></div>
              <span class="hd-bar-val">4.7</span>
            </div>
            <div class="hd-bar-row">
              <span>Service</span>
              <div class="hd-bar"><span ></span></div>
              <span class="hd-bar-val">4.0</span>
            </div>
            <div class="hd-bar-row">
              <span>Value</span>
              <div class="hd-bar"><span ></span></div>
              <span class="hd-bar-val">4.3</span>
            </div>
          </div>
        </div>
 
        <ul class="hd-review-list">
          <li class="hd-review">
            <div class="hd-avatar hd-avatar--sky">RS</div>
            <div>
              <p class="hd-review-name">Rohit S. <span class="hd-review-date">August 2026</span></p>
              <p class="hd-review-stars" aria-hidden="true">★★★★★</p>
              <p>Clean rooms and the front desk sorted a late check-in without any fuss. Would stay again on my next trip to Patna.</p>
            </div>
          </li>
          <li class="hd-review">
            <div class="hd-avatar hd-avatar--mint">AK</div>
            <div>
              <p class="hd-review-name">Ananya K. <span class="hd-review-date">July 2026</span></p>
              <p class="hd-review-stars" aria-hidden="true">★★★★☆</p>
              <p>Good location, close to Fraser Road. AC was a little slow to cool but housekeeping was prompt when we asked about it.</p>
            </div>
          </li>
          <li class="hd-review">
            <div class="hd-avatar hd-avatar--purple">VM</div>
            <div>
              <p class="hd-review-name">Vikram M. <span class="hd-review-date">June 2026</span></p>
              <p class="hd-review-stars" aria-hidden="true">★★★★★</p>
              <p>Booked for a work trip — quiet enough to get through calls, and breakfast at the restaurant downstairs was solid.</p>
            </div>
          </li>
        </ul>
      </section>
 
      <hr></hr>
 
      <section class="hd-block">
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
      </section>
 
    </div>
 
    
    <aside class="hd-sidebar">
      <div class="hd-booking-card">
        <p class="hd-booking-price">₹1,800 <span>/night</span></p>
        <p class="hd-booking-sub">Deluxe Room · taxes included</p>
 
        <div class="hd-booking-fields">
          <div class="hd-field">
            <label>Check-in</label>
            <span>14 Sep 2026</span>
          </div>
          <div class="hd-field">
            <label>Check-out</label>
            <span>16 Sep 2026</span>
          </div>
          <div class="hd-field">
            <label>Guests</label>
            <span>2 adults</span>
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
    <p class="hd-price">₹1,800<span>/night</span></p>
    <p class="hd-sub">Deluxe Room</p>
  </div>
  <button class="hd-book-btn">Book Now</button>
</div>
    </div>
  )
}

export default Details
