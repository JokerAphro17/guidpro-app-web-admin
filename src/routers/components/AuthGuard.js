import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import useAuth from '../../utils/hooks/useAuth';

const AuthGuard = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  console.log('token', user?.token);

  if (!user) {
    return <Redirect to={{ pathname: "/auth/login", state: { from: location.pathname } }} />;
  }


  return children;
};

export default AuthGuard;