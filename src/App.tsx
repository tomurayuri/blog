import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { CreatePost } from './components/CreatePost';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logput" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;