import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes';

const Card = (props) => {
    return (
        <Link to="#">
            <div class="max-w-xs rounded overflow-hidden shadow-lg my-4 items-center hover:shadow-xl mx-auto">
                <img class="w-1/2 mx-auto" src={props.src} alt="Snowboard" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-center">
                        {props.text}
                    </div>
                </div>
            </div>
        </Link>   
    )
}

export default Card;
