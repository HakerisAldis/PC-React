import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './pages/First';
import Styles from './pages/Styles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/styles/:name" element={<Styles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
