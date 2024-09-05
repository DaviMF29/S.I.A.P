//CSS
import "./Loading.css"

//Imports
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Loading = () => {

  const navigate = useNavigate()
  const [fade, setFade] = useState(false)

  useEffect(()=>{

    const startFade = setTimeout(()=>{
      setFade(true)
    },1000);

    const redirect = 
    setTimeout(()=>{
      navigate('/login')
    },2000)

    return () => {
      clearTimeout(redirect)
      clearTimeout(startFade)      
    }

  }, [navigate])

  return (
      <div className={`loading ${fade? "fade" : " " }`}>
          <div className="logo-load">
            <img src=".\src\assets/logo.svg" alt="logo"/>
            <h1>Sistema Integrado de Atléticas da Paraíba</h1>
          </div>
      </div>
  )
}

export default Loading