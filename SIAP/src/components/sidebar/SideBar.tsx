import { FaUniversity, FaMedal, FaHome } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import './SideBar.css';

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'active' : 'closed'}`}>
      <div className="icon-buttons-top">
        <button className="icon-button">
        {isOpen ? <><FaHome /><p>Início</p></> :
          <FaHome />}
        </button>
        <button className="icon-button">
        {isOpen ? <><FaUniversity /><p>Universidade</p></> :
          <FaUniversity />}
        </button>
        <button className="icon-button">
        {isOpen ? <><FaMedal /><p>Esportes</p></> :
          <FaMedal />}
        </button>
      </div>
      <div className="icon-buttons-bottom">
        <button className="icon-button">
        {isOpen ? <><BsGearFill /><p>Configurações</p></> :
          <BsGearFill />}
        </button>
        <button className="icon-button">
        {isOpen ? <><FiLogOut /><p>Sair</p></> :
          <FiLogOut />}
        </button>
      </div>
    </div>
  )
}

export default SideBar;
