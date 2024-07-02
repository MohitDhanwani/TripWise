import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AffiliateNavbar from './AffiliateNavbar';
import { useFirebase } from '../context/Firebase';
import "../style/OrderDetails.css"


function OrderDetails() {
  const { orderID } = useParams();
  const firebase = useFirebase();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (orderID) {
      firebase.getUsersForTrip(orderID).then((fetchedUsers) => {
        setUsers(fetchedUsers);
      });
    }
  }, [orderID, firebase]);

  return (
    <>
      <AffiliateNavbar />
      <div className="order-details-container">
        <h1 className="order-details-heading">Users for Trip {orderID}</h1>
        <div className="users-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td data-label="Full Name">{user.fullname}</td>
                  <td data-label="Contact">{user.contact}</td>
                  <td data-label="Address">{user.address}</td>
                  <td data-label="Email">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="stripe">
      
      </div>
    </>
  );
}

export default OrderDetails;
