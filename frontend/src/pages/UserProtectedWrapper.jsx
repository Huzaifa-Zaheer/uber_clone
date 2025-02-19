import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import { useContext, useState } from 'react';
import axios from 'axios';

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]); // Run effect when token or navigate changes

  axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(response => {
    if (response.status === 200) {
      setUser(response.data.captain);
      setIsLoading(false);
    }
  })
    .catch(error => {
        console.log(error);
        localStorage.removeItem('token');
        navigate('/login');
    });
  if (isLoading) {
    return (<div>Loading...</div>);
  }

  return token ? <>{children}</> : null; // Prevent rendering when unauthenticated
};

export default UserProtectedWrapper;
