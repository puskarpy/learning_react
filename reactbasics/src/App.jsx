import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import UserProvider from './context/UserContext';  // Correct import

function App() {
  return (
    <UserProvider>
      <Header />
      <Login />
    </UserProvider>
  );
}

export default App;
