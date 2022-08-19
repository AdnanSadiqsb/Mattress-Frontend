import React ,{useContext} from 'react'
import alertContext from '../Context/alert/AlertContext'
import '../css/alert.css'
export default function Alert() {
    const context= useContext(alertContext)
    const {alert}= context
    return (
      <div className='alert-cont'>
  
      {
        alert.msg &&
          <div>
          <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          <strong>{alert.type}</strong> {alert.msg}
  
          </div>
          </div>
      }
      </div>
    )
}
