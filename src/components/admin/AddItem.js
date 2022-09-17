import React, {useState, useContext, useEffect} from 'react'
import itemContext from '../../Context/Items/ItemContext'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import alertContext from '../../Context/alert/AlertContext'
export default function AddItem() {
  const {setAlert}= useContext(alertContext)
  const itmContext=useContext(itemContext)
  const {addNewItem}=itmContext
  const [btnStatus, setBtnStatus]=useState(true)
  const [item, setItem]= useState({name:"",actualPrice:"",discountPrice:"",status:"",image:"", category:""})
  const navigate=useNavigate()
  const onChange=async(e)=>{
    setItem({...item,[e.target.name]:e.target.value})
  }

  useEffect(()=>{
    if( localStorage.getItem('auth-key')!=='poiuyt09876')
    {
      navigate('/login')
    }

  },[])



  const handleSubmitBtn=(e)=>{


      e.preventDefault()
      addNewItem(item)
      setAlert({type:"success", msg:"New item Added success fuly"})

      setItem({_id:'',name:"",actualPrice:"",discountPrice:""})
      setBtnStatus(true)
      document.getElementById('category').value=""
    document.getElementById('status').value=""
    document.getElementById('image').value=null
    
  
}
  const uploadImageOnClodnary=(e)=>{
    const formData= new FormData();
    formData.append("file",e.target.files[0] )
    formData.append("upload_preset",'qqogputz')

    axios.post("https://api.cloudinary.com/v1_1/dcqeugna3/image/upload", formData).then((res)=>{
      setItem({...item,image:res.data.url})
      setBtnStatus(false)
      setAlert({type:"success", msg:"image uploaded success fuly"})

    })

  } 


  return (
    <div>
      <form onSubmit={handleSubmitBtn}>

        <div className="update-con">
    <h1 className='note-heading'>Add New Item</h1>
      <div className="home-container">
        <div className='fields'>
          <label htmlFor="name">Item Name</label>
          <input type="text" id='name' name='name' placeholder='Enter Product name ' onChange={onChange} value={item.name} required minLength={5} />
        </div>
        <div className='fields'>
          <label htmlFor="price">Actual Price</label>
          <input type='number' name="actualPrice" id="actualPrice"  placeholder='Enter Price' onChange={onChange} value={item.actualPrice} required />
        </div>
        <div className='fields'>
          <label htmlFor="discountPrice">Discount Price</label>
          <input type='number' name="discountPrice" id="discountPrice"  placeholder='Enter Discounted Price'  onChange={onChange} value={item.discountPrice} required />
        </div>
        <div className='fields'>
          <label htmlFor="category">Category</label>
            <select  name='category' id='category' placeholder='Enter Category' onChange={onChange} >
                <option disabled selected value=''>Choose Category</option> 
                <option value='Fish'>Fish</option>
                <option value='Fish-Accessories'>Fish-Accessories</option> 

            </select>
        </div>
        <div className='fields'>
          <label htmlFor="status">Status</label>
            <select name='status' id='status' placeholder='Enter Status' onChange={onChange} >
                <option disabled selected value=''>Choose Status</option> 
                <option value='1' >IN Stock</option>
                <option value='0'>OUT of Stock</option>

            </select>
        </div>
        <div className='fields'>
          <label htmlFor="image">Select Image</label>
          <input type="file" name='image' id='image' placeholder='select image ' onChange={uploadImageOnClodnary}  />
          {/* <FileBase64
        multiple={false}
        onDone={({base64})=>{
          console.log(base64)
          setItem({...item,
            image: base64
          });
        }}
        />  */}

        </div>

    
        <button type='submit' className='stn-submit' disabled={btnStatus}>Add Item</button>
      </div>
      <div className='endMargin'>

      <Link to="/itemsInfo">go back</Link >
      </div>
    </div>
      </form>
    </div>
  )
}
