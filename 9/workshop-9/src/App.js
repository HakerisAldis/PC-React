import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { IntlProvider } from 'react-intl';
import React, { useState } from 'react';
import { lang } from './lang';
import { LocaleContext } from './context';

function App() {
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "lt");

  return (
    <LocaleContext.Provider value={setLocale}>
      <IntlProvider messages={lang[locale]} locale={locale}>
        <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        </BrowserRouter>
      </IntlProvider>
    </LocaleContext.Provider>
    
  );
}

export default App;
