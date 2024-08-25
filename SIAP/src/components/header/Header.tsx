import { FaBars } from "react-icons/fa6";
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className='left-header'>
            <div className="menu">
              <FaBars />
            </div>
            <div className="logo-header">
                <img src=".\src\assets/logo.svg" alt="logo"/>
            </div>
        </div>
        <div className="right-header">
            <div className="search">

            </div>
            <div className="profile">
                
            </div>
        </div>
    </header>
  )
}

export default Header