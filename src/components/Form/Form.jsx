import React from 'react'
import InputField from './InputField';
import Button from '../UI/Button';
import styles from '../../assets/styles/Form.module.css';

function Form({ fields, onSubmit, onChange, values, text, errors}) {

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
       {/* {
        fields.map((field, index) => (
            <InputField key={index} {...field} />
        ))
       } */}

       {
        fields.map((field, index)=>(
          <InputField 
            key={index}
            label={field.label}
            type={field.type}
            name={field.name}
            value={values[field.name]}
            onChange={onChange}
            errors={errors}
          />
        ))
       }
       <Button type="submit" text={text} />
    </form>
  )
}

export default Form