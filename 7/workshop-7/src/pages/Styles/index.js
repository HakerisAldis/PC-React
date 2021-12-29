import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Style from './styles.module.css';

const Styles = () => {
    const {name} = useParams();

    const [style, setStyle] = useState('input');

    function onChange (e) {
        setStyle(e.target.value);
        //onsole.log(style);
    }

    return (
        <div className={Style.div}>
            <div>
                <Header name={name} />
            </div>
            <div className={Style.padding}>
                <select value={style} className={Style[style]} name="cars" id="cars" onChange={onChange}>
                    <option value="input">input</option>
                    <option value="dropdown">dropdown</option>
                    <option value="noBorders">noBorders</option>
                </select>
            </div>
        </div>
    )
}

export default Styles;
