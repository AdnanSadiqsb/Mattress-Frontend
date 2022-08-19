import React, { useState } from "react";

import NoteContext from "./AlertContext";
const AlertState=(props)=>{
    const [alert, SetAlret]= useState({type:"", msg:" "})
    const setAlert=(lrt)=>{
        SetAlret(lrt)
        setTimeout(() => {
            SetAlret({type:"", msg:""})
        }, 3000);

    }

    return (
        <NoteContext.Provider value={{setAlert,alert }} >
            {
                props.children
            }
        </NoteContext.Provider>
    )
}

export default AlertState