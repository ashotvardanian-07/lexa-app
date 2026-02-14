import cls from './navMenu.module.scss'
import { useState, useContext } from 'react'
import { MobileContext } from '../../../context/MobileContext.js'

const NavMenuItem = ({ menu, level }) => {
    const isMobile = useContext(MobileContext)
    const hasChildren = menu.children.length > 0
    const [open, setOpen] = useState(false)
    const columns = menu.children.length < 10 ? 1 : menu.children.length > 15 ? 3 : 2;

    const handleMenuClick = (e) => {
        if (isMobile || level === 0) {
            e.preventDefault();
            e.stopPropagation();
            setOpen(prev => !prev);
        }
    }

    return (
        <div className={`${cls.menu_item} ${open ? cls.sub_open : ''}`}>
            <a
                href={menu.href || ""}
                onClick={handleMenuClick}
                className={cls.menu_item_link}
                style={open ? {color: '#796fbe'} : {}}
            >
                {menu.icon && <i className={menu.icon}></i>}
                {menu.label}
                {level > 0 && hasChildren && <i className="fas fa-angle-right fa-xs"></i>}
            </a>
            {hasChildren && (
                <div
                    className={cls.submenus}
                    style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}
                >
                    {menu.children.map((item, i) => (
                        <NavMenuItem key={i} menu={item} level={level + 1}/>
                    ))}
                </div>
            )}
        </div>
    )
}

export default NavMenuItem