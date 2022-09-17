import React from 'react'
import Shop from './Shop'
import Servises from './Servises'
import Contact from './Contact'
import pic from '../images/fishlogo.png'
import '../css/shop.css'

export default function HomePage() {
  return (
    <div>
      <img  id='home' className='main-img' src={pic} alt="" />

        <Shop/>
        <Servises/>
        <Contact/>
    </div>
  )
}
