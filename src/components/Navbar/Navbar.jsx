import cls from './Navbar.module.css';

const Navbar = () => {
  return (<nav className={cls.nav}>
    <div className={cls.item}>
      <a href="/profile">Profile</a>
    </div>
    <div className={cls.item}>
      <a href="/dialogs">Messages</a>
    </div>
    <div className={cls.item}>
      <a href="/news">News</a>
    </div>
    <div className={cls.item}>
      <a href="/music">Music</a>
    </div>
    <div className={cls.item}>
      <a href="/settings">Settings</a>
    </div>
  </nav>
  )
}

export default Navbar