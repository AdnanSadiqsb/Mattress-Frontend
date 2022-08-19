import React, {useEffect} from 'react'
import '../css/shop.css'
import ShopItems from './ShopItems'
import '../css/style.css'
import itemContext from '../Context/Items/ItemContext'
import { useContext } from 'react'
import alertContext from '../Context/alert/AlertContext'

import pic from '../images/pic2.png'
export default function Shop() {

    const alertContxt= useContext(alertContext)
    const {setAlert} =alertContxt
    const itmContext=useContext(itemContext)
    const {items,getAllItems, handleError}=itmContext
    useEffect(()=>{
         getAllItems()
         if(handleError)
         {
          setAlert({type:'danger',msg:"some thing went wrong"})

         }
         else{
           setAlert({type:'success',msg:"items are fetched success fuly"})

         }

    },[handleError])
    useEffect(()=>{
      if(handleError)
      {
        setAlert({type:'danger',msg:"some thing went wrong"})

      }
      else{
        setAlert({type:'success',msg:"items are fetched success fuly"})

      }
    },[handleError])
  return (
    <div>

      <img  id='home' className='main-img' src={pic} alt="" />
        <h1 className='sec-heading' >Mattress</h1>
      <div className="main-cont">
        <div className="shop-cont">
        {items.length===0 && 'no items to diaplay'}
            {
                items.map((item)=>{
                    if(item.category=='Mattress')
                    return <ShopItems key={item._id} item={item}/>
                })
            }

        </div>
        </div>

        <h1 className='sec-heading' id='furniture'>Furniture</h1>
        <div className="main-cont">
        <div className="shop-cont">
            {items.length===0 && 'no items to diaplay'}
            {
                items.map((item)=>{
                    if(item.category=='Furniture')
                    return <ShopItems key={item._id} item={item}/>
                })
            }

        </div> 

      </div>
    </div>
  )
}
