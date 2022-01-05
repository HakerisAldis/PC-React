import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <Link to="#">
            <div className="max-w-xs rounded overflow-hidden shadow-lg my-4 items-center hover:shadow-xl mx-auto">
                <img className="w-1/2 mx-auto" src={props.src} alt="Snowboard" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">
                        {props.text}
                    </div>
                </div>
            </div>
        </Link>   
    )
}

export default Card;
