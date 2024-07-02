import React, { useState } from 'react';
import Navbar from './Navbar';
import '../style/buyTrip.css';
import { useFirebase } from '../context/Firebase';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

function BuyTrip() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [showStripe, setShowStripe] = useState(false); 
  const paymentFirebase = useFirebase();
  const navigate = useNavigate();
  const params = useParams();

  const proceedToPayment = async (e) => {
    e.preventDefault();
    if (paymentFirebase.user) {
      await paymentFirebase.userPaymentDetails(params.id, name, contact, address, email);
      setShowStripe(true);
    } else {
      navigate('/login');
    }
  };

  const onToken = (token) => {
    alert('Payment Successful!');
    navigate('/')
  };
  return (
    <>
      <Navbar />
      <form className='buy-from' onSubmit={proceedToPayment}>
        <h1 className='payments-heading'>Please fill out the form correctly!</h1>
        <div className="payment-form-container">
          <input type="text" placeholder='Full Name' className='input-details' required value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="text" placeholder='Contact No' className='input-details' required value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <input type="text" placeholder='Address' className='input-details' required value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input type="text" placeholder='Email' className='input-details' required value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>
            <input type="checkbox" name="" id="checkbox" required /><span>I Agree to Terms and Conditions</span>
          </span>
          <button className='payment-btn' type="submit">Proceed to Pay</button>
        </div>
      </form>

      <div className="stripe-container">
      {showStripe && (
        <StripeCheckout
          token={onToken}
          stripeKey={import.meta.env.process.env.VITE_STRIPE_KEY}
          name="Trip Payment"
          description={`Payment for trip ${params.id}`}
           className ="stripe-checkout"
        />
      )}
      </div>
      
    </>
  );
}

export default BuyTrip;
