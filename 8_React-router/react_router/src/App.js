import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Product from './pages/Product';
import Info from './pages/Info';
import PageNotFound from './pages/PageNotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';
function App() {

  return (
    <div className="App">
      <h1>react router</h1>
      <BrowserRouter>
        <NavBar />
        <SearchForm/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/company' element={<Navigate to="/about" />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/product/:id/info' element={<Info />} />
          <Route path='/product/:id/info' element={<Info />} />
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;