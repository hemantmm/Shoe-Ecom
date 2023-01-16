import React from 'react'
import data from './MensData'
import './Mens.css'
import Navbar from '../../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'


function Mens() {

  const { productItems }=data
 

  return (
    <>
    <Navbar/>
    <div>
      <div className="menTitle">
        <h3>Mens Active wear Shoes</h3>
        <div className="Category1">
          {productItems.map((productItems)=>(
            <div className="itemsCart" key={productItems.id}>
              <Link to={`/products/${productItems.id}`} className="items__images"> <img src={productItems.image} alt="" /></Link>
              <h5>{productItems.offer}</h5>
                <span>₹{productItems.price}</span>
                <h2>{productItems.name}</h2>
                <h4>{productItems.names}</h4>
               {productItems.color &&  <p>{productItems.color}&nbsp;colours</p>}
            </div>
          ))}
        </div>
      </div>
    </div>

    </>
  )
}

export default Mens
