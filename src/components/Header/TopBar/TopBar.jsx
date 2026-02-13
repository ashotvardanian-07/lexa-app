import cls from './topBar.module.scss'
import Locales from './Locales.jsx'
import Notifications from './Notifications.jsx'
import Search from './Search.jsx'
import Account from './Account.jsx'

const TopBar = () => {
    const handleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    return (
        <div className={cls.topbar}>
            <div className={`${cls.row} container`}>
                <span className={cls.logo_block}>
                    <img src="/src/assets/logo.png" alt="logo" height={19}/>
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
                    <Notifications/>
                    <Account/>
                    <button className={cls.settings_btn}>
                        <i className="fa fa-cog fa-spin"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopBar