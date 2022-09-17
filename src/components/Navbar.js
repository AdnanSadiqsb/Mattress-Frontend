import React,{useState} from 'react'
import { useEffect } from 'react'
import {Link} from 'react-scroll'
import logoImg from '../images/nav-logo.png'
import '../css/navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const [stickyNav, setStickyNav] = useState(false);

    useEffect(() => {
      window.onscroll = () => {
        setStickyNav(window.pageYOffset === 0 ? false : true);

        return () => (window.onscroll = null);
      };
    }, []);
 
    const navigate=useNavigate()
    const goHome=()=>{
        navigate('/')
    }
  return (
    <div className={`${stickyNav ? 'sticky' : ''}`}>
      <img style={{width:'100%', maxHeight:'100px', display:`${stickyNav ? 'block' : 'none'}`}}  src={logoImg} alt="" />

      <nav className="navbar navbar-expand-lg navbar-dark  " style={{backgroundColor:'#10255D'}}>
  <div className="container-fluid">
    <Link className="navbar-brand nav-heading" to="/" onClick={goHome}>Shakeel Fish & Aquarium Center</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   
        <li className="nav-item"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <Link className="nav-link" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item "  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <Link className="nav-link " aria-current="page" to="furniture">Fish Accessories</Link>
        </li>
     
        <li className="nav-item "  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <Link spy={true} smooth={true} className="nav-link " aria-current="page" to="contact">Contact Us</Link>
        </li>
        <li className="nav-item"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <Link spy={true} smooth={true} className="nav-link " aria-current="page" to="services">Services</Link>
        </li>
        {/* <li className="nav-item"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <Link spy={true} smooth={true} className="nav-link " aria-current="page" to="compaines">Companies</Link>
        </li> */}
   
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
