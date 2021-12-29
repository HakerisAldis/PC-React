import React, { useState } from 'react'

const Button = ({onClick}) => {

    const [Count, setCount] = useState(0);

    const Increment = (e) => {
        setCount(prevCount => prevCount + 1);
        e.preventDefault();
    }

    return (
        <button onClick={onClick} onContextMenu={Increment}>Button[{Count}]</button>
    )
}

export default Button
