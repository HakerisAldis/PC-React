import React, {useState} from 'react';
import Banner from '../../components/banner';
import Search from '../../components/search';
import SideBar from '../../components/sideBar';
import Switch from '../../components/switch';
import styles from './styles.module.css';

const Home = () => {
  const [isToggled, setIsToggled] = useState(false);
  const titles = ['Banner1', 'Banner2', 'Banner3', 'Banner4'];
 
    const onToggle = () => setIsToggled(!isToggled);

  return (
    <div className={styles.Container}>
      <SideBar >
        {isToggled ? 
          titles.map(title =>(
            <Banner title={title}/>
          ))
        : <Search/>}
      </SideBar>
      <Switch 
      isToggled={isToggled}
      onToggle={onToggle}
      />
    </div>
  )
}

export default Home
