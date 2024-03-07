import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const useConfirmPassword = () => {
    const[visible,setVisible]=useState(false)
    const confirmPasswordIcon=visible?<AiFillEyeInvisible onClick={()=>{setVisible(!visible)}} style={{fontSize:'30px'}}/>:<AiFillEye onClick={()=>{setVisible(!visible)}} style={{fontSize:'26px'}}/>
    const inputConfirmPasswordType=visible?"text":"password"
  return (
   [inputConfirmPasswordType,confirmPasswordIcon]
  )
}

export default useConfirmPassword
