import { useState } from 'react'
import './Register.css'

const Register = () => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  return (
    <div>
      <div className="register">
        <button onClick={handleOpen}>Registre-se</button>
      </div>

      {open && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" id='close' onClick={handleClose}>&times;</span>
            <form className="form-register">
              <div className="header-register">
                <h1>Registrar-se</h1>
                <p>Realize o cadastro no nosso site</p>
              </div>
              <input type="text" placeholder="Digite seu nome completo" />
              <input type="email" placeholder="Digite seu email" />
              <div className="form-campus">
                <input type="text" placeholder="Matrícula" />
                <select name="campus" id="campus">
                  <option value="campus">Campus</option>
                  <option value="Uepv">UEPB</option>
                  <option value="ufcg">UFCG</option>
                </select>
              </div>
              <input type="password" placeholder="Digite a sua senha" />
              <input type="password" placeholder="Confirme a sua senha" />
              <button className="buttonRegister">Registre-se</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Register