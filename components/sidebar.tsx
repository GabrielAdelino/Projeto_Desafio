import { Menu } from 'antd';
import './App.css';
import { FaHistory, FaRegBell, FaRegBuilding, FaRegEdit, FaUser } from 'react-icons/fa';
import { AiOutlineApartment } from 'react-icons/ai';
import { Link } from 'react-router-dom';  // Importando Link do react-router-dom

// Criar os itens do menu
const menuItems = [
  {
    key: '1',
    icon: <FaRegBuilding />,
    label: <Link to="/menu1"></Link>, // Usando 'label' em vez de 'children'
  },
  {
    key: '2',
    icon: <FaRegEdit />,
    label: <Link to="/menu2"></Link>,
  },
  {
    key: '3',
    icon: <AiOutlineApartment />,
    label: <Link to="/menu3"></Link>,
  },
  {
    key: '4',
    icon: <FaRegBell />,
    label: <Link to="/menu4"></Link>,
  },
  {
    key: '5',
    icon: <FaHistory />,
    label: <Link to="/menu5"></Link>,
  },
  {
    key: '6',
    icon: <FaUser />,
    label: <Link to="/menu6"></Link>,
  },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Menu mode="vertical" items={menuItems} /> {/*Redirecionamento via items e Link*/}
    </aside>
  );
};

export default Sidebar;