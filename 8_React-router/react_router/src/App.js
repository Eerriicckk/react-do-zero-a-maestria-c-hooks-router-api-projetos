import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <h1>react router</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
