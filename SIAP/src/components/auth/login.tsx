import './Login.css'
import Register from './Register'

const Login = () => {

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
                  <Register/>
            </div>
          </div>
      </div>
  )
}

export default Login
