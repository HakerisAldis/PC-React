import './App.css';
import Navbar from './components/layout/NavBar';
import Router from './routes/router';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/config';

initializeApp(firebaseConfig);

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
