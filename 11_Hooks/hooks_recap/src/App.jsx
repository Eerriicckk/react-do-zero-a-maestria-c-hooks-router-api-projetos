import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Info from './pages/Info';
import Product from './pages/Product';
import Search from './pages/Search';
import NavBar from './components/NavBar';
import ComponenteUseContext from './components/ComponenteUseContext';

function App() {
  return (
    <div className="App">
      <ComponenteUseContext>
        <BrowserRouter>
          <NavBar />
          <div className='container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/info" element={<Info />} />
              <Route path="/product" element={<Product />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ComponenteUseContext>
    </div>
  );
}

export default App;
