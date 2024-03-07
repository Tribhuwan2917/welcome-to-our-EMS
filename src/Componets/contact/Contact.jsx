import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate=useNavigate()
  const location=useLocation()
  console.log(location.state.employeeData)
  const employeeData=location.state.employeeData
  const handleEmailMessageSend=()=>{
    navigate('sendEmailMessage',{ state:{ employeeData }})
  }
  const handleWhatsAppMessageSend=()=>{
    navigate('sendMobileSMS',{ state: {employeeData }})
  }
 
  useEffect(() => {
    if (!sessionStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn") === 'false') {  
      navigate("/login")
}})
  return (
    <div style={{marginTop:'80px',textAlign:'center'}}>
         <Card style={{ marginLeft:'28rem',width: '28rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Contact With Employee</Card.Title>
        <Card.Text>
       
        <Button style={{marginLeft:'5px',width:'180px',height:'40px',fontSize:'15px',textDecoration:'none'}} onClick={()=>handleWhatsAppMessageSend()}>SMS</Button>
        <Button style={{marginLeft:'5px',width:'180px',height:'40px',fontSize:'15px',textDecoration:'none'}} onClick={()=>handleEmailMessageSend()}>Email</Button>
        <Outlet></Outlet>
        </Card.Text>
      
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
   
    </div>
  )
}

export default Contact
