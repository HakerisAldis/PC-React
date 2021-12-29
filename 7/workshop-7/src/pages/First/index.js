import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Styles from './styles.module.css';

const First = () => {

    const [input, setInput] = useState('');

    const navigate = useNavigate();

    return (
        <div className={Styles.div}>
            <div>
                <div>
                    <input value={input} onInput={e => setInput(e.target.value)} className={Styles.input} 
                    type="text" placeholder="Enter your name"/>
                </div>
                <div>
                    <Link to={`/styles/${input}`} >
                        <button className={Styles.button}>Submit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default First;
