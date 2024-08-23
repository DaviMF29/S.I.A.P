import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./components/auth/Login";
import Register from './pages/auth/register';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App
