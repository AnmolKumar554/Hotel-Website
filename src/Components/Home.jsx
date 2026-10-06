import React from 'react'

const Home = () => {
  return (
    <div className='home-body'>
      <svg width="0" height="0" style={{position:"absolute"}} aria-hidden="true">
  <symbol id="icon-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 21h18"/><path d="M5 21V9l7-5 7 5v12"/><path d="M9 21v-6h6v6"/>
  </symbol>
  <symbol id="icon-statue" viewBox="0 0 64 96" fill="currentColor">
    <rect x="10" y="82" width="44" height="10" rx="1.5"/>
    <rect x="16" y="72" width="32" height="10" rx="1.5" opacity="0.85"/>
    <path d="M32 8c-3.5 0-6 2.7-6 6.2 0 2.6 1.4 4.7 3.4 5.7l-1 4.6h-4.9c-1.7 0-3.1 1.3-3.4 3l-3.6 22.6c-.3 2 1.2 3.9 3.3 3.9h3.1l1.1 20.8h16l1.1-20.8h3.1c2.1 0 3.6-1.9 3.3-3.9L44 27.5c-.3-1.7-1.7-3-3.4-3h-4.9l-1-4.6c2-1 3.4-3.1 3.4-5.7C38 10.7 35.5 8 32 8z"/>
    <path d="M20.5 30c-1.7 3.6-4 12-4.3 20.5h4.6c.6-7.8 2.5-15.2 4.3-19.3z" opacity="0.85"/>
    <path d="M43.5 30c1.7 3.6 4 12 4.3 20.5h-4.6c-.6-7.8-2.5-15.2-4.3-19.3z" opacity="0.85"/>
  </symbol>
  <symbol id="icon-hotel" viewBox="0 0 64 64" fill="currentColor">
    <path d="M6 58h52v3H6z"/>
    <path d="M12 58V26l14-9 14 9v32h-6V32H18v26z"/>
    <rect x="22" y="38" width="6" height="6" rx="1"/>
    <rect x="32" y="38" width="6" height="6" rx="1"/>
    <rect x="22" y="48" width="6" height="6" rx="1"/>
    <rect x="32" y="48" width="6" height="6" rx="1"/>
    <path d="M44 58V22c8-1 12 5 12 12v24z" opacity="0.85"/>
    <rect x="47" y="30" width="5" height="5" rx="1" opacity="0.7"/>
    <rect x="47" y="40" width="5" height="5" rx="1" opacity="0.7"/>
  </symbol>
  <symbol id="icon-star" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.9 6.4 7 0.8-5.2 4.8 1.4 6.9L12 17.7 5.9 21l1.4-6.9L2 9.3l7-0.9L12 2z"/>
  </symbol>
  <symbol id="icon-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </symbol>
  <symbol id="icon-chevron-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 6l-6 6 6 6"/>
  </symbol>
  <symbol id="icon-chevron-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 6l6 6-6 6"/>
  </symbol>
</svg>
 
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
        <h2 id="dest-heading">Popular destinations</h2>
        <p class="home-kicker">Landmark towns worth building a trip around.</p>
      </div>
      <a href="#" class="home-view-all">View all <svg><use href="#icon-arrow"/></svg></a>
    </div>
 
    <div class="home-dest-grid">
      <article class="home-dest-card">
        <div class="home-dest-card__art home-dest-art-1"><svg><use href="#icon-statue"/></svg></div>
        <div class="home-dest-card__info">
          <p class="home-dest-card__place">Kevadia, Gujarat</p>
          <p class="home-dest-card__meta">128 stays</p>
        </div>
      </article>
      <article class="home-dest-card">
        <div class="home-dest-card__art home-dest-art-2"><svg><use href="#icon-statue"/></svg></div>
        <div class="home-dest-card__info">
          <p class="home-dest-card__place">Mumbai, Maharashtra</p>
          <p class="home-dest-card__meta">342 stays</p>
        </div>
      </article>
      <article class="home-dest-card">
        <div class="home-dest-card__art home-dest-art-3"><svg><use href="#icon-statue"/></svg></div>
        <div class="home-dest-card__info">
          <p class="home-dest-card__place">Shravanabelagola, Karnataka</p>
          <p class="home-dest-card__meta">56 stays</p>
        </div>
      </article>
      <article class="home-dest-card">
        <div class="home-dest-card__art home-dest-art-4"><svg><use href="#icon-statue"/></svg></div>
        <div class="home-dest-card__info">
          <p class="home-dest-card__place">Kanyakumari, Tamil Nadu</p>
          <p class="home-dest-card__meta">94 stays</p>
        </div>
      </article>
      <article class="home-dest-card">
        <div class="home-dest-card__art home-dest-art-5"><svg><use href="#icon-statue"/></svg></div>
        <div class="home-dest-card__info">
          <p class="home-dest-card__place">Hyderabad, Telangana</p>
          <p class="home-dest-card__meta">210 stays</p>
        </div>
      </article>
      <article class="home-dest-card">
        <div class="home-dest-card__art home-dest-art-6"><svg><use href="#icon-statue"/></svg></div>
        <div class="home-dest-card__info">
          <p class="home-dest-card__place">Bodh Gaya, Bihar</p>
          <p class="home-dest-card__meta">76 stays</p>
        </div>
      </article>
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
      <article class="home-hotel-card">
        <div class="home-hotel-card__art home-hotel-art-1"><svg><use href="#icon-hotel"/></svg></div>
        <div class="home-hotel-card__body">
          <h3 class="home-hotel-card__name">Marée Bay Resort</h3>
          <p class="home-hotel-card__state">Goa</p>
          <div class="home-hotel-card__rating"><svg><use href="#icon-star"/></svg>4.8 <span>(214)</span></div>
          <p class="home-hotel-card__price"><strong>₹6,400</strong>/ night</p>
        </div>
      </article>
 
      <article class="home-hotel-card">
        <div class="home-hotel-card__art home-hotel-art-2"><svg><use href="#icon-hotel"/></svg></div>
        <div class="home-hotel-card__body">
          <h3 class="home-hotel-card__name">Statue View Residency</h3>
          <p class="home-hotel-card__state">Gujarat</p>
          <div class="home-hotel-card__rating"><svg><use href="#icon-star"/></svg>4.6 <span>(132)</span></div>
          <p class="home-hotel-card__price"><strong>₹3,200</strong>/ night</p>
        </div>
      </article>
 
      <article class="home-hotel-card">
        <div class="home-hotel-card__art home-hotel-art-3"><svg><use href="#icon-hotel"/></svg></div>
        <div class="home-hotel-card__body">
          <h3 class="home-hotel-card__name">Harbourline Suites</h3>
          <p class="home-hotel-card__state">Maharashtra</p>
          <div class="home-hotel-card__rating"><svg><use href="#icon-star"/></svg>4.7 <span>(289)</span></div>
          <p class="home-hotel-card__price"><strong>₹5,100</strong>/ night</p>
        </div>
      </article>
 
      <article class="home-hotel-card">
        <div class="home-hotel-card__art home-hotel-art-4"><svg><use href="#icon-hotel"/></svg></div>
        <div class="home-hotel-card__body">
          <h3 class="home-hotel-card__name">Hillcrest Bahubali Inn</h3>
          <p class="home-hotel-card__state">Karnataka</p>
          <div class="home-hotel-card__rating"><svg><use href="#icon-star"/></svg>4.5 <span>(98)</span></div>
          <p class="home-hotel-card__price"><strong>₹2,800</strong>/ night</p>
        </div>
      </article>
 
      <article class="home-hotel-card">
        <div class="home-hotel-card__art home-hotel-art-5"><svg><use href="#icon-hotel"/></svg></div>
        <div class="home-hotel-card__body">
          <h3 class="home-hotel-card__name">Cape Comfort Stay</h3>
          <p class="home-hotel-card__state">Tamil Nadu</p>
          <div class="home-hotel-card__rating"><svg><use href="#icon-star"/></svg>4.4 <span>(76)</span></div>
          <p class="home-hotel-card__price"><strong>₹2,500</strong>/ night</p>
        </div>
      </article>
 
      <article class="home-hotel-card">
        <div class="home-hotel-card__art home-hotel-art-6"><svg><use href="#icon-hotel"/></svg></div>
        <div class="home-hotel-card__body">
          <h3 class="home-hotel-card__name">Hussain Sagar Pearl</h3>
          <p class="home-hotel-card__state">Telangana</p>
          <div class="home-hotel-card__rating"><svg><use href="#icon-star"/></svg>4.6 <span>(154)</span></div>
          <p class="home-hotel-card__price"><strong>₹3,900</strong>/ night</p>
        </div>
      </article>
 
      <article class="home-hotel-card">
        <div class="home-hotel-card__art home-hotel-art-7"><svg><use href="#icon-hotel"/></svg></div>
        <div class="home-hotel-card__body">
          <h3 class="home-hotel-card__name">Mahabodhi Heritage Stay</h3>
          <p class="home-hotel-card__state">Bihar</p>
          <div class="home-hotel-card__rating"><svg><use href="#icon-star"/></svg>4.3 <span>(61)</span></div>
          <p class="home-hotel-card__price"><strong>₹2,100</strong>/ night</p>
        </div>
      </article>
 
      <article class="home-hotel-card">
        <div class="home-hotel-card__art home-hotel-art-8"><svg><use href="#icon-hotel"/></svg></div>
        <div class="home-hotel-card__body">
          <h3 class="home-hotel-card__name">Lotus Temple View</h3>
          <p class="home-hotel-card__state">Delhi</p>
          <div class="home-hotel-card__rating"><svg><use href="#icon-star"/></svg>4.7 <span>(203)</span></div>
          <p class="home-hotel-card__price"><strong>₹4,600</strong>/ night</p>
        </div>
      </article>
    </div>
  </section>
 
  <footer>© 2026 Stay Way. Illustrative listings for demonstration.</footer>
</main>
    </div>
  )
}

export default Home
