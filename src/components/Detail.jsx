import React, { useEffect , useState} from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../context/Firebase';
import "../style/detail.css"
import { useNavigate } from 'react-router-dom';

function Detail() {

    const params = useParams();
    const detailFirebase = useFirebase();
    const navigate = useNavigate();

    const [data , setData] = useState(null);
    const [url , setUrl] = useState(null);

    useEffect(() => {
        detailFirebase.getTripFromDatabase(params.id)
        .then((value) => setData(value.data()));
    } , [])

    useEffect(() => {
        if(data && data.photo){
            const imgUrl = data.photo;
            detailFirebase.getImageUrl(imgUrl).then((url) => setUrl(url));
        }
    } , [data])

    const HandleBuy = () => {
        alert("redirecting to payment do not close the tab")
        navigate(`/payment/trip/${params.id}`)
    }

    
  return (
    <>
    <Navbar/>
    <div className="detail-container">
    {data ? (
        <div className="expanded-details-container">
            <div className="imgContainer">
            <img src={url} className='redirected-img'/>
            </div>
         
        <p className='redirected-text'><b>Location : </b>{data.location}</p>
        <p className='redirected-text'><b>Detail : </b>{data.detail}</p>
        <p className='redirected-text'><b>Duration : </b>{data.duration}</p>
        <p className='redirected-text'><b>Price (Rs) : </b>{data.price}</p>
        <p className='redirected-text'><b>Company : </b>{data.company}</p>
        <p className='redirected-text'><b>Contact No : </b>{data.contactNo}</p>

        <div className="final-book-btn-container">
        <button className='final-book-btn' onClick={HandleBuy}>Book Now!</button>
        </div>
        </div>
            ) : (
            <div className="loading-container">
            <p className='loading-text'>Loading...</p>
            </div>
           )}
        
        
    </div>
    </>
  )
}

export default Detail