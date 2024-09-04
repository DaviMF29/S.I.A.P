import { FormEvent, useState } from 'react';
import './Login.css';
import Register from './Register';
import { api } from '../../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async(e :FormEvent)=>{
    e.preventDefault();

    try {
      const response = await api.post('/#',{
        email,password
      });

      localStorage.setItem('token', response.data.token);
      window.location.href = '/home';
    } catch (error) {
        setError('Email ou senha incorretos. Tente novamente!')
    }
  }

  return (
      <div className='login'>
        <div className="left">
            <div className="logo">
              <img src=".\src\assets/logo.svg" alt="logo" />
              <h3>Sistema Integrado de Atléticas da Paraíba</h3>
            </div>
        </div>

          <div className="right">
            <div className="container">
                  <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Digite seu email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="Digite sua senha" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit">Entrar</button>
                  </form>

                  {error && <p className="error">{error}</p>}

                  <a>Esqueceu sua senha?</a>
                  <Register/>
            </div>
          </div>
      </div>
  )
}

export default Login
