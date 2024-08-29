import { FaUniversity, FaMedal, FaHome } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import './SideBar.css';
import { useLocation } from "react-router";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {

  const location = useLocation();

  const getButtonClass = (path:string) =>{
    return location.pathname === path ? 'icon-button active' : 'icon-button';
  }

  return (
    <div className={`sidebar ${isOpen ? 'active' : 'closed'}`}>
      <div className="icon-buttons-top">
        <button className={getButtonClass('/home')}>
        {isOpen ? <><FaHome /><p>Início</p></> :
          <FaHome />}
        </button>
        <button className={getButtonClass('/campus')}>
        {isOpen ? <><FaUniversity /><p>Universidade</p></> :
          <FaUniversity />}
        </button>
        <button className={getButtonClass('/sports')}>
        {isOpen ? <><FaMedal /><p>Esportes</p></> :
          <FaMedal />}
        </button>
      </div>
      <div className="icon-buttons-bottom">
        <button className={getButtonClass('/config')}>
        {isOpen ? <><BsGearFill /><p>Configurações</p></> :
          <BsGearFill />}
        </button>
        <button className={getButtonClass('/logout')}>
        {isOpen ? <><FiLogOut /><p>Sair</p></> :
          <FiLogOut />}
        </button>
      </div>
    </div>
  )
}

export default Sidebar;
