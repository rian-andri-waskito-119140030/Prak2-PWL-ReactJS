import React from 'react';
import Fitur from '../Fitur/Fitur';
import Header from '../Head/Header';
import Home from '../Home/Home';
import Portfolio from '../Portofolio/Portofolio';

const Route = () => {
  return (
    <>
      <Header />
      <Home />
      <Fitur />
      <Portfolio/>
    </>
    
  )
}

export default Route;
