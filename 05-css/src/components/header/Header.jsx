import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h3 className={styles.logo}>The Paradise official</h3>
      <button className={styles.btn}>Subscribe</button>
    </div>
  )
}

export default Header
