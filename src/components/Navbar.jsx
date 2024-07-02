import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import '../style/navbar.css'
import { useFirebase } from '../context/Firebase'


function Navbar() {

  const navFirebase = useFirebase();

  const logout = async () => {
    await navFirebase.logoutUser();
     alert("user logged out!")
   }


  useGSAP(() => {
    gsap.from(".logo-And-Name-Container" , {
      opacity: 0,
      y: -45,
      duration: 0.85,
    })

    gsap.from(".test" , {
      opacity: 0,
      y: 45,
      duration: 0.85,
    })
  })
    
  return (
   <>
   
   <div className="container">

    <div className="logo-And-Name-Container" id='#gsap-navbar'>
    <a href="/"><h3>TripWise</h3></a>
    </div>

    <div className='navigator'>
    <a href='/travel' className='test'>Travel</a >
    <a href='/blog&Offer' className='test'>Blog/Offers</a >
    <a href='/affiliate' className='test' id="hoverSection">Affiliate</a >
    <a href='/login' className='test' id="login" >Account</a >
    <a href="/" onClick={(e) => {logout()}} className='test'>Logout</a>
    </div>
   </div> 
   </>
  )
}

export default Navbar