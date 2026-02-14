import cls from './userInfo.module.scss'
import {inboxData} from '../../data.js'

const UserInbox = () => {
    return (
        <div className={cls.block}>
            <h4 className={cls.title}>Inbox</h4>
            <div className={cls.messages}>
                {inboxData.map(item => (
                    <a key={item.id} className={cls.user}>
                        <span className={cls.avatar}>
                            <img
                                width={48}
                                height={48}
                                src={item.avatar}
                                alt="user avatar"
                            />
                        </span>
                        <div className={cls.message_block}>
                            <h6 className={cls.name}>{item.name}</h6>
                            <p className={cls.message}>{item.message}</p>
                        </div>
                        <p className={cls.time}>{item.time}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default UserInbox