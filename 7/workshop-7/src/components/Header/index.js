import React from 'react'
import Styles from './styles.module.css';

const Header = (props) => {
    return (
        <div className={Styles.header}>
            {props.name}
        </div>
    )
}

export default Header;
