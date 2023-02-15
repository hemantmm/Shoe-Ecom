import React, { useState } from 'react'
import data from './DisplayData'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Display.css'
import Navbar from '../Components/Navbar';
// import Cart from '../Components/Cart';
import { useContext } from 'react';
import { LevelContext } from '../Context/LevelContext';


import { IoReturnUpBackSharp } from 'react-icons/io5'
import Cart from '../Cartss/Cart';


function Display({ children }) {



  const { setShowNum } = useContext(LevelContext)

  const { productId } = useParams();
  const thisProduct = data.find(prod => prod.id == productId)
  const { image, name, stars, reviews, price, id } = thisProduct

  console.log(thisProduct.title);


  let [num, setNum] = useState(1);
  let incNum = () => {
    if (num < 20) {
      setNum(Number(num) + 1);
      // setShowNum(nums => nums + 1)
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
      // setShowNum(nums => nums + 1)
    }
  }
  let handleChange = (e) => {
    setNum(e.target.value);
  }

  const navigate = useNavigate()

  const handleCart = () => {
    navigate('/carts')
  }

  const handleBack = () => {
    navigate('/mens')
  }

  const [cart, setCart] = useState([])

  const addToCart = (thisProduct) => {
    console.log("cart");
    setCart([...cart, { ...thisProduct }])
    navigate('/carts')
  }


  const value = num;
  console.log(value);

  // const level = useContext(LevelContext);

  return (
    <>
      {/* <LevelContext.Provider value={values}>{children}</LevelContext.Provider> */}
      <Navbar />
      {/* <Cart cart={cart} /> */}
      <div className="display_header">

        <div className='display_header_link'>
          <span onClick={handleBack}> <IoReturnUpBackSharp size={25} style={{ position: 'relative', top: '0.4rem' }} /> Back </span>
        </div>

        <div className="left">
          <span className="">Products</span>
        </div>

        <div className="display_items">

          <div className='display_items_div '>
            <img src={image} alt="" className='' />
          </div>
          <div>
            <h2 className='display_title'>{name}</h2>

            <p className="display_price">${price}</p>
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
              <p>${price * num}</p>
              <p className='Cart_display_stock'>In stock</p>


              <div className='Cart_Display_inc'>
                <button class="" type="button" onClick={decNum}>-</button>
                <span value={num} onChange={handleChange}>{num}</span>
                <button class="bg-blue-500" type="button" onClick={() => {
                  setNum(num + 1);
                  setShowNum(nums => nums + 1)
                }}>+</button>
              </div>
              {/* <input type="text" name="" className='input_number' /> */}

            </div>


            <div className='Cart_Display_Add'>
              <button onClick={() => addToCart(thisProduct)} className='Cart_Display_Button w-32'>
                {/* <Link to='/carts'> */}
                {/* <Cart price="1"/ > */}
                Add to cart
                {/* </Link> */}
              </button>
              {/* <LevelContext.Provider value={num}></LevelContext.Provider> */}
              <p>{num}</p>

            </div>

          </div>

        </div>
      </div>
      {num > 0 && <Cart value={num} />}
    </>
  )
}

export default Display