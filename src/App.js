import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className="App">
      <Header handlePageChange={handlePageChange}/>
      {currentPage === 'home' && <Home handlePageChange={handlePageChange}/>}
      {currentPage === 'login' && <LoginPage handlePageChange={handlePageChange}/>}
      {currentPage === 'signup' && <SignupPage handlePageChange={handlePageChange}/>}
      {currentPage === 'dashb' && <Dashboard handlePageChange={handlePageChange}/>}
    </div>
  );
}

export default App;
