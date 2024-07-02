import React from 'react'
import "../style/affiliate.css"
import AffiliateNavbar from './AffiliateNavbar'


function Affiliate() {

  return (
    <>
    <AffiliateNavbar/>
    <div className="affiliate-container">
      <div className="affiliate-content">
        <header className="header">
          <h1 className="main-heading">Affiliate Program</h1>
          <p className="sub-heading">Sell Your Travel Trips with TripWise</p>
        </header>

        <section className="welcome-section">
          <p className="welcome-text">Welcome to the TripWise Affiliate Program. Are you a travel agency looking to expand your reach and boost your sales? Join our program and showcase your travel trips on our trusted platform. Whether you specialize in luxury vacations, adventure tours, or family getaways, TripWise provides the perfect marketplace to attract new customers and increase your revenue.</p>
        </section>

        <section className="why-choose-section">
          <h2 className="section-heading">Why Choose TripWise?</h2>
          <div className="reasons-list">
            <div className="reason">
              <h3>Increased Visibility</h3>
              <p>Gain exposure to a global audience actively seeking unique travel experiences.</p>
            </div>
            <div className="reason">
              <h3>Trusted Platform</h3>
              <p>Renowned for reliability, detailed trip information, secure transactions, and exceptional customer support.</p>
            </div>
            <div className="reason">
              <h3>Easy Integration</h3>
              <p>Manage and update your trip listings effortlessly with our user-friendly interface.</p>
            </div>
            <div className="reason">
              <h3>Competitive Advantage</h3>
              <p>Stand out with comprehensive marketing tools and promotional opportunities.</p>
            </div>
          </div>
        </section>

        <section className="how-it-works-section">
          <h2 className="section-heading">How It Works</h2>
          <ul className="steps-list">
            <li><b>Create Trip Listings:</b> Showcase your travel packages with detailed descriptions, high-quality images, and pricing information.</li>
            <li><b>Receive Orders: </b> Track and manage orders received through TripWise, ensuring you stay informed and in control.</li>
            <li><b>Secure Payments:</b> Rest assured with our secure payment gateway for peace of mind.</li>
            <li><b>Customer Support:</b>Benefit from our dedicated customer support team ready to assist you and your clients at any stage</li>
            <li><b>Feedback and Reviews:</b> Gather and respond to customer feedback and reviews to continually improve your offerings.</li>
          </ul>
        </section>

        <h2 className="section-heading-2">Get Started Today</h2>
        <section className="get-started-section">
          
          <p className="get-started-text">Join the TripWise Affiliate Program and unlock new opportunities for your travel agency. Expand your market reach, attract more customers, and increase your revenue effortlessly. Start selling your travel trips with TripWise and experience the benefits of partnering with a trusted name in travel.</p>
          <a href="/signup" className="btn-signup">Sign Up Now</a>
        </section>
      </div>
    </div>

   
    </>
  )
}

export default Affiliate