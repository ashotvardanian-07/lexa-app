import cls from './latestInfo.module.scss'
import { latestTransactions } from '../../data.js'

const LatestTransactions = () => {

    const statuses = {
        "confirm": {
            color: '#59db83',
            label: 'Confirmed'
        },
        "pending": {
            color: '#f5b225',
            label: 'Waiting payment'
        },
        "expired": {
            color: '#ef6668',
            label: 'Payment expired'
        }
    }
    return (
        <div className={`${cls.latest_transactions} ${cls.block}`}>
            <h2 className={cls.title}>Latest Transactions</h2>
            <table className={cls.transactions_table}>
                <tbody>
                    {latestTransactions.map(item => (
                        <tr key={item.id} className={cls.transaction}>
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
                            <td className={cls.payment_status}>
                               <div className={cls.status_block}>
                                   <span style={{background: statuses[item.status].color}} />
                                   {statuses[item.status].label}
                               </div>
                            </td>
                            <td className={cls.amount}>
                                <div>
                                    <p>{item.amount}</p>
                                    Amount
                                </div>
                            </td>
                            <td className={cls.date}>
                                <div>
                                    <p>{item.date}</p>
                                    Date
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

export default LatestTransactions