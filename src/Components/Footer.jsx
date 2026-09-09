import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className='site-footer'>
            <div className='footer-inner'>
                <div className='footer-block footer-about'>
                    <h3>About</h3>
                    <p>A quiet stay built around comfort and detail — thoughtful rooms, warm service, and a calm start to every morning.</p>

                </div>
                <div className='footer-block'>
                    <h3>Explore</h3>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link >Rooms &amp; Suites</Link></li>
                        <li><Link >Amenities</Link></li>
                        <li><Link >Gallery</Link></li>
                    </ul>
                </div>
                <div class="footer-block">
                    <h3>Guest Info</h3>
                    <ul>
                        <li><Link >Book a Room</Link></li>
                        <li><Link >Offers</Link></li>
                        <li><Link >FAQs</Link></li>
                        <li><Link >Contact</Link></li>
                    </ul>
                </div>
                <div class="footer-block">
                    <h3>Contact</h3>
                    <address>
                        24 Harbor Lane<br></br>
                        Coastal District<br></br>
                        +1 (555) 013-2277<br></br>
                        stay@example.com
                    </address>
                </div>
                <div class="footer-bottom">
                    <span>© 2026 All rights reserved.</span>
                    <div class="footer-legal">
                        <Link >Privacy Policy</Link>
                        <Link >Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
