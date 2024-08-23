import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {

  const navigate = useNavigate();

  const handleClick = () =>{
    navigate('/register')
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
                  <form>
                    <input type="text" placeholder="Digite seu email" />
                    <input type="password" placeholder="Digite sua senha"/>
                    <button>Entrar</button>
                  </form>
            
                  <a>Esqueceu sua senha?</a>
                  <div className='register'>
                    <button onClick={handleClick}>Registre-se</button>
                  </div>
            </div>
          </div>
      </div>
  )
}

export default Login
