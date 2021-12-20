import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exactpath="/" element={<Main />}>

      </Route>
    </Routes>
  );
}

export default App;
