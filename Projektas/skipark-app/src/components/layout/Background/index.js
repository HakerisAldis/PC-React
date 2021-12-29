import React from 'react';
import background from './bg.jpg';

const Background = (props) => {

    console.log(props);

    return (
        <div className="w-full h-screen flex items-center justify-center bg-no-repeat bg-cover opacity-50 absolute left-0 bottom-0 -z-50"
            style={{ backgroundImage: `url(${background})` }}>
                {props.children}
        </div>
    )
}

export default Background
