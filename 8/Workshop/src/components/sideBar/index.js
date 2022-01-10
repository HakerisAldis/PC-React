import React from 'react';
import styles from './styles.module.css';


const SideBar = ({children}) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Top}>
         <h1>Sidebar</h1>
         <div className={styles.Logo}>
           <h2>LOGO</h2>
         </div>
      </div>
      <div className={styles.Middle}>
      {children}
      </div>
      <div className={styles.Bottom}>
        2022
      </div>
    </div>
  )
}

export default SideBar
