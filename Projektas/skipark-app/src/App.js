import './App.css';
import Navbar from './components/layout/NavBar';
import Router from './routes/router';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/config';
import { AuthProvider } from './services/auth';

initializeApp(firebaseConfig);

function App () {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
      </Router>
    </AuthProvider>
  );
}

export default App;
