import React, { useState } from 'react'

const Clock = (props) => {



    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const tick = () => {
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(tick, 1000);

    return (
        <div>
            <h2>{time}</h2>
        </div>
    )
}

export default Clock;
