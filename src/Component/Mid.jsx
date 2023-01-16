import React from 'react'
import logo from '../images/HikeLogo.jpg'
import './Mid.css'
import {CgArrowLongRight} from 'react-icons/cg'
import { Link } from 'react-router-dom'

function Mid() {
  return (
      <>
      <section className='sections'>
        <div className='section-div'>
          <div className='section-off'>
            <span>FLAT 40% OFF</span>
            <p>END OF SEASON SALE</p>
          
          <ul>
           <Link to='/mens' style={{textDecoration:'none'}}> <li>Shop men <CgArrowLongRight size={20} style={{position:'relative' ,marginBottom:'-.3rem',marginLeft:'27px'}} /></li> </Link>
           <Link to='/wommen' style={{textDecoration:'none'}}> <li>shop Women <CgArrowLongRight size={20} style={{position:'relative',marginBottom:'-.3rem',marginLeft:'5px'}} /> </li> </Link>
           <Link to='/kids' style={{textDecoration:'none'}}> <li>Shop kids <CgArrowLongRight size={20} style={{position:'relative' ,marginBottom:'-.3rem' ,marginLeft:'30px'}} /> </li> </Link>
          </ul>
          </div>

          <div className='section-logo'>
            <img src={logo} alt="" />
          </div>
        </div>
      </section>
      </>
    )
}

export default Mid