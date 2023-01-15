import React, {useEffect, useState} from 'react';
import {
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const setAuth = (valueToSet)=>{
    setIsAuthenticated(valueToSet);
  }

  const isAuth = async()=>{
    try {
       
      const response = await fetch('http://localhost:5000/auth/verify', {
        method: 'GET',
        headers: {
          token: localStorage.token
        }
      });

      const parsedResponse = await response.json();

      parsedResponse === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
        

    } catch (error) {
        console.error(error.message);
    }
  }

  // on every render
  useEffect(()=>{
   isAuth(); 
  })

  return (
    <div>
        <Routes>
            <Route exact path="/" element={!isAuthenticated ? <LoginPage setAuth={setAuth} /> : <Navigate to="/dashboard" /> } />
            <Route exact path="/register" element={!isAuthenticated ? <RegisterPage setAuth={setAuth} /> : <Navigate to="/dashboard" /> } />
            <Route exact path="/dashboard/*" element={isAuthenticated ? <DashboardPage setAuth={setAuth} /> : <Navigate to="/" /> } />
         </Routes>
    </div>
  )
}

