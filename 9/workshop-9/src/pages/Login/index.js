import React, { useEffect, useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { KEYS } from '../../lang/keys';
import Styles from './styles.module.css';

const Login = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  useEffect(() => {
    if (username)
      navigate('/home');
  });

  const intl = useIntl();

  function onChangeHandle (e) {
    localStorage.setItem(e.target.name, e.target.value);
  }

  return (
    <div className={Styles.div}>
      <div>
        <Header />
      </div>
      <div className={Styles.input}>
        <div>
          <input name="username" onInput={onChangeHandle} type="text" placeholder={intl.formatMessage({ id: KEYS.LOGIN_USERNAME })} />
          <input name="password" onInput={onChangeHandle} type="password" placeholder={intl.formatMessage({ id: KEYS.LOGIN_PASSWORD })}/>
        </div>
        <div>
          <Link to={`/home`} >
            <button className={Styles.button}>
              <FormattedMessage id={KEYS.LOGIN_LOGIN} />
            </button>
          </Link>
        </div>
      </div>
    </div>
    )
}

export default Login;
