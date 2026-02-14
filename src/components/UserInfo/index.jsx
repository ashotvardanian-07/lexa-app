import cls from './userInfo.module.scss'
import UserInbox from './UserInbox.jsx'
import UserActivity from './UserActivity.jsx'
import WidgetBlock from "./WidgetBlock.jsx";

const UserInfo = () => {
    return (
        <section className={`${cls.user_info} container`}>
            <UserInbox />
            <UserActivity />
            <WidgetBlock />
        </section>
    )
}

export default UserInfo