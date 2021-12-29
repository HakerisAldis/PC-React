import React, { useState } from 'react'
import Button from '../components/Button/Button'

const Home = () => {

    const [buttonCount, setButtonCount] = useState(1);

    const addButton = () => {
        setButtonCount(prevButtonCount => prevButtonCount + 1);     
    }

    const mapButtons = () => {
        const buttonsArray = []
        for (var i=0; i < buttonCount; i++) {
            buttonsArray.push(<Button onClick={addButton}/>);
        }
        return buttonsArray;
    }

    return (
        <div>
            {mapButtons()}
        </div>
    )
}

export default Home
