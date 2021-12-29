import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Button from './components/Button/Button';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
