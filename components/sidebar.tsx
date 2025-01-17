import { Menu } from 'antd';
import './App.css';
import { FaHistory, FaRegBell, FaRegBuilding, FaRegEdit, FaUser } from 'react-icons/fa';
import { AiOutlineApartment } from 'react-icons/ai';
import { Link } from 'react-router-dom';  // Importando Link do react-router-dom

const menuItems = [
  {
    key: '1',
    icon: <FaRegBuilding />,
    route: '/menu1',
  },
  {
    key: '2',
    icon: <FaRegEdit />,
    route: '/menu2',
  },
  {
    key: '3',
    icon: <AiOutlineApartment />,
    route: '/menu3',
  },
  {
    key: '4',
    icon: <FaRegBell />,
    route: '/menu4',
  },
  {
    key: '5',
    icon: <FaHistory />,
    route: '/menu5',
  },
  {
    key: '6',
    icon: <FaUser />,
    route: '/menu6',
  },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Menu mode="vertical">
        {menuItems.map(({ key, icon, route }) => (
          <Menu.Item key={key} icon={icon}>
            <Link to={route}>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </aside>
  );
};

export default Sidebar;
