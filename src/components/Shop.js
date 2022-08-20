import React, {useEffect, useState} from 'react'
import '../css/shop.css'
import ShopItems from './ShopItems'
import '../css/style.css'
import itemContext from '../Context/Items/ItemContext'
import { useContext } from 'react'
import alertContext from '../Context/alert/AlertContext'
import loadingIMg from '../images/Loading.gif'

import pic from '../images/pic4.png'
export default function Shop() {
    const [loading, setLoading]=useState(true)

    const alertContxt= useContext(alertContext)
    const {setAlert} =alertContxt
    const itmContext=useContext(itemContext)
    const {items,getAllItems, handleError}=itmContext
    useEffect(()=>{
      getItems()
       
         if(handleError)
         {
          setAlert({type:'danger',msg:"some thing went wrong"})

         }
         else{
           setAlert({type:'success',msg:"items are fetched success fuly"})

         }

    },[])
    const getItems=async()=>{
      let content= await getAllItems()
      setLoading(false)
    }
    useEffect(()=>{
      if(handleError)
      {
        setAlert({type:'danger',msg:"some thing went wrong"})

      }
      else{
        setAlert({type:'success',msg:"items are fetched success fuly"})

      }
    },[handleError])

    if(loading===false)
    {
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
      else{
        return(
          <div className="shop-cont" style={{minHeight:'600px'}}>
          <img style={{width:'100px'}} src={loadingIMg} alt="" />
          </div>
          
        )
    }
}
