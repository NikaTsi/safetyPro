import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

const Main = lazy(() => import('./pages/main'));
const Services = lazy(() => import('./pages/services'));
const Service = lazy(() => import('./pages/service'));
const AboutUs = lazy(() => import('./pages/aboutUs'));
const Faqs = lazy(() => import('./pages/faqs'));
const Contact = lazy(() => import('./pages/contactUs'));

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [pathname]);

    return null;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/services' element={<Services />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/:services/:service' element={<Service />} />
          <Route path='/aboutUs' element={<AboutUs />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;