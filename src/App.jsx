import React from "react"
import Home from "./components/Home"
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Footer from './components/Footer.jsx'
import Travel from './components/Travel.jsx'
import Blog from "./components/Blog.jsx"
import Login from "./components/Login.jsx"
import Affiliate from "./components/Affiliate.jsx"
import CreateTrip from "./components/CreateTrip.jsx"
import MyOrders from "./components/MyOrders.jsx"
import Detail from "./components/Detail.jsx"
import BuyTrip from "./components/BuyTrip.jsx"
import Register from "./components/Register.jsx"
import OrderDetails from "./components/OrderDetails.jsx"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/travel' element = {<Travel/>}/>
      <Route path='/blog&Offer' element = {<Blog/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/affiliate' element = {<Affiliate/>}/>
      <Route path='/create' element = {<CreateTrip/>}/>
      <Route path='/orders' element = {<MyOrders/>}/>
      <Route path='/orders/:orderID' element = {<OrderDetails/>}/>
      <Route path='/trip/book/:id' element = {<Detail/>}/>
      <Route path='/payment/trip/:id' element = {<BuyTrip/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
