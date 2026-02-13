import cls from './StatsCard.module.scss'

const StatsCardItem = ({ item }) => {
    const { title, value, icon, change, changeType, from } = item

    const changeStyles = {
        "up": { background: '#11caf0' },
        "down": { background: '#ef6668' },
        "neutral": { background: '#f5b225' }
    }

    return (
        <div className={cls.stats_card}>
            <div className={cls.content}>
                <h6 className={cls.title}>{title}</h6>
                <h2 className={cls.value}>{value}</h2>
                <div className={cls.change_info}>
                    <span style={changeStyles[changeType]}>{change}</span>
                    <p>{from}</p>
                </div>
            </div>
            <span className={cls.icon}>
                <i className={icon}></i>
            </span>
        </div>
    )
}

export default StatsCardItem