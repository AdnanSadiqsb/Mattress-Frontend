import React from 'react'
import '../css/service.css'
import '../css/style.css'
import fiveStar from '../images/five star.png'
import duraimg from '../images/dura.webp'
import moltyimf from '../images/molty.jfif'
import whattsappImg from '../images/whattsap.gif'
export default function Servises() {
  return (
    <div>
        <div className="whattsap-logo" >
            <a target='_blank' href="https://wa.me/92156318530" rel="noreferrer">

            <img src={whattsappImg} alt="" />
            </a>
        </div>
      <h1 className='sec-heading' id='services'>Our Services</h1>
      <div className="service-cont">
        <div className="service-item">
            <i className="fa-solid fa-truck"></i>
            <h2>fast Delivery</h2>
        </div>
        <div className="service-item">
        <i className="fa-solid fa-business-time"></i>
        <h2>Customer Support</h2>

        </div>
        <div className="service-item">
        <i className="fa-solid fa-vault"></i>
        <h2>100% Secure</h2>

        </div>
      </div>
      <h1 id='compaines' className='sec-heading'>Avaliable Companies</h1>
        <div className="service-cont">
            <div className="service-item">
                <img src={fiveStar} alt="" />
            </div>
            <div className="service-item">
                <img style={{width:'90%'}} src={duraimg} alt="" />
            </div>
            <div className="service-item">
                <img style={{width:'90%'}} src={moltyimf} alt="" />
            </div>
        </div>


    </div>
  )
}
