import cls from './userInfo.module.scss'
import { userActivities } from '../../data.js';

const UserActivity = () => {
    return (
        <div className={`${cls.block} ${cls.activity_block}`}>
            <h4 className={cls.title}>Recent Activity Feed</h4>
            <ol className={cls.activite_feed}>
                {userActivities.map(item => (
                    <li key={item.id} className={cls.feed_item}>
                        <div className={cls.feed_body}>
                            <span className={cls.date}>{item.date}</span>
                            <span className={cls.content}>{item.content}</span>
                        </div>
                    </li>
                ))}
            </ol>
            <a href="" className={cls.load_more}>Load More</a>
        </div>
    )
}

export default UserActivity