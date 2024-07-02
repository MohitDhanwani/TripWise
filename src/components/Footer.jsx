import React from 'react'
import '../style/footer.css'

function Footer() {
  return (
    <>
        <div className="footer-container">
            <div className="first-div">
                <h3 className='footer-heading'>TripWise</h3>
                <p className='footer-content'>The coolest travel agency that suits your unique interests, making sure you find that dream destination you’ve been longing for.</p>
            </div>

            <div className="second-div">
                <h3 className='footer-heading'>Get In Touch</h3>
                <div className='footer-content'>Mail ID : abc@def.hij</div>
                <div className='footer-content'>Contact No: 12345689</div>
            </div>
        </div>
    </>
  )
}

export default Footer