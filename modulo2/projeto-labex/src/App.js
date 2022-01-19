import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { HomePage } from './pages/HomePage';
import { ListTripsPage } from './pages/ListTripsPage';
import { ApplicationFormPage } from './pages/ApplicationFormPage';
import { LoginPage } from './pages/LoginPage';
import { AdminHomePage } from './pages/AdminHomePage'
import { TripDetailsPage } from './pages/TripDetailsPage'
import { CreateTripPage } from './pages/CreateTripPage'
import styled from 'styled-components';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import * as C from './pages/styles'
import { GlobalStyle } from './pages/styles';

export default function App() {

  return (
    <C.Main>
      <GlobalStyle/>
      <h1>LabeX</h1>
      <BrowserRouter>
        <Routes>

          <Route exact path={"/"} element={<HomePage/>}/>
          
          <Route exact path={"/ListTripsPage"} element={<ListTripsPage/>}/>
            
          <Route exact path={"/ListTripsPage/ApplicationFormPage"} element={<ApplicationFormPage/>}/>
            
          <Route exact path={"/LoginPage"} element={<LoginPage/>}/>
            
          <Route exact path={"/AdminHomePage"} element={<AdminHomePage/>}/>
            
          <Route exact path={"/AdminHomePage/TripDetailsPage/:id"} element={<TripDetailsPage/>}/>
            
          <Route exact path={"/AdminHomePage/CreateTripPage"} element={<CreateTripPage/>}/>
  
        </Routes>
      </BrowserRouter>
    </C.Main>
  );
}

