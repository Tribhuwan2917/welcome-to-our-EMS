import axios from 'axios';
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Form, Spinner } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import { employeeManagement_base_URL, employeeManagement_message_sendEmail } from '../../../public/ApiUrl';
import { Server_Error_Message } from '../../../public/UtilData';
import { EmailSchema } from './EmailSchema';

const Email = () => {
  const location=useLocation()
  const naviagte=useNavigate()
  const emailIntialValue = {
    recioverEmailId: "",
    emailMessage:'',
    emailSubject:'',
    emailAttachment:''
  };
  useEffect(() => {
    if (!sessionStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn") === 'false') {  
      naviagte("/login")
}})
const[isSend,setIsSend]=useState(false)
  const { handleChange, handleBlur, handleSubmit, values,errors,touched } =
    useFormik({
      initialValues: emailIntialValue,
      onSubmit: (values, action) => {
        setIsSend(true)
        values.senderEmailId = sessionStorage.getItem("registrationEmail");
        values.recioverEmailId=location.state.employeeData.employeeEmail;
        axios
        .post(
          employeeManagement_base_URL +
            employeeManagement_message_sendEmail,
          values
        )
        .then((data)=>{
        toast.success("Email Has  Send Successfully!")
        setIsSend(false)
        })
        .catch((error)=>{
          toast.error(Server_Error_Message)
          setIsSend(false)
        })
        action.resetForm()
       
      },
      validationSchema:EmailSchema
    });
  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{marginLeft:'-350px'}}>Subject</Form.Label>
        <Form.Control  type="text" name='emailSubject' placeholder='Enter The Subject' onChange={handleChange} onBlur={handleBlur} value={values.emailSubject} />
      </Form.Group>
      {errors.emailSubject && touched.emailSubject ? <Alert style={{ borderRadius:'10px',marginTop: '-10px',marginLeft: '0px', width: '420px', height: '35px', paddingBottom: '35px' }} variant='danger'>
                        {errors.emailSubject}
                      </Alert> : null}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{marginLeft:'-320px'}}>Message</Form.Label>
        <Form.Control name="emailMessage" type='text' placeholder='Enter The Message' onChange={handleChange} onBlur={handleBlur} value={values.emailMessage} as="textarea" rows={3} />
      </Form.Group>
      {isSend?<span style={{margin:'3px',marginLeft:'-100px',paddingBottom:'100px'}}> We Are Sending The Email......
      <Spinner animation="border" role="status"></Spinner></span>:null}
      {/* {isSend?
    :null} */}
    <br></br>
      {errors.emailMessage && touched.emailMessage ? <Alert style={{ borderRadius:'10px',marginTop: '-10px', marginLeft: '0px', width: '420px', height: '35px', paddingBottom: '35px'}} variant='danger'>
                        {errors.emailMessage}
                      </Alert> : null}
      <Button onClick={()=>naviagte(-1)} style={{marginLeft:'5px',width:'180px',height:'40px',fontSize:'15px',textDecoration:'none'}} variant='danger'>Back</Button>
      <Button onClick={handleSubmit} style={{marginLeft:'5px',width:'180px',height:'40px',fontSize:'15px',textDecoration:'none'}}>Send</Button>
    </Form>
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default Email
