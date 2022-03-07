import React from "react";
import {useFormik} from "formik"
import * as Yup from "yup";
import emailjs from "emailjs-com";



let Contact = () =>{
  
  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },

    validationSchema: Yup.object({
      name: Yup.string().required('This Field is Required').max(15, "Must be 15 characters or less"),
      email: Yup.string().required('This Field is Required').email('Email is Invalid'),
      message: Yup.string().required('This Field is Required').max(200, "Must be 200 characters or less")
    })
    
  })
const sendEmail = (e) =>{
e.preventDefault();
if(formik.errors.name || formik.errors.email || formik.errors.message){
  alert("Please fill the valid values")
}
else if(formik.values.name === "" || formik.values.email === "" || formik.values.message === ""){
  alert("Please fill the required fields")
}
else{
emailjs.sendForm('service_6mb9q1s', 'template_awoi0ff', e.target, 'NsikZCE0ZbzHVdODf').then(alert('E-mail sent')).catch(err =>{alert(err)});
formik.values.name = ''
}
}
  return(
    <>
    <div className = "contactMain" id = "contact">
    <div className = "Ctitle">
        <h3>Drop a
          <br/> Message</h3>
          <storng>...let's talk</storng>
          
    </div>
<form onSubmit = {formik.handleSubmit , sendEmail}>

<div className = "formControl">
  <label htmlFor = "name">Name</label>
  <input type = "text" name = "name" id = "name" onChange = {formik.handleChange} value = {formik.values.name} 
    onBlur = {formik.handleBlur}
  />
  {formik.touched.name && formik.errors.name ? <div className = "errMsg">{formik.errors.name}</div> : null}
  </div>
  <div className = "formControl">
  <label htmlFor = "email">E-Mail</label>
  <input type = "text" name = "email" id = "email" onChange = {formik.handleChange} value = {formik.values.email} 
     onBlur = {formik.handleBlur}
  />
  {formik.touched.email && formik.errors.email ? <div className = "errMsg">{formik.errors.email}</div> : null}
  </div>
  <div className = "formControl">
  <label htmlFor = "message">Message</label>
  <textarea name = "message" id = "message" onChange = {formik.handleChange} value = {formik.values.message} 
     onBlur = {formik.handleBlur}
  />
  {formik.touched.message && formik.errors.message ? <div className = "errMsg">{formik.errors.message}</div> : null}
  </div>
  
  <button type = "submit">Submit</button>
</form>
</div>
    </>
  )
}
export {Contact}