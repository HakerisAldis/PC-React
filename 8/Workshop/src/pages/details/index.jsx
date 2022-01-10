import React from 'react'
import Banner from '../../components/banner';
import Search from '../../components/search';
import SideBar from '../../components/sideBar';
import styles from './styles.module.css';
import DP from '../../assets/deadpool.png';

const Details = () => {
  const titles =[ 'Banner3', 'Banner1'];

  return (
    <div className={styles.Container}>
      <SideBar>
        <img  src={DP} alt="" />
      </SideBar>
      <div className={styles.Content}>
        <Search/>
        {titles.map(title =>(
            <Banner title={title}/>
          ))}
           </div>
    </div>
  )
}

export default Details
