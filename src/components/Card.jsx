import React , {useState , useEffect} from 'react';
import "../style/card.css"
import { useFirebase } from '../context/Firebase';
import {useNavigate} from "react-router-dom"

function Card(props) {

  const navigate = useNavigate()
  
  const locationFirebase = useFirebase();
  const [url , setUrl] = useState(null);

  useEffect(() => {
    locationFirebase.getImageUrl(props.photo)
    .then((url) =>setUrl(url))
  } , [])

  return (
    <>

    <div className='card-container'>

      <div className="specific-card">
        <img src={url} alt="" className='location-image'/>
      <h2 className='card-location-heading' id="location-heading"><b>Location:</b> {props.location}</h2>
      <p id="location-detail">{props.detail}</p>
      <p className='card-location-price' id="location-price"><b>Price:</b> {props.price}</p>
  

      <div className="location-btn-container">
      <button className='location-btn' onClick={() => navigate(`/trip/book/${props.id}`)}>Travel Now</button>
      </div>
      </div>
     
    </div>

    </>
    
  );
}

export default Card;
