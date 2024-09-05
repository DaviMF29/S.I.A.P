import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/auth/Login';
import Home from './pages/home/Home';
import Loading from './pages/loading/Loading';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Loading/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
