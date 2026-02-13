import cls from './navMenu.module.scss'
import { navMenuItems } from '../../../data.js'
import NavMenuItem from "./NavMenuItem.jsx";

const NavMenu = () => {


    return (
        <div className={`${cls.navbar} container`}>
            <div className={cls.navbar_container}>
                <div className={`${cls.menus}`}>
                    {!!navMenuItems.length && navMenuItems.map((item, i) => (
                        <NavMenuItem key={i} menu={item} level={0} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NavMenu