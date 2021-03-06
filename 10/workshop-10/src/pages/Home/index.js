import React, { useState } from 'react'
import { calculateAge, calculateAgeWithMonths } from './calculateAge';
import Styles from './styles.module.css';

const Home = () => {

  const [input, setInput] = useState('');
  const [age, setAge] = useState('');

  function handleOnClick() {
    console.log(input);
    if (process.env.NODE_ENV === 'production') {
      setAge(calculateAgeWithMonths(input));
    }else{
      setAge(calculateAge(input));
    }
  }

  return (
    <div className={Styles.div}>
      <div>
        <div className={Styles.form}>
          <label htmlFor="date">Date:</label>
          <input id="date" value={input} onInput={e => setInput(e.target.value)} className={Styles.input} 
            type="date"/>
          <label htmlFor="date">Age:</label>
          <input id="age" value={age} className={Styles.input} type="text" disabled/>
        </div>
        <div>
          <button className={Styles.button} onClick={handleOnClick}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Home;
