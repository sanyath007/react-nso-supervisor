import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Daily from './components/Daily';
import FormDaily from './components/Daily/FormDaily';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <div className="container">
          <div class="content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/daily' element={<Daily />} />
              <Route path='/add' element={<FormDaily />} />
            </Routes>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
