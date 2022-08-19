import React,{useState} from 'react'
export default function ShopItems(props) {
    const {_id,name, image, actualPrice, discountPrice, status}=props.item
  return (

    
    <div className="card" style={{width: '22rem'}}>
        {/* <img src="https://cdn.shopify.com/s/files/1/0638/5008/6640/collections/aoa-banner-web.jpg?v=1656411284" className="card-img-top" alt="..."/> */}
        <img  className="card-img-top" style={{height:'300px'}} src={image} alt="" />
        <div className="card-body">
            <h5  className="card-title cardTitle">{name}</h5>
        </div>
        <div className="price-cont">
          <div className='price-inner-cont'>
            <p className='dis-price'>RS:{discountPrice}</p>
            <p className='actual-price'>{actualPrice}</p>
            </div>
            <h5 className={status=='1'?'greentxt':'redtxt'}>{status=='1'?'In Stcock':'Out of Stock'}</h5>
        </div>
    </div>


    
  )
}
