import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Form, Spinner } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { employeeManagement_base_URL, employeeManagement_message_sendSMS } from '../../../public/ApiUrl'
import { toast,ToastContainer } from 'react-toastify'
import { Invalid_SMS_Message, Server_Error_Message } from '../../../public/UtilData'
import { MobileSMSSchema } from './MobileSMSSchema'

const MobileSMS = () => {
  const location=useLocation()
  const smsIntialValue = {
    employeeMobileNo:'',
    message:''
  };
  const[isSend,setIsSend]=useState(false)
  const { handleChange, handleBlur, handleSubmit, values,errors,touched} =
  useFormik({
    initialValues: smsIntialValue,
    onSubmit: (values, action) => {
      values.employeeMobileNo=location.state.employeeData.employeeMobileNo;
      setIsSend(true)
      axios
      .post(
        employeeManagement_base_URL +
          employeeManagement_message_sendSMS,
        values
      )
      .then((data)=>{
        console.log(data)
        if(data.data==="Something Went Wrong, We Could Not Send The Message")
        {
          toast.error(Invalid_SMS_Message)
        }else{
      toast.success("SMS Has  Send Successfully!")
        }
      setIsSend(false)
      })
      .catch((error)=>{
        console.log(error)
        toast.error(Server_Error_Message)
        setIsSend(false)
      })
      action.resetForm()
     
    },
    validationSchema:MobileSMSSchema
  });
  const naviagte=useNavigate()
  useEffect(() => {
    if (!sessionStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn") === 'false') {  
      naviagte("/login")
}})
  return (
    <div>
     <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label style={{marginLeft:'-350px'}}>Message</Form.Label>
        <Form.Control as="textarea" rows={3} type="text" onChange={handleChange} onBlur={handleBlur} value={values.message} name='message' placeholder="Enter The Message" />
      </Form.Group>
      {isSend?<span style={{margin:'3px',marginLeft:'-100px',paddingBottom:'100px'}}> We Are Sending The Meesage......
      <Spinner animation="border" role="status">
    </Spinner>
    <br></br>
    </span>:null}
    
      {errors.message && touched.message ? <Alert style={{ borderRadius:'10px',marginTop: '2px', marginLeft: '0px', width: '420px', height: '35px', paddingBottom: '35px' }} variant='danger'>
                        {errors.message}
                      </Alert> : null}
            
      <Button style={{marginLeft:'5px',width:'180px',height:'40px',fontSize:'15px',textDecoration:'none'}} variant='danger'>Back</Button>
     
      <Button style={{marginLeft:'5px',width:'180px',height:'40px',fontSize:'15px',textDecoration:'none'}} onClick={handleSubmit}>Send</Button>
    </Form>
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default MobileSMS
