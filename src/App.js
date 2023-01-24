import './App.css';
import { Login, SignUp } from './components/Buttons/Buttons';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;
