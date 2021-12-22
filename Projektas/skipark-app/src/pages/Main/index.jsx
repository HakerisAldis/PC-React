import React from 'react'
import background from './bg.jpg'

const Main = () => {
    return (
        <div className="w-full h-full bg-no-repeat bg-cover"
             style={{ backgroundImage: `url(${background})` }}>

        </div>
    )
}

export default Main
