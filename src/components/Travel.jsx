import React  ,{useState , useEffect} from 'react'
import "../style/travel.css"
import Navbar from './Navbar'
import { useFirebase } from '../context/Firebase'
import Card from './Card'

function Travel() {

  const firebaseTravel = useFirebase();
  const [trips , setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebaseTravel.getAllTrips().then((query) => {
     const tripData = query.docs.map((doc) => (
      {
        id: doc.id,
        ...doc.data()
      }

     ))
     setTrips(tripData);
     setLoading(false);
    })
  } , [firebaseTravel])


  return (
    <>
    <Navbar/>
    <div className="search-container">
    <input type="text" name="" id="travel-search" placeholder='Search your favourite location'/>
    </div>
   
    <div className="card-container">
    {loading ? (
          <p className='loading'>Getting trips...</p>
        ) : (
          trips.map((trip) => (
            <Card key={trip.id} id={trip.id} {...trip} />
          ))
        )}
      </div>
   
    </>
  )
}

export default Travel