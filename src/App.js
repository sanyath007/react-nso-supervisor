import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Daily from './components/Daily';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <div className="container content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<Daily />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
