import React, {useRef, useState, useEffect, useContext} from 'react'
import Itms from './Itms'
import '../../css/login.css'
import itemContext from '../../Context/Items/ItemContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import alertContext from '../../Context/alert/AlertContext'

export default function ItemsList() {
    const alertcontxt=useContext(alertContext)
    const {setAlert}=alertcontxt
    const itmContext=useContext(itemContext)
    const [item, setItem]= useState({_id:'',name:"",actualPrice:"",discountPrice:"",status:"",image:"", category:""})
    const [btnStatus, setBtnStatus]=useState(false)

    const {items, updateItems,deletItem, getAllItems}=itmContext
    const navigate=useNavigate()
    const ref= useRef(null)
    useEffect(()=>{
      if(localStorage.getItem('auth-key')==='poiuyt09876')
      {
        getAllItems()

        setAlert({type:"success", msg:"all items are fetched"})
         ref.current.click()      }
      else{
       navigate('/login')
      }
      

       
    },[])
    const dispalySec=()=>{
        const updateEl=document.querySelector('#update-section')
        updateEl.classList.remove('toggle')
    }
    const deleteItems=(_id)=>{
        deletItem(_id)
        setAlert({type:"success", msg:"item delted success fuly"})

    }
    const toggleSec=()=>{
        const updateEl=document.querySelector('#update-section')
        updateEl.classList.add('toggle')
    }
    const goToAddItem=()=>{
        navigate('/AddItem')
    }
    const updateItem=(item)=>{
        dispalySec()
        setItem({_id:item._id,name:item.name, actualPrice:item.actualPrice,discountPrice:item.discountPrice, status:item.status,category:item.category,image:item.image})
        document.getElementById('category').value=item.category
        document.getElementById('status').value=item.status
        

    }
    const onChangeHandle=async(e)=>{
        setItem({...item,[e.target.name]:e.target.value})
        
    }
    const handleLogoutfun=()=>{
      console.log("logout")
      localStorage.removeItem('auth-key')
      navigate('/')

      
    }
   const handleIpdatBtn=(e)=>{
    e.preventDefault()
    updateItems(item)
    console.log(item)
    setItem({_id:'',name:"",actualPrice:"",discountPrice:"",status:"",image:"", category:""})
    document.getElementById('category').value=""
    document.getElementById('status').value=""
    document.getElementById('image').value=null

   }
   const uploadImageOnClodnary=(e)=>{
    setBtnStatus(true)
    const formData= new FormData();
    formData.append("file",e.target.files[0] )
    formData.append("upload_preset",'qqogputz')

    axios.post("https://api.cloudinary.com/v1_1/dcqeugna3/image/upload", formData).then((res)=>{
      setItem({...item,image:res.data.url})
      setBtnStatus(false)
      setAlert({type:"success", msg:"Image uploaded success fuly"})

    })
 

  } 

  return (
    <>

    <div className="add-item">
      
        <button  onClick={goToAddItem}>Add New Item</button>
    </div>
    <div className="update-section" id='update-section'>
    <form onSubmit={handleIpdatBtn} >
    <div className="update-con">
    <h1 className='note-heading'>Update Note</h1>


      <div className="home-container">
        <div className='fields'>
          <label htmlFor="name">Item Name</label>
          <input type="text" id='name' name='name' placeholder='Enter Product name ' value={item.name} onChange={onChangeHandle} minLength={5}/>
        </div>
        <div className='fields'>
          <label htmlFor="price">Actual Price</label>
          <input type='number' name="actualPrice" id="price"  placeholder='Enter Actual Price' value={item.actualPrice} onChange={onChangeHandle} />
        </div>
        <div className='fields'>
          <label htmlFor="DiscPrice">Discount Price</label>
          <input type='text' name="discountPrice" id="discountPrice"  placeholder='Enter Discounted Price' value={item.discountPrice} onChange={onChangeHandle}/>
        </div>
        <div  className='fields'>
          <label htmlFor="category">Status</label>
            <select id='category'  name='category' placeholder='Enter Category' onChange={onChangeHandle} >
                <option disabled selected value=''>Choose Category</option> 
                <option value='Mattress'>Mattress</option>
                <option value='Furniture'>furniture</option>

            </select>
        </div>
        <div className='fields'>
          <label htmlFor="status">Status</label>
            <select name='status' id='status' placeholder='Enter Status' onChange={onChangeHandle}>
                <option disabled selected value=''>Choose Status</option> 
                <option value='1' >IN Stock</option>
                <option value='0'>OUT of Stock</option>

            </select>
        </div>
        <div className='fields'>
          <label htmlFor="image">Select Image</label>
          <input type="file" name='image' id='image' placeholder='select image ' onChange={uploadImageOnClodnary}  />

        </div>
    
        <button type='submit' className='stn-submit' disabled={btnStatus}>Update</button>
      </div>
      <h1 ref={ref} className='cancel-btn' onClick={toggleSec} >X</h1>
    </div>
    </form>
    </div>

    <div>
      <table className="table table-striped endMargin" >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>

              </tr>
            </thead>
            <tbody >
                {items.length===0 && 'no items to diaplay' }
            {

                  items.map((item, index)=>{
                     return <Itms key={item._id} item={item} index={index} updateItems={updateItem} deletItem={deleteItems}/>
                  })
            }

            </tbody>
        </table>
        

    </div>
    <div className="logout" >
      
        <button onClick={handleLogoutfun} >LogOut</button>
        </div>
</>
  )
}
