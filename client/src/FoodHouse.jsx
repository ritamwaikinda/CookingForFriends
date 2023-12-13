import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavMenu from './components/NavMenu';
import Container from 'react-bootstrap/Container';
import AboutPageTemplate from './components/AboutPageTemplate';
import MainPageTemplate from './components/MainPageTemplate';
import RecipePageTemplate from './components/RecipePageTemplate';

import './App.css';

const FoodHouse = () => {
  return (
    <BrowserRouter>
      <NavMenu />
      <Container>
        <Route path="/" exact component={MainPageTemplate} />
        <Route path="/about" component={AboutPageTemplate} />
        <Route path="/recipe/:id" component={RecipePageTemplate} />
      </Container>
    </BrowserRouter>
  );
};

export default FoodHouse;
