import React , {useState , useEffect} from 'react'
import bgImg from "../images/bg.jpeg"
import bg2 from "../images/bg2.jpg"
import bg3 from "../images/bg3.jpg"
import bg4 from "../images/bh5.jpg"
import fact from "../images/bh5.jpg"
import first from  '../images/travel1.jpg'
import second from '../images/travel2.jpg'
import third from '../images/travel3.jpg'
import blog1 from '../images/post_3.webp'
import blog2 from '../images/post_2.webp'
import blog3 from '../images/post_1.webp'
import dubai from "../images/duabi.jpg"
import paris from "../images/paris.jpg"
import singapore from "../images/sing.jpg"
import usa from "../images/usa.jpg"
import spain from "../images/spain.jpeg"
import '../style/home.css'
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar'

gsap.registerPlugin(ScrollTrigger);

function Home() {

  useGSAP(() => {    
    gsap.from("#cardGsap1" , {
      y:80,
        opacity:0,
        duration:1.2,
        scrollTrigger:{
          trigger: "#cardGsap1",
          start: "top 87%",
        }
    })
    gsap.from("#cardGsap2" , {
      y:80,
      opacity:0,
      duration:1.2,
      scrollTrigger:{
        trigger: "#cardGsap2",
        start: "top 87%",
      }
  })
  gsap.from("#cardGsap3" , {
    y:80,
    opacity:0,
    duration:1.2,
    scrollTrigger:{
      trigger: "#cardGsap3",
      start: "top 87%",
    }
})
gsap.from(".destination-heading" , {
  opacity:0,
  y:100,
  duration:0.9,
  scrollTrigger:{
      trigger: ".destination-heading",
      start: "top 70%"
  }
})
gsap.from(".solo-container" , {
  opacity:0,
  duration:0.95,
  delay: 0.2,
  scrollTrigger:{
    trigger: ".solo-container",
    start: "top 85%"
  }
})
gsap.from(".bottom-btn" , {
  duration: 0.8,
  opacity:0,
  scrollTrigger:{
    trigger: ".bottom-btn",
    start: "top 87%"
  }
})
gsap.from(".blog-section-heading" , {
  opacity:0,
  y:50,
  delay:0.27,
  duration:0.95,
  scrollTrigger:{
    trigger: ".blog-section-heading",
    start: "top 80%"
  }
})
gsap.from("#gsapBlogR" , {
  opacity:0,
  duration:1.25,
  delay: 0.3,
  scrollTrigger:{
    trigger: "#gsapBlogR",
    start: "top 80%"
  }
})
gsap.from(".feedback-point" , {
  opacity:0,
  duration:0.7,
  delay: 0.3,
  scrollTrigger:{
    trigger: ".feedback-point",
    start: "top 80%"
  }
})
gsap.from("#gsapBlogL" , {
  opacity:0,
  delay:0.3,
  duration:1.25,
  scrollTrigger:{
    trigger: "#gsapBlogL",
    start: "top 80%"
  }
})

})

  const navigate = useNavigate();
  const handleClick = () => {
        navigate('/travel');
    };
  const images = [
    bg2 , bg3 , bg4 , bgImg , 
  ]

  const [initialImg , setImg] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
        setImg((img) => (img + 1) % images.length)
      } , 3000);

      return () => clearInterval(interval)
  } , [])

  useEffect(() => {
    window.scrollTo(0,0)
  } , [])

  return (
    <>
  <Navbar/>
    <img src={images[initialImg]} alt="" className='home-image'/>
    

    <div className="card-container">
    <div className='card-section'  id="cardGsap1">
      <img src={first} alt="" className='card-img'/>
      <h3 className='card-heading'>Explore</h3>
      <p className='card-info'>Discover hidden gems and iconic landmarks worldwide, making unforgettable memories.</p>
    </div>

    <div className='card-section' id="cardGsap2">
      <img src={second} alt="" className='card-img'/>
      <h3 className='card-heading'>Discover</h3>
      <p className='card-info'>Dive into diverse cultures, local delicacies, and create memories on extraordinary journeys.</p>
    </div>

    <div className='card-section' id="cardGsap3">
      <img src={third} alt="" className='card-img'/>
      <h3 className='card-heading'>Experience</h3>
      <p className='card-info'>Immerse in breathtaking landscapes, indulge in thrilling activities, connect with explorers.</p>
    </div>
    </div>

    <div className="destination">
<h2 className='destination-heading'>Trips to 15+ countries waiting for you!</h2>

<div className='destination-container'>
  <div className="solo-container">
  <img src={singapore} alt="" className='img-section'/>
  <p className='destination-para'>
  <b>Singapore</b>:Explore the vibrant city-state known for its stunning skyline, diverse culture, and world-class attractions.
  <p className='Price'>Prices Starting from <div><b>Rs 50000</b></div></p>
  </p>
  </div>

  <div className="solo-container">
  <img src={paris} alt="" className='img-section'/>
  <p className='destination-para'>
  <b>Paris</b>:Discover the romantic charm of Paris with its iconic landmarks, exquisite cuisine, and rich artistic heritage.
  <p className='Price'>Prices Starting from <div><b>Rs 75000</b></div></p>
  </p>
  </div>


  <div className="solo-container">
  <img src={dubai} alt="" className='img-section'/>
  <p className='destination-para'>
  <b>Dubai</b>: Visit Dubai, a city of luxury and innovation, offering breathtaking skyscrapers, shopping, and desert adventures.
  <p className='Price'>Prices Starting from <div><b>Rs 30000</b></div></p>
  </p>
  </div>

  <div className="solo-container">
  <img src={usa} alt="" className='img-section'/>
  <p className='destination-para'>
  <b>USA</b>:Embark on a journey through the USA, a land of diverse landscapes, bustling cities, and endless adventures.
  <p className='Price'>Prices Starting from <div><b>Rs 60000</b></div></p></p>
  </div>

  <div className="solo-container">
  <img src={spain} alt="" className='img-section'/>
  <p className='destination-para'>
  <b>Spain</b>:  Delight in Spain's rich history, vibrant culture, stunning architecture, and beautiful beaches, from Barcelona to Madrid.
  <p className='Price'>Prices Starting from <div><b>Rs 40000</b></div></p></p>
  </div>
</div>
  
  <div className="btn-centre">
  <button className='bottom-btn'  onClick={handleClick}>Reserve your trip now!</button>
  </div>

</div>

    <div className='blog-section-heading'>
      From our blog
      </div>

      <div className='blog-container'>
        <div className="blog-section" id="gsapBlogR">
        <img src={blog1} alt="" className='blog-image'/>
        <h2 className='blog-heading'>All about traveller’s medicine and health</h2>
        <p className='blog-para'>Travelling around the world is an exhilarating experience, but it comes with the responsibility of prioritizing your health. Here’s an essential guide to traveler’s medicine.</p>
        </div>

        <div className="blog-section" id="gsapBlogR">
        <img src={blog2} alt="" className='blog-image'/>
        <h2 className='blog-heading'>What to pack to a Southeast Asian country</h2>
        <p className='blog-para'>A vibrant tapestry of cultures, breathtaking landscapes, and delicious cuisine. To ensure a seamless and enjoyable experience, packing strategically is key.</p>
        </div>

        <div className="blog-section" id="gsapBlogL">
        <img src={blog3} alt="" className='blog-image'/>
        <h2 className='blog-heading'>A beginner’s guide for all things travel insurance</h2>
        <p className='blog-para'>Traveling to new destinations is an exhilarating experience, but it’s essential to be prepared for the unexpected. If you’re new to the world of travel insurance, here’s a handy guide to get you started.</p>
        </div>

        <div className="blog-section" id="gsapBlogL">
        <img src={fact} alt="" className='blog-image'/>
        <h2 className='blog-heading'>What to Pack for an International Trip</h2>
        <p className='blog-para'>Planning an international trip? To ensure a seamless and enjoyable experience, packing strategically is key. Here’s a simple guide on what to pack for your adventure abroad.</p>
        </div>
      </div>


      <div className='testimonial'>
    <h2 className='testimonial-heading'>Why TripWise</h2>
    <div className='feedback-place'>
        <div className='feedback-point'>
            <h3>1. Personalized Itineraries</h3>
            <p>Our travel plans are customized to meet your unique preferences and interests, ensuring a personalized and unforgettable experience.</p>
        </div>
        <div className='feedback-point'>
            <h3>2. Expert Guides</h3>
            <p>We provide knowledgeable guides who offer deep insights and make your trips educational and enjoyable.</p>
        </div>
        <div className='feedback-point'>
            <h3>3. Affordable Packages</h3>
            <p>We offer competitive pricing and great deals, making it possible for everyone to travel without breaking the bank.</p>
        </div>
        <div className='feedback-point'>
            <h3>4. 24/7 Customer Support</h3>
            <p>Our dedicated support team is available round the clock to assist you with any inquiries or issues during your trip.</p>
        </div>
        <div className='feedback-point'>
            <h3>5. Sustainable Travel</h3>
            <p>We promote eco-friendly travel practices to ensure that our trips have a positive impact on the environment and local communities.</p>
        </div>
    </div>
</div>

    </>
  )
}

export default Home