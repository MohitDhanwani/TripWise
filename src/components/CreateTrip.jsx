import React, { useState } from 'react'
import AffiliateNavbar from './AffiliateNavbar'
import "../style/trip.css"
import { useFirebase } from "../context/Firebase"
import { useNavigate } from "react-router-dom"

function CreateTrip() {

  const firebaseTrip = useFirebase();
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [detail, setDetail] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [creator, setCreator] = useState("");
  const [contact, setContact] = useState("");
  const [coverPic, setCoverPic] = useState("");



  const submitTripForm = async (e) => {
    e.preventDefault()
    if (firebaseTrip.user) {
    alert("Submitting your trip this may take time!");
    await firebaseTrip.addTripFromThirdPartyCompany(location , description, detail , duration , price , companyName , creator , contact , coverPic);
      alert("Your trip has been submitted!")
      navigate('/travel')
    } else {
      navigate('/login')
    }
  }

  return (
    <>
      <AffiliateNavbar />
      <h1 className='trip-create-heading'>Create trip for your customers</h1>

      <div className="trip-form-container">
        <form onSubmit={submitTripForm}>
          <div className="details">
            <h1 className='trip-details-heading'>Trip Details</h1>
            <input type="text" placeholder='Enter Trip Location' className='input' value={location}
              onChange={(e) => setLocation(e.target.value)} />

            <input type="text" placeholder='Add brief/small Description' className='input' value={description}
              onChange={(e) => setDescription(e.target.value)} />

            <textarea placeholder='Add Detailed Description' className='input' id="detailDes" value={detail}
              onChange={(e) => setDetail(e.target.value)} />

            <input type="text" placeholder='Add Duration of tour' className='input' value={duration}
              onChange={(e) => setDuration(e.target.value)} />

            <input type="number" placeholder='Price (in Rs)' className='input' value={price}
              onChange={(e) => setPrice(e.target.value)} />

            <label className="file-input-label">
             <p className='upload-text'> Upload Cover Picture</p>
              <input type="file" className='input-file' onChange={(e) => setCoverPic(e.target.files[0])} />
            </label>
            <br /><br /><br />

            <h1 className='trip-details-heading'>Company Details</h1>
            <br />
            <input type="text" placeholder='Company Name' className='input' value={companyName}
              onChange={(e) => setCompanyName(e.target.value)} />

            <input type="text" placeholder='Who is creating this trip (Name)' className='input' value={creator}
              onChange={(e) => setCreator(e.target.value)} />

            <input type="number" placeholder='Contact Number' className='input' value={contact}
              onChange={(e) => setContact(e.target.value)} />

            <div className='checkbox-section'>
              <input type="checkbox" required id="abc" />
              <label htmlFor="abc" className='agreement'>I have read all the terms and conditions and I abide by them</label>
            </div>

            <div className="trip-btn-container">
              <button type='submit' className='tripinfo-btn'>Submit Trip</button>
            </div>

          </div>
        </form>
      </div>
    </>
  )
}

export default CreateTrip;
