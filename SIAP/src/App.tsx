import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/auth/Login';
import Campus from './pages/Campus';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/campus' element={<Campus/>}/>
      </Routes>
    </Router>
  )
}

export default App
