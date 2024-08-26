import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import styles from '../../assets/styles/Form.module.css';
import { Link } from 'react-router-dom';
import { loginConfig } from '../../utils/fields';
import { validate } from '../../utils/validation';
function Login() {

  const [values, setValues] = useState({
    email : '',
    password : ''
  })

  const [errors,setErrors] = useState({});

  console.log(errors)

  useEffect(()=>{
    let validateErros = validate(loginConfig,values)
    if(validateErros){
      setErrors(validateErros)
    }
  },[values])
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(Object.keys(validate(loginConfig,values)).length === 0){
        console.log("login form: ",values)
      }
    }

    const handleChange = (e)=>{
      const {name, value} = e.target;
      setValues(prev => ({
        ...prev,
        [name] : value
      }))
    }

  return (
    <div className={styles.login}>
      <h2 className={styles.title}>Sign in to Project title</h2>
      <p className={styles.subTitle}>Welcome back! Please sign in to continue</p>
      <div className={styles.social}>
        <button className={styles.socialButton}>GitHub</button>
        <button className={styles.socialButton}>Google</button>
        <button className={styles.socialButton}>Microsoft</button>
      </div>
      <div className={styles.divider}>
        <span>or</span>
      </div>
      <Form fields={loginConfig} onSubmit={handleSubmit} onChange={handleChange} values={values} errors={errors} text="Login" />
      <div className={styles.craeteAccount}>
        <p>Don't have an account? 
          <Link to={'/sign-up'}>
            <span>Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login