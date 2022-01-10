<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ text, src }) => {
  return (
    <Link to="#">
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-4 items-center hover:shadow-xl mx-auto">
        <img className="w-1/2 mx-auto" src={src} alt="Snowboard" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            {text}
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};
=======
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
>>>>>>> ba94c08257a2bc597ee233fddb32bd9de70ebfe5

export default Card;
