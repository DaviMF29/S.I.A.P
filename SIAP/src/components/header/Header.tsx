import { FaBars, FaUser } from "react-icons/fa6";
import './Header.css'
import { FaSearch } from "react-icons/fa";

interface HeaderProps{onToggleMenu:() => void}


const Header:React.FC <HeaderProps> = ({onToggleMenu}) => {
  return (
    <header>
        <div className='left-header'>
            <div className="menu" onClick={onToggleMenu}>
              <FaBars />
            </div>
            <div className="logo-header">
                <img src=".\src\assets/logo.svg" alt="logo"/>
            </div>
        </div>
        <div className="right-header">
            <div className="search">
              <FaSearch/>
            </div>
            <div className="profile">
                <FaUser/>
            </div>
        </div>
    </header>
  )
}

export default Header