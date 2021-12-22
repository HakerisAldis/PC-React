import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gear from './pages/Gear';
import Navbar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="gear" element={<Gear />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
