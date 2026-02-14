import cls from './mobileMenu.module.scss'
import NavMenu from '../NavigationMenu/NavMenu.jsx'

const MobileMenu = ({ mobileMenuOpen }) => {
    return (
        <div className={`${cls.mobile_menu} ${mobileMenuOpen ? cls.mobile_menu_open : ''}`}>
            <NavMenu />
        </div>
    );
}

export default MobileMenu