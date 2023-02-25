import { NavLink } from 'react-router-dom';
import cls from './Navbar.module.css';

const Navbar = () => {
  return (<nav className={cls.nav}>
    <div className={cls.item}>
      <NavLink to="/profile" className={navData => navData.isActive? cls.active: cls.item}>Profile</NavLink>
    </div>
    <div className={cls.item}>
      <NavLink to="/dialogs" className={navData => navData.isActive? cls.active: cls.item}>Messages</NavLink>
    </div>
    <div className={cls.item}>
      <NavLink to="/news" className={navData => navData.isActive? cls.active: cls.item}>News</NavLink>
    </div>
    <div className={cls.item}>
      <NavLink to="/music" className={navData => navData.isActive? cls.active: cls.item}>Music</NavLink>
    </div>
    <div className={cls.item}>
      <NavLink to="/settings" className={navData => navData.isActive? cls.active: cls.item}>Settings</NavLink>
    </div>
  </nav>
  )
}

export default Navbar