import React, {useState} from 'react';
import styles from './styles.module.css';

const Search = () => {
const [value, setValue] = useState('');

  const handleBlur = () =>{
      alert(value);
  }

  return (
    <div>
      <input className={styles.Input} type="text" placeholder='Search' onChange={(e) => setValue(e.target.value)} onBlur={handleBlur}/>
    </div>
  )
}

export default Search
