import './login.css'
const Login = () => {
  return (
      <div className='login'>
        <div className="logo">
          <img src="#" alt="logo" />
        </div>
        <div className="container">
              <form>
                <input type="text" placeholder="Digite seu email" />
                <input type="password" placeholder="Digite sua senha"/>
                <button className='Entrar'>Entrar</button>
              </form>
        
              <a>Esqueceu sua senha?</a>
              <div className='register'><button>Registre-se</button></div>
        </div>
      </div>
  )
}

export default Login
