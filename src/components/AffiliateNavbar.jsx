import React from 'react'
import "../style/affiliateNavbar.css"

export default function AffiliateNavbar() {
  return (
    <>

<nav className='affiliate-navbar'>

        <div className="affiliate-container-1">

        <div className="left-container">
        <a href="/"><h3 className='tripwise-heading'>TripWise</h3></a>
        </div>
        <div className="category-section">
            <a href="/create" className='category-links'>CreateTrip</a>
            <a href="/orders" className='category-links'>MyOrders</a>
            <a href="/login" className='category-links'>Login</a>
            <a href="/" className='category-links'>Home</a>
        </div>
        </div>
    </nav>    
    </>
  )
}