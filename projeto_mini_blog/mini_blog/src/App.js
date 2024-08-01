import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { Box } from '@mui/material'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { AuthContextProvider } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthentication } from './hooks/useAuthentication';
import Dasboard from './pages/Dashboard/Dasboard';
import CreatePost from './pages/CreatePost/CreatePost';

function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>...Carregando</p>
  }

  return (
    <Box className="App">
      <AuthContextProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <Box className='container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={!user ? < Login /> : <Navigate to="/" />} />
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
              <Route path="/dashboard" element={user ? <Dasboard /> : < Login />} />
              <Route path="/posts/create" element={user ? <CreatePost /> : < Login />} />
            </Routes>
          </Box>
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </Box>
  );
}

export default App;
