import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/auth/me', {
        withCredentials: true, // sends session cookie
      });
      setUser(res.data.loggedIn ? res.data.user : null);
    } catch (err) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await axios.get('http://localhost:5001/api/auth/logout', {
        withCredentials: true,
      });
    } catch (err) {
      console.error('Logout failed', err);
    }
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, logout, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};