import { FormEvent, useState } from 'react'
import './Register.css'
import { api } from '../../services/api';
import axios from 'axios';

const Register = () => {

  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  //Dados do usuário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [campus, setCampus] = useState('');


  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSubmit = async (e: FormEvent) =>{
    e.preventDefault();
    setError('');
    setSuccess('');

    if(password !== confirmPassword){
      setError('As senhas não correspondem. Verifique e tente novamente!');
      return;
    }

    try {
      const response = await api.post('/#',{
        name, email, enrollment, campus, password,
      });

      setSuccess('Registrado com sucesso!')

      //Limpar os campos
      setName(''); setEmail(''); setEnrollment(''); setCampus(''); setPassword(''); setConfirmPassword('');
    } catch (error) {
      if(axios.isAxiosError(error)){
        setError(error.response?.data?.message || 'Erro ao tentar registrar. (AxiosError)')
      }else{
        setError('Ocorreu um erro desconhecido')
      }
    }

  }

  return (
    <div>
      <div className="register">
        <button onClick={handleOpen}>Registre-se</button>
      </div>

      {open && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" id='close' onClick={handleClose}>&times;</span>
            <form className="form-register" onSubmit={handleSubmit}>
              <div className="header-register">
                <h1>Registrar-se</h1>
                <p>Realize o cadastro no nosso site</p>

              {error && <p className="error">{error}</p>}
              {success && <p className="success">{success}</p>}
              </div>
              <input type="text" placeholder="Digite seu nome completo" value={name} onChange={(e) => setName(e.target.value)} required/>
              <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value) }required/>
              <div className="form-campus">
                <input type="text" placeholder="Matrícula" value={enrollment} onChange={(e) => setEnrollment(e.target.value)} required/>
                <select name="campus" id="campus" value={campus} onChange={(e) => setCampus(e.target.value)} required>
                  <option value="campus">Campus</option>
                  <option value="Uepv">UEPB</option>
                  <option value="ufcg">UFCG</option>
                </select>
              </div>
              <input type="password" placeholder="Digite a sua senha" value={password} onChange={(e)=> setPassword(e.target.value)}/>
              <input type="password" placeholder="Confirme a sua senha" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
              <button type='submit' className="buttonRegister">Registre-se</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Register