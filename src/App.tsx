import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { CreatePost } from './components/CreatePost';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { NavBar } from './components/NavBar';
import { useState } from 'react';
function App() {
  const [ isAuth, setIsAuth ] = useState(false);
  console.log("isAuth", isAuth);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
        <Route path="/logput" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
