import React, { useState } from 'react'
import { CiDeliveryTruck } from 'react-icons/ci';
import { CiBank } from 'react-icons/ci';
import { CgTranscript } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { TiHeartOutline } from 'react-icons/ti'
import { TbUser } from 'react-icons/tb'
import { BiSearch } from 'react-icons/bi'

import './Navbar.css';
import logo from "../images/HikeLogo.jpg"

import { useEffect } from 'react';
import Login from '../Componentss/Login/Login';
import Mid from '../Component/Mid';
import { Link, useNavigate } from 'react-router-dom';

// import { Dropdown } from 'react-bootstrap';

// import validator from 'validator';


function Navbar({ handleLogout }) {

  const [searchInput, setSearchInput] = useState("");


  const [showCart, setShowCart] = useState(false)

  const [toggle, setToggle] = React.useState(0.5)

  const [email, setEmail] = useState('')

  const [pass, setPass] = useState('')
  const [emails, setEmails] = useState('')

  const [emailError, setEmailError] = useState('')

  const handle = () => {
    localStorage.setItem('Name', emails);
    localStorage.setItem('Password', pass);
    setEmails('')
    setPass('')
  };

  const [popupStyle, showPopup] = useState('hide')

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => {
      showPopup("hide")
    }, 3000);
  }


 

  const [showDropDown, setShowDropDown] = useState(false)

  const navigate=useNavigate()

  const handleClick=()=>
  {
    navigate('/')
  }

  const handleLogin=()=>{
    navigate('/login')
  }

  return (
    // <div>Navbar</div>
    <>
      <header className='header'>
        <ul className='top-header'>
          <li><CgTranscript size={15} /> &nbsp;<span> <Link to='/signup' className='linkss'>Sign up and get 15% off </Link> </span></li>
          <li><CiDeliveryTruck size={15} /> <span>Free Delivery </span></li>
          <li><CiBank size={15} /> <span>UPI & NET BANKING available </span></li>
        </ul>
      </header>

      <section className='middle-header'>
        <div className='mid-header'>
          <div className="left" onClick={handleClick}>
            {/* <Link to='/' >
              <img src={logo} alt="" />
            </Link> */}
           <img src={logo} alt="" />
          </div>
          <div className="middle">
            <ul>

            <Link to='/mens' style={{ textDecoration: 'none' }}><li> <span> MEN </span> </li> </Link>
              <Link to='/women' style={{ textDecoration: 'none' }}><li> <span> WOMEN </span> </li> </Link>
              <Link to='/kids' style={{ textDecoration: 'none' }}><li> <span> KIDS </span> </li> </Link>
              <li>SPORTS</li>
              <li>COLLECTIONS</li>
            </ul>
          </div>
          <div className="right">

            <form action="">

              <input type="text" name="" className='input-texts'
                placeholder='search'

              />

              <button className="search__button">
                <BiSearch />

              </button>
            </form>

            {/* <Link to='/login' > */}
            <div onClick={handleLogin}>
              <TbUser size={20} title='Login' />
              </div>
            {/* </Link> */}
            <TiHeartOutline size={20} title='Favorites' />
            <div className='cart'>
              <AiOutlineShoppingCart size={20} title='Checkout' />
            </div>
          </div>

        </div>
      </section>


      {/* {isHovering&&

    } */}

      {/* <Mid /> */}


      {/* {show ?<Login /> :null} */}
    




    </>
  )
}

export default Navbar