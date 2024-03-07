import React, { useState } from 'react'
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const usePasswordToggal = () => {
    const[visible,setVisible]=useState(false)
    const icon=visible?<AiFillEyeInvisible onClick={()=>{setVisible(!visible)}} style={{fontSize:'30px'}}/>:<AiFillEye onClick={()=>{setVisible(!visible)}} style={{fontSize:'26px'}}/>
    const inputType=visible?"text":"password"
  return (
   [inputType,icon]
  )
}

export default usePasswordToggal
