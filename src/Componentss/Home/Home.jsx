import React, { useState } from 'react'
import Mid from '../../Component/Mid'
import Navbar from '../../Components/Navbar'
import app from "../../firebase"
// import '.../Components /Navbar.css'


function Home() {
  return (
    <>
    <Navbar />
    <Mid />
    </>
  )
}

export default Home
