import cls from "./Header.module.scss"
import { useRef, useState, useEffect } from "react"
import { accountMenuItems } from '../../data.js'

const Account = () => {
    const ref = useRef(null);
    const [dropOpen, setDropOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setDropOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    return (
        <div ref={ref} className={cls.account}>
            <div
                className={cls.account_btn}
                onClick={() => setDropOpen(!dropOpen)}
            >
                <img
                    width={36}
                    height={36}
                    alt="user avatar"
                    className={cls.user_avatar}
                    src="/src/assets/user.png"
                />
            </div>
            <div ref={ref} className={`${cls.account_menus} ${dropOpen ? cls.drop_open : ''}`}>
                {accountMenuItems.map(item => (
                    <a
                        key={item.label}
                        href={item.href}
                        className={cls.account_menu_item}
                    >
                        <i className={item.icon}></i>
                        <p>{item.label}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Account