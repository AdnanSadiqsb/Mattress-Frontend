import React from 'react'
import '../css/footer.css'
import { useNavigate } from 'react-router-dom'
export default function Footer() {
    const navigate=useNavigate()
    const goLogin=()=>{
        if(localStorage.getItem('auth-key')==='poiuyt09876')
        {
          navigate('/itemsInfo')
        }
        else{

          navigate('/login')
        }
        

    }
  return (
    <div className='footer'>
      <h4>copyright @2022 <strong onClick={goLogin}>Shkeel Matrices</strong> | designed by <u>Adnan Sadiq</u> </h4>
    </div>
  )
}
