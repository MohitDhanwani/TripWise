import React from 'react'
import blog1 from '../images/post_3.webp'
import blog2 from '../images/post_2.webp'
import fact from "../images/bh5.jpg"
import blog3 from '../images/post_1.webp'
import offer2 from '../images/offer1.jpg'
import offer3 from '../images/offer1.jpg'
import offer4 from '../images/offer2.jpg'
import offer5 from '../images/offer2.jpg'
import offer6 from '../images/offer2.jpg'
import offer7 from '../images/offer2.jpg'
import "../style/blog.css"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar'

gsap.registerPlugin(ScrollTrigger);

function Blog() {

  useGSAP(() => {
    gsap.from(".offer-section-heading" , {
      opacity:0,
      duration:1.5,
    })

    gsap.from("#offer-1" , {
      opacity:0,
      y:50,
      duration:0.5,
    })

    gsap.from("#offer-2" , {
      opacity:0,
      y:50,
      duration:0.5,
      scrollTrigger:{
        trigger: "#offer-2",
        top: "top 90%"
      }
    })
    gsap.from(".blog-section-heading" , {
      opacity:0,
      y:50,
      duration:0.6,
      scrollTrigger:{
        trigger: ".blog-section-heading",
        top: "top 92%",
      }
    })

    gsap.from(".blog-section" , {
      opacity:0,
      y:50,
      duration:0.8,
      scrollTrigger:{
        trigger: ".blog-section",
        top: "top 90%",
      }
    })

    gsap.from("#gsapBottom" , {
      opacity:0,
      y:50,
      duration:0.8,
      scrollTrigger:{
        trigger: "#gsapBottom",
        top: "top 90%",
      }
    })
  })

    return (
      <>
   <Navbar/>
<div className='offer-section-heading'>Exciting Offers</div>
  
  <div className='offer-container'>

    <div className="offer-section" id="offer-1">
      <img src={offer2} alt="" className='offer-image'/>
      <h2 className='offer-heading'>Free Travel Guide</h2>
      <p className='offer-para'>Book now and get a free travel guide for your next destination.</p>
      <p className='offer-code'>Use Code: GUIDE4FREE</p>
      <p className='offer-date'>Valid until: 15th July 2024</p>
    </div>

    <div className="offer-section"  id="offer-1">
      <img src={offer3} alt="" className='offer-image'/>
      <h2 className='offer-heading'>Upgrade to Business Class</h2>
      <p className='offer-para'>Enjoy a luxurious travel experience with our free upgrade to business class.</p>
      <p className='offer-code'>Use Code: UPGRADE2BIZ</p>
      <p className='offer-date'>Valid until: 1st August 2024</p>
    </div>

    <div className="offer-section" id="offer-1">
      <img src={offer4} alt="" className='offer-image'/>
      <h2 className='offer-heading'>20% Off on Hotels</h2>
      <p className='offer-para'>Book your stay with us and get 20% off on all hotel bookings.</p>
      <p className='offer-code'>Use Code: HOTEL20</p>
      <p className='offer-date'>Valid until: 31st July 2024</p>
    </div>

    <div className="offer-section" id="offer-1">
      <img src={offer5} alt="" className='offer-image'/>
      <h2 className='offer-heading'>Early Bird Discounts</h2>
      <p className='offer-para'>Book your tickets early and enjoy exclusive early bird discounts.</p>
      <p className='offer-code'>Use Code: EARLYBIRD</p>
      <p className='offer-date'>Valid until: 20th June 2024</p>
    </div>

    <div className="offer-section" id="offer-2">
      <img src={offer6} alt="" className='offer-image' id="offer-1"/>
      <h2 className='offer-heading'>Complimentary Airport Lounge Access</h2>
      <p className='offer-para'>Relax before your flight with complimentary access to airport lounges.</p>
      <p className='offer-code'>Use Code: LOUNGEFREE</p>
      <p className='offer-date'>Valid until: 10th August 2024</p>
    </div>

    <div className="offer-section" id="offer-2">
      <img src={offer7} alt="" className='offer-image' />
      <h2 className='offer-heading'>Buy One Get One Free</h2>
      <p className='offer-para'>Buy one ticket and get another one absolutely free. Limited time offer!</p>
      <p className='offer-code'>Use Code: BOGOFREE</p>
      <p className='offer-date'>Valid until: 5th July 2024</p>
    </div>

    <div className="offer-section" id="offer-2">
    <img src={offer5} alt="" className='offer-image' />
    <h2 className='offer-heading'>50% Off Car Rentals</h2>
    <p className='offer-para'>Rent a car with us and get 50% off your rental fees.</p>
    <p className='offer-code'>Use Code: CAR50</p>
    <p className='offer-date'>Valid until: 25th July 2024</p>
  </div>

  <div className="offer-section" id="offer-2">
    <img src={offer6} alt="" className='offer-image' />
    <h2 className='offer-heading'>Free Travel Insurance</h2>
    <p className='offer-para'>Get free travel insurance with your booking for peace of mind during your trip.</p>
    <p className='offer-code'>Use Code: INSUREFREE</p>
    <p className='offer-date'>Valid until: 30th July 2024</p>
  </div>
  </div>
        <div className="main">
          <div className='blog-section-heading'>From our blog</div>
  
          <div className='blog-container'>
            <div className="blog-section" id="gsapBlogR">
              <img src={blog1} alt="" className='blog-image' />
              <h2 className='blog-heading'>All about traveller’s medicine and health</h2>
              <p className='blog-para'>Travelling around the world is an exhilarating experience, but it comes with the responsibility of prioritizing your health. Here’s an essential guide to traveler’s medicine.</p>
            </div>
  
            <div className="blog-section" id="gsapBlogR">
              <img src={blog2} alt="" className='blog-image' />
              <h2 className='blog-heading'>What to pack to a Southeast Asian country</h2>
              <p className='blog-para'>A vibrant tapestry of cultures, breathtaking landscapes, and delicious cuisine. To ensure a seamless and enjoyable experience, packing strategically is key.</p>
            </div>
  
            <div className="blog-section" id="gsapBlogL">
              <img src={blog3} alt="" className='blog-image' />
              <h2 className='blog-heading'>A beginner’s guide for all things travel insurance</h2>
              <p className='blog-para'>Traveling to new destinations is an exhilarating experience, but it’s essential to be prepared for the unexpected. If you’re new to the world of travel insurance, here’s a handy guide to get you started.</p>
            </div>
  
            <div className="blog-section" id="gsapBlogL">
              <img src={fact} alt="" className='blog-image' />
              <h2 className='blog-heading'>What to Pack for an International Trip</h2>
              <p className='blog-para'>Planning an international trip? To ensure a seamless and enjoyable experience, packing strategically is key. Here’s a simple guide on what to pack for your adventure abroad.</p>
            </div>
          </div>
  
          <div className="newsLetter" id="gsapBottom">
            <span><i>Subscribe to our News Letter to Stay Updated and get EXCITING OFFERS!</i></span>
          </div>
  
          <div className="btn-container-2" id="gsapBottom">
            <button className='subscribe-btn'>Subscribe Now!</button>
          </div>
        </div>
      </>
    )
  }

export default Blog
