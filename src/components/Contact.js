import React from 'react'
import '../css/style.css'
import '../css/contact.css'
export default function Contact() {
  return (
    <div id='contact'>
        <h1 className='sec-heading'>Contact info</h1>
        <div className="contact-cont">
            <div className="contact-info endMargin">
                <div className="contact">
                <i className="fa-solid fa-phone"></i>
                    <p>03101613216</p>
                </div>
                <div className="contact">
                <i className="fa-brands fa-whatsapp"></i>
                    <p>03036699056</p>
                </div>
                <div className="contact">
                <i className="fa-solid fa-location-dot"></i>
                    <p>Karkhana bazar, Vehari</p>
                </div>
                <p className='quote'>Feel free to Contact Us</p>

                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.8543175981695!2d72.34759771511501!3d30.04103708188353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x23781549064eb11d!2zMzDCsDAyJzI3LjciTiA3MsKwMjAnNTkuMiJF!5e0!3m2!1sen!2s!4v1661014730522!5m2!1sen!2s" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}
