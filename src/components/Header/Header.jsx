import cls from './Header.module.css';

const Header = () => {
    return(
    <header className={cls.header}>
        <div className={cls.title}>React SocialNetwork</div>
        <div className={cls.react}></div>
    </header>
    )
}

export default Header