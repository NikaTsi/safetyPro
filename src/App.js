import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, json } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Loader from './components/loader';
import ErrorPage from './pages/errorpage';
import './styles.css'

const Main = lazy(() => import('./pages/main'));
const Services = lazy(() => import('./pages/services'));
const Service = lazy(() => import('./pages/service'));
const AboutUs = lazy(() => import('./pages/aboutUs'));
const Faqs = lazy(() => import('./pages/faqs'));
const Contact = lazy(() => import('./pages/contact'));

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
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/services' element={<Services />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/contact' element={<Contact />}  />
          <Route path='/services/:service' element={<Service />} />
          <Route path='/aboutUs' element={<AboutUs  />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;