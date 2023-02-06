import React, { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Modal from './components/Modals/Modal';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {

  return (
    <div className="App">
      <Header/>
      <SignupPage/>
      <Dashboard/>
    </div>
  );
}

export default App;
