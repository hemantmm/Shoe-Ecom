import React, { useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import data from './CartDatas'
import './Cart.css'
// import Display from '../Display/Display';
import Display from '../DisplayItems/Display';
import { LevelContext } from '../Context/LevelContext';

// function Cart() {
function Cart({ value }) {

  const { showNum,first } = useContext(LevelContext)



  // const { productId } = useParams();
  // const thisProduct = data.find(prod => prod.id == productId)
  // const {productItems} = cart

  // let [num, setNum] = useState(1);
  console.log(typeof showNum);
  // let num = useContext(LevelContext);
  // num=value;


  return (

    <>

      {showNum>0 && <h2>{first}</h2>}
      <h2>hello</h2>
      {/* <h2>{first}</h2> */}
      {/* <h2>{cart}</h2>
    <h3>{cart.length}</h3> */}

      {/* <div className="display_header">

<div className="left">
  <span className="">Products</span>
</div>

<div className="display_items">

  <div className='display_items_div '>
    <img src={productItems.image} alt="" className='' />
  </div>
  <div>
    <h2 className='display_title'>{productItems.name}</h2>

    <p className="display_price">${productItems.price}</p>
    <span className='display_description'>Description</span>
    <p className='display_des'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sapiente molestias explicabo temporibus consectetur totam? Est vel doloribus, facere voluptatum eos temporibus tempore.</p>
  </div>

  <div className='Cart_Display_box'>

    <div className='Cart_Display_box_item'>
      <p>Total Amount</p>
      <p>Stock</p>
      <p>Qty</p>
    </div>


    <div className='Cart_display_price '>
      <p>${productItems.price * num}</p>
      <p className='Cart_display_stock'>In stock</p>



    </div>


  </div>

</div>
</div> */}
    </>
  )
}
export default Cart;
