import React, { useContext } from 'react'
import '../../css/login.css'
import { useNavigate } from 'react-router-dom'
import alertContext from '../../Context/alert/AlertContext'
export default function Login() {
    const {setAlert}= useContext(alertContext)
    const navigate=useNavigate()
    const goHome=()=>{
        navigate('/')
    }
    const handleLogin=(e)=>{
      e.preventDefault()
        if(document.getElementById('email').value==='shkeelahmad@gmail.com' & document.getElementById('password').value==='123456')
        {

          navigate('/itemsInfo')
          setAlert({type:'success',msg:"login success fuly"})
          localStorage.setItem('auth-key','poiuyt09876')

        }
        else{
          setAlert({type:'danger',msg:"invalid email or address"})

        }
    }
  return (
   <div>
   <form >

<div className="Log-con endMargin">
<h1 className='note-heading'>Login Here</h1>
 <div className="home-container">
   <div className='fields'>
     <label htmlFor="email">Email</label>
     <input type="Email" id='email' name='email' placeholder='Enter Email '  />
   </div>
   <div className='fields'>
     <label htmlFor="password">Password</label>
     <input type="Password" name="password" id="password"  placeholder='Enter Password' required minLength={5}   />
   </div>

   <button type='submit' className='stn-submit' onClick={handleLogin} >Login</button>

 </div>
 <h1 className='cancel-btn' onClick={goHome} >X</h1>
</div>
</form>
</div>
  )
}
