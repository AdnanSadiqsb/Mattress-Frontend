import React, { useContext, useState } from "react";

import itemContext from "./ItemContext";
const ItemState=(props)=>{
    const host="https://mattress-app.herokuapp.com"

const [items,setItems]=useState([])
const [handleError, setHandleError]=useState(true)
const getAllItems=async()=>{
    try{

        var url=`${host}/api/items/fetchItems`
        const response=await fetch(url, {
     method: 'GET', // or 'PUT'
     headers: {  
         'Content-Type': 'application/json',
         
        }    
    });
    const res=await response.json()
    if(res.success)
    {
        setHandleError(false)
        setItems(res.items)
    }
    else{
        setHandleError(true)
    }
    }catch(error){
        console.log("this is error")
        setHandleError(true)

    }


}

const addNewItem=async(item)=>{
    try{
            
    setHandleError(false)
    var url=`${host}/api/items/addItem`
    const response=await fetch(url, {
     method: 'POST', // or 'PUT'
     headers: {  
        'Content-Type': 'application/json',
        
    },
    
    body: JSON.stringify(item),
    
     });
     
     var res= await response.json();
     if(res.success)
   {

       setItems(items.concat(res.newItem)) 
    }
    else{
        setHandleError(true)
    }
    }catch{
        setHandleError(true)
    }


}

const updateItems=async(item)=>{
    try{
        setHandleError(false)

        var url=`${host}/api/items/updateItem/${item._id}`
        const response=await fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {  
                'Content-Type': 'application/json',
                
            },
            
            body: JSON.stringify(item),
            
        });
        const res=await response.json()
        if(res.success)
        {
            const newItem=JSON.parse(JSON.stringify(items))
            for (let index = 0; index < newItem.length; index++) 
            {
                const element = items[index];
                if(element._id==item._id)
                {
                    newItem[index].name=item.name
                newItem[index].status=item.status
                newItem[index].category=item.category
                newItem[index].actualPrice=item.actualPrice
                newItem[index].discountPrice=item.discountPrice
                newItem[index].image=item.image
                break
                }
            }
            setItems(newItem)
      

        
        }
        else{handleError(true)}
    }catch{
        setHandleError(true)
    }
}
const deletItem=async(_id)=>{
    try{
        setHandleError(false)

        var url= `${host}/api/items/deleteItem/${_id}`
        const response=await fetch(url, {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type': 'application/json'
            }
            });
            const res= await response.json()
            if(res.success)
            {

                const newItems= items.filter((item)=>{return item._id!==_id})
                setItems(newItems)
            }
            else{
                setHandleError(true)
            }
    

    }catch{
        setHandleError(true)
    }

}







return(
    <itemContext.Provider value={{getAllItems, items, addNewItem, updateItems, deletItem, handleError}} >
    {
        props.children
    }
</itemContext.Provider>
)
}
export default ItemState