import React, { useEffect, useState } from 'react';
import AffiliateNavbar from './AffiliateNavbar';
import { useFirebase } from '../context/Firebase';
import "../style/orders.css";
import { useNavigate } from 'react-router-dom';

function MyOrders() {
  const [orders, setMyOrders] = useState([]);
  const firebaseOrder = useFirebase();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!firebaseOrder.loading && firebaseOrder.user) {
      firebaseOrder.fetchMyOrders().then((trips) => {
        setMyOrders(trips);
      });
    }
  }, [firebaseOrder.loading, firebaseOrder.user]);

  if (firebaseOrder.loading) {
    return <div>Loading...</div>;
  }

  const handleSeeOrders = (tripId) => {
    navigate(`/orders/${tripId}`);
  };

  return (
    <>
      <AffiliateNavbar />

      <div className="trips-main-big-container">
        <h2 className='trips-heading'>Your Trips</h2>

        <div className="orders-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Location</th>
                <th>Creator</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td data-label="Location">{order.data().location}</td>
                  <td data-label="Creator">{order.data().creator}</td>
                  <td data-label="Price">{order.data().price}</td>
                  <td data-label="Action">
                    <button className="see-orders" onClick={() => handleSeeOrders(order.id)}>See all orders</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MyOrders;
