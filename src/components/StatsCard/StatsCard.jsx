import { statsItems } from '../../data.js'
import cls from './StatsCard.module.scss'
import StatsCardItem from "./StatsCardItem.jsx";

const StatsCard = () => {
    return (
        <section className={`${cls.stats} container`}>
            {statsItems.length > 0 && statsItems.map(item => (
                <StatsCardItem key={item.id} item={item} />
            ))}
        </section>
    )
}

export default StatsCard;