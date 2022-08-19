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
                    <p>03156318530</p>
                </div>
                <div className="contact">
                <i className="fa-brands fa-whatsapp"></i>
                    <p>03156318530</p>
                </div>
                <div className="contact">
                <i className="fa-solid fa-location-dot"></i>
                    <p>Karkhana bazar, Vehari</p>
                </div>
                <p className='quote'>Feel free to Contact Us</p>


                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27433.002581566612!2d72.29034003903296!3d30.049435894497893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393c95446603cf47%3A0xa4c7c9803430aee0!2sCOMSATS%20University%20Islamabad%2C%20Vehari%20Campus!5e0!3m2!1sen!2s!4v1660223024162!5m2!1sen!2s" style={{border:1}}  loading="lazy" allowFullScreen="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}
