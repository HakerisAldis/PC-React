import React from 'react';
import styles from './styles.module.css';

const Banner = ({title}) => {
  return (
    <div className={styles.BannerBox}>
     {title}
    </div>
  )
}

export default Banner
