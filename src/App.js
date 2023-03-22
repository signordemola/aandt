import React from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components & pages
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  // {
  //   path: '/sectors',
  //   element: <Sectors />,
  // },
]);

function App() {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <div className="">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
