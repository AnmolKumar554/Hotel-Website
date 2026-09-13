import React from 'react'

const Booking = () => {
  return (
    <div>
      <div class="bk-topbar">
    <div class="bk-wordmark">Tidewater</div>
    <a class="bk-back-link" href="#"> Back to Marrow Cabin</a>
  </div>
 
  <div class="bk-titleblock">
    <div class="bk-swatch"></div>
    <div>
      <h1>Complete your booking</h1>
      <div class="bk-sub">Marrow Cabin · Sable Point, Nova Scotia</div>
    </div>
  </div>
 
  <div class="bk-layout">
    <form class="bk-form" id="bkBookingForm">
 
      <section>
        <h2>Stay details</h2>
        <div class="bk-row-2">
          <div class="bk-field">
            <label for="bkCheckin">Check-in</label>
            <input type="date" id="bkCheckin" required min="2026-09-13"></input>
          </div>
          <div class="bk-field">
            <label for="bkCheckout">Check-out</label>
            <input type="date" id="bkCheckout" required min="2026-09-14"></input>
          </div>
        </div>
 
        <div class="bk-field">
          <label>Guests</label>
          <div class="bk-stepper">
            <button type="button" class="bk-step-btn" id="bkGuestMinus">-</button>
            <span class="bk-guest-count" id="bkGuestCount">2</span>
            <button type="button" class="bk-step-btn" id="bkGuestPlus">+</button>
          </div>
          <div class="bk-field-hint" id="bkGuestHint">Up to 4 guests for this cabin</div>
        </div>
 
        <div class="bk-field">
          <label>Choose your room</label>
 
          <label class="bk-cabin-card">
            <input type="radio" name="bkCabin" value="Driftwood Suite" data-rate="189" data-max="4" checked></input>
            <div class="bk-cabin-top"><span>Driftwood Suite</span><span>$189/night</span></div>
            <div class="bk-cabin-sub">1 bedroom · sleeps up to 4 · private dock</div>
            <span class="bk-check-mark">✓</span>
          </label>
 
          <label class="bk-cabin-card">
            <input type="radio" name="bkCabin" value="Tidepool Room" data-rate="149" data-max="2"></input>
            <div class="bk-cabin-top"><span>Tidepool Room</span><span>$149/night</span></div>
            <div class="bk-cabin-sub">Studio · sleeps up to 2 · garden view</div>
            <span class="bk-check-mark">✓</span>
          </label>
 
          <label class="bk-cabin-card">
            <input type="radio" name="bkCabin" value="Lighthouse Loft" data-rate="239" data-max="3"></input>
            <div class="bk-cabin-top"><span>Lighthouse Loft</span><span>$239/night</span></div>
            <div class="bk-cabin-sub">Loft · sleeps up to 3 · ocean-facing balcony</div>
            <span class="bk-check-mark">✓</span>
          </label>
        </div>
      </section>
 
      <section>
        <h2>Guest information</h2>
        <div class="bk-row-2">
          <div class="bk-field">
            <label for="bkFullname">Full name</label>
            <input type="text" id="bkFullname" required placeholder="Jordan Ellis"></input>
          </div>
          <div class="bk-field">
            <label for="bkEmail">Email</label>
            <input type="email" id="bkEmail" required placeholder="jordan.ellis@mail.com"></input>
          </div>
        </div>
        <div class="bk-row-2">
          <div class="bk-field">
            <label for="bkPhone">Phone</label>
            <input type="tel" id="bkPhone" required placeholder="+1 (902) 555-0148"></input>
          </div>
          <div class="bk-field">
            <label for="bkArrival">Estimated arrival</label>
            <select id="bkArrival">
              <option>Before noon</option>
              <option selected>Afternoon (12-6 PM)</option>
              <option>Evening (6-9 PM)</option>
              <option>After 9 PM</option>
            </select>
          </div>
        </div>
        <div class="bk-field">
          <label for="bkRequests">Special requests (optional)</label>
          <textarea id="bkRequests" placeholder="Extra firewood, early check-in, dietary notes…"></textarea>
        </div>
      </section>
 
      <section>
        <div class="bk-payment-head">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="10" width="16" height="10" rx="2" stroke="#08090A" stroke-width="1.6"/>
            <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="#08090A" stroke-width="1.6"/>
          </svg>
          <h2>Payment details</h2>
        </div>
        <div class="bk-field">
          <label for="bkCardname">Name on card</label>
          <input type="text" id="bkCardname" required placeholder="Jordan Ellis"></input>
        </div>
        <div class="bk-row-3">
          <div class="bk-field">
            <label for="bkCardnum">Card number</label>
            <input type="text" id="bkCardnum" required inputmode="numeric" placeholder="1234 1234 1234 1234"></input>
          </div>
          <div class="bk-field">
            <label for="bkExpiry">Expiry</label>
            <input type="text" id="bkExpiry" required placeholder="MM/YY"></input>
          </div>
          <div class="bk-field">
            <label for="bkCvc">CVC</label>
            <input type="text" id="bkCvc" required inputmode="numeric" placeholder="123"></input>
          </div>
        </div>
      </section>
 
      <section>
        <label class="bk-agree">
          <input type="checkbox" id="bkAgree" required></input>
          <span>I agree to the <a href="#">cancellation policy</a> and house rules, and confirm the details above are correct.</span>
        </label>
      </section>
    </form>
 
    <aside class="bk-sidebar">
      <div class="bk-summary-card" id="bkSummaryCard">
        <h3>Marrow Cabin</h3>
        <div class="bk-loc">Sable Point, Nova Scotia</div>
 
        <div class="bk-summary-line bk-dates"><span>Dates</span><strong id="bkSumDates">Select dates</strong></div>
        <div class="bk-summary-line bk-guests"><span>Guests</span><strong id="bkSumGuests">2</strong></div>
        <div class="bk-summary-line"><span>Room</span><strong id="bkSumRoom">Driftwood Suite</strong></div>
 
        <div class="bk-divider"></div>
 
        <div class="bk-price-row"><span id="bkRateLabel">$189 × 0 nights</span><span id="bkRateAmt">$0</span></div>
        <div class="bk-price-row" id="bkExtraGuestRow" ><span>Extra guests</span><span id="bkExtraGuestAmt">$0</span></div>
        <div class="bk-price-row" id="bkCleaningRow" ><span>Cleaning fee</span><span>$65</span></div>
        <div class="bk-price-row" id="bkServiceRow" ><span>Service fee</span><span id="bkServiceAmt">$0</span></div>
        <div class="bk-price-row" id="bkTaxRow" ><span>Taxes (13% HST)</span><span id="bkTaxAmt">$0</span></div>
        <div class="bk-price-row bk-total"><span>Total</span><span id="bkTotalAmt">$0</span></div>
 
        <button class="bk-confirm-btn" id="bkConfirmBtn" disabled>Confirm &amp; book</button>
        <div class="bk-fine-print">Your card is charged in full once confirmed</div>
      </div>
 
      <div class="bk-success-banner" id="bkSuccessBanner">
        <h3>Booking request received</h3>
        <p>A confirmation is on its way to your email. Nothing has actually been charged — this is a design preview.</p>
      </div>
    </aside>
  </div>
</div>
    
  )
}

export default Booking
