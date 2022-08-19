import React from 'react'
import '../../css/itemInfo.css'
export default function Itms(props) {
    const {_id,name, image, discountPrice}=props.item
    const {index, updateItems,deletItem}=props

  return (
    
          <tr className='tbl-row' >
      <th scope="row">{index+1}</th>
      <td><img style={{width:'100px'}} src={image} alt="" /></td>
      <td>{name}</td>
      <td>{discountPrice}</td>

      <td className='row-item' >
      <i className="fa-solid fa-trash-can" onClick={()=>deletItem(_id)}></i>
      <i className="fa-solid fa-file-pen" onClick={()=>updateItems(props.item)}></i>
      </td>
    </tr>
    
  )
}
