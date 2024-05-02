import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Main from "./pages/main";
import Services from "./pages/services";
import Service from "./pages/service";
import Faqs from './pages/faqs';

function ScrollToTop() {
  const { pathname } = useLocation();
  const [georgian, setGeorgian] = useState("eng");

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            setGeorgian(storedLanguage === 'geo');
        }
    }, []);

    function handleLanguageChange() {
        const newLanguage = georgian ? 'eng' : 'geo';
        setGeorgian(!georgian);
        localStorage.setItem('language', newLanguage);
    }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/services' element={<Services />} />
        <Route path='/faqs' element={<Faqs />}/>
        <Route path='/:services/:service' element={<Service />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;