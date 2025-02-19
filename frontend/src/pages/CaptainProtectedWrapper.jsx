import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useContext, useState } from 'react';
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]); // Run effect when token or navigate changes

  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(response => {
    if (response.status === 200) {
      setCaptain(response.data.captain);
      setIsLoading(false);
    }
  })
    .catch(error => {
        console.log(error);
        localStorage.removeItem('token');
        navigate('/captain-login');
    });
  if (isLoading) {
    return (<div>Loading...</div>);
  }

  return token ? <>{children}</> : null; // Prevent rendering when unauthenticated
};

export default CaptainProtectedWrapper;
