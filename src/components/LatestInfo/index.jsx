import cls from './latestInfo.module.scss'
import LatestTransactions from "./LatestTransactions.jsx";
import LatestOrders from "./LatestOrders.jsx";

const LatestInfo = () => {
    return (
        <section className={`${cls.latest_info} container`}>
            <LatestTransactions />
            <LatestOrders />
        </section>
    )
}

export default LatestInfo;