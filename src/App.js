import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

const Main = lazy(() => import('./pages/main'));
const Services = lazy(() => import('./pages/services'));
const Service = lazy(() => import('./pages/service'));
const AboutUs = lazy(() => import('./pages/aboutUs'));
const Faqs = lazy(() => import('./pages/faqs'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/services' element={<Services />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/:services/:service' element={<Service />} />
          <Route path='/aboutUs' element={<AboutUs />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
