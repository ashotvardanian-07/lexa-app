import cls from './topBar.module.scss'
import Locales from './Locales.jsx'
import Search from './Search.jsx'
import Account from './Account.jsx'
import Notifications from './Notifications.jsx'
import logo from '../../../assets/logo.png'
import mobileLogo from '../../../assets/mobile_logo.png'

const TopBar = ({ setMobileMenuOpen }) => {
    const handleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            }
        }
    }

    return (
        <div className={cls.topbar}>
            <div className={`${cls.row} container`}>
                <span className={cls.float_left}>
                    <img className={cls.desktop_logo} src={logo} alt="logo" height={19}/>
                    <img className={cls.mobile_logo} src={mobileLogo} alt="logo" height={22}/>
                    <button
                        className={cls.mobile_menu_toggle}
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                    >
                        <i className="fa fa-bars"></i>
                    </button>
                </span>
                <div className={cls.toolbar}>
                    <Search/>
                    <Locales/>
                    <button
                        onClick={handleFullScreen}
                        className={cls.fullscreen_btn}
                    >
                        <i className="fas fa-expand"></i>
                    </button>
                    <Notifications />
                    <Account />
                    <button className={cls.settings_btn}>
                        <i className="fa fa-cog fa-spin"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopBar