import React, { useState } from 'react'
import Form from '../Form/Form'
import { registerConfig } from '../../utils/fields'

function Register() {

    const [values, setValues] = useState({
      firstName : '',
      lastName : '',
      email : '',
      password : '',
      cpassword : ''
    })
  
      const handleSubmit = (e)=>{
        e.preventDefault()
          console.log(e.target.value)
      }
  
      const handleChange = (e)=>{
        const {name, value} = e.target;
        setValues(prev => ({
          ...prev,
          [name] : value
        }))
      }
  return (
    <Form fields={registerConfig} onSubmit={handleSubmit} onChange={handleChange} values={values} text="Register" />
  )
}

export default Register