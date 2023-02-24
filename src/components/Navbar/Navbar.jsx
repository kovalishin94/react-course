import cls from './Navbar.module.css';

const Navbar = () => {
  return (<nav className={cls.nav}>
    <div className={cls.item}>
      <a href="#content">Profile</a>
    </div>
    <div className={cls.item}>
      <a href="#content">Messages</a>
    </div>
    <div className={cls.item}>
      <a href="#content">News</a>
    </div>
    <div className={cls.item}>
      <a href="#content">Music</a>
    </div>
    <div className={cls.item}>
      <a href="#content">Settings</a>
    </div>
  </nav>
  )
}

export default Navbar