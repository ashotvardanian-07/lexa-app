import cls from './topBar.module.scss'
import { notifications } from '../../../data.js'
import { useRef, useState, useEffect } from 'react'

const Notifications = () => {
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
        <div ref={ref} className={cls.notifications}>
            <div
                className={cls.label}
                onClick={() => setDropOpen(prev => !prev)}
            >
                <i className="far fa-bell"></i>
                <span className={cls.indicator}>{notifications.length}</span>
            </div>
            {<div className={`${cls.notifications_dropdown} ${dropOpen ? cls.drop_open : ''}`}>
                <h5 className={cls.heading}>{`Notifications (258)`}</h5>
                <div className={cls.notes}>
                    {notifications.map(notification => (
                        <a key={notification.id} href="" className={cls.notification}>
                            <div
                                className={cls.icon}
                                style={{borderColor: notification.color}}
                            >
                                <i className={notification.icon}></i>
                            </div>
                            <div className={cls.content}>
                                <h6 className={cls.title}>{notification.title}</h6>
                                <p className={cls.desc}>{notification.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
                <div className={cls.view_all}>
                    <a href="">
                        <i className="fas fa-arrow-right"></i>
                        View all
                    </a>
                </div>
            </div>}
        </div>
    )
}

export default Notifications;