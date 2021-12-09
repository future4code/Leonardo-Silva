import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { StyledComponent } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ProtectedPage } from '../Hooks/ProtectedPages';

export const TripDetailsPage = () => {
    const navigate = useNavigate()
    ProtectedPage()
    

    return(
        <p>
           TripDetailsPage 
        </p>
    )  


}