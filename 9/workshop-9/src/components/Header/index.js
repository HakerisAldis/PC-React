import React, { useContext } from 'react'
import { useIntl } from 'react-intl';
import { LocaleContext } from '../../context';
import { KEYS } from '../../lang/keys';
import Styles from './styles.module.css';

const Header = ({ name }) => {

  const intl = useIntl();

  const setLocale = useContext(LocaleContext);

  function handleOnChange (e) {
    localStorage.setItem("locale", e.target.value);
    setLocale(e.target.value);
  }

  return (
    <div className={Styles.header}>
      <div>
        <select name="lang" id="lang" onChange={handleOnChange}>
          <option value="" selected disabled>
            {intl.formatMessage({ id: KEYS.APP_LANGUAGE })}
          </option>
          <option value="lt">
            LT
          </option>
          <option value="en">
            EN
          </option>
          <option value="zh">
            ZH
          </option>
      </select>
      </div>
      <div>
        {name && `${intl.formatMessage({ id: KEYS.HOME_HELLO})}${name}`}
      </div>
    </div>
  )
}

export default Header;
