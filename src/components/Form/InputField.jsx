import React from 'react'
import styles from '../../assets/styles/Form.module.css';

function InputField({name, type, label, value, onChange, errors}) {
  return (
    <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor={name}>{label}</label>
        <input 
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={styles.formControl}
        />
        {
          errors[name] && <div className={styles.errorMessage}>{errors[name]}</div>
        }
    </div>
  )
}

export default InputField