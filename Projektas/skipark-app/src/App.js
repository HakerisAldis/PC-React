import './App.css';
import Navbar from './components/layout/NavBar';
import Router from './routes/router';

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
