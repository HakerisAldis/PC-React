import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { KEYS } from '../../lang/keys';
import Style from './styles.module.css';

const Home = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    if (!username)
      navigate('/login');
  });

  function handleSignout () {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  return (
    <div className={Style.div}>
      <div>
        <Header name={username} />
      </div>
      <div className={Style.padding}>
        <Link to={`/login`} >
          <button className={Style.button} onClick={handleSignout}>
            <FormattedMessage id={KEYS.HOME_LOGOUT} />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
