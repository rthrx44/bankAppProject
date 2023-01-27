import './App.css';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <LoginPage/>
      <SignupPage/>
      <Dashboard/>
    </div>
  );
}

export default App;
