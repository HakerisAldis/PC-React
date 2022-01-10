import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
