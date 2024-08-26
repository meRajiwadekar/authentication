import React from 'react'
import styles from '../../assets/styles/Button.module.css';

function Button({text}) {
  return (
    <button className={styles.button}>{text}</button>
  )
}

export default Button