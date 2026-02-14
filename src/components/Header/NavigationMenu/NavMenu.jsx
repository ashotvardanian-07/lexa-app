import cls from './navMenu.module.scss'
import NavMenuItem from './NavMenuItem.jsx'
import { navMenuItems } from '../../../data.js'

const NavMenu = () => {

    return (
        <div className={`${cls.navbar} container`}>
            <div className={cls.navbar_container}>
                <div className={`${cls.menus}`}>
                    {navMenuItems?.length > 0 && navMenuItems.map((item, i) => (
                        <NavMenuItem
                            key={i}
                            menu={item}
                            level={0}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NavMenu