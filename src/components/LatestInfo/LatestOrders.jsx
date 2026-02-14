import cls from './latestInfo.module.scss'
import { latestOrders } from '../../data.js'

const LatestOrders = () => {

    const statuses = {
        "delivered": {
            color: '#59db83',
            label: 'Delivered'
        },
        "shipped": {
            color: '#f5b225',
            label: 'Shipped'
        },
        "canceled": {
            color: '#ef6668',
            label: 'Canceled'
        }
    }
    return (
        <div className={`${cls.latest_orders} ${cls.block}`}>
            <h2 className={cls.title}>Latest Transactions</h2>
            <table className={cls.orders_table}>
                <tbody>
                {latestOrders.map(item => (
                    <tr key={item.id} className={cls.orders}>
                        <td className={cls.order_id}>
                            <p>{item.orderId}</p>
                        </td>
                        <td className={cls.user}>
                            <div className={cls.user_block}>
                                <img
                                    width={32}
                                    height={32}
                                    src={item.avatar}
                                    alt="usder avatar"
                                />
                                {item.name}
                            </div>
                        </td>
                        <td className={cls.order_status}>
                            <div
                                className={cls.status_block}
                                style={{background: statuses[item.status].color}}
                            >
                                {statuses[item.status].label}
                            </div>
                        </td>
                        <td className={cls.amount}>
                            <div>
                                <p>{item.amount}</p>
                            </div>
                        </td>
                        <td className={cls.date}>
                            <div>
                                <p>{item.date}</p>
                            </div>
                        </td>
                        <td className={cls.edit_btn}>
                            <button>Edit</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default LatestOrders