import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import { StyledComponent } from 'styled-components';
import { HomePage } from './pages/HomePage';
import { ListTripsPage } from './pages/ListTripsPage';
import { ApplicationFormPage } from './pages/ApplicationFormPage';

export default function App() {

  const [page,setPage] = useState(0)

  const escolhendoPage = () => {
    switch(page){
      case 1:
        return <HomePage/>
        break
      case 2:
        return <ListTripsPage/>
      case 3:
        return <ApplicationFormPage/>
      case 4:
        return <HomePage/>
      case 5:
        return <HomePage/>
      case 6:
        return <HomePage/>
    }

  }

  return (
    <div>
      
    </div>
  );
}

