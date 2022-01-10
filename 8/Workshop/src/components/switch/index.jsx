import React from 'react'
import styles from './styles.module.css';

const Switch = ({isToggled, onToggle}) => {

    return (
      <label className={styles.ToggleSwitch}>
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className={styles.Switch} />
      </label>
    );
 
}

export default Switch
