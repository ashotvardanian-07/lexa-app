import cls from './userInfo.module.scss'
import avatar from '../../assets/inboxUsers/user2.png'
import Chart from 'react-apexcharts';

const WidgetBlock = () => {
    const miniBarSeries = [
        {
            name: "Series A",
            data: [8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12]
        }
    ];

    const miniBarOptions = {
        chart: {
            type: 'bar',
            height: 120,
            toolbar: { show: false },
            sparkline: { enabled: true }
        },
        colors: ['#6e65ab'],
        plotOptions: {
            bar: {
                columnWidth: '75%',
            },
        },
        stroke: {
            show: false,
        },
        tooltip: { enabled: true }
    };

    return (
        <div className={`${cls.block} ${cls.widget_block}`}>
            <div className={cls.first_widget}>
                <div className={cls.message_block}>
                    <div className={cls.message}>
                        <i className="fas fa-quote-left"></i>
                        The European languages are members of the same family.
                        Their separate existence is a myth.
                        For science, music, sport, etc, Europe the same vocabulary.
                        The languages only in their grammar.
                    </div>
                </div>
                <div className={cls.specialist}>
                    <span className={cls.avatar}>
                        <img
                            width={48}
                            height={48}
                            src={avatar}
                            alt="user avatar"
                        />
                    </span>
                    <div className={cls.user_info}>
                        <h6 className={cls.name}>Marie Minnick</h6>
                        <p className={cls.position}>Marketing Manager</p>
                    </div>
                </div>
            </div>
            <div className={`${cls.block} ${cls.second_widget}`}>
                <h4 className={cls.title}>Yearly Sales</h4>
                <div className={cls.sales_block}>
                    <div className={cls.sales_info}>
                        <h3>52,345</h3>
                        <p>The languages only differ grammar</p>
                        <a href="">
                            Learn more
                            <i className="fas fa-angle-double-right"></i>
                        </a>
                    </div>
                    <div className={cls.mini_chart}>
                        <Chart
                            type="bar"
                            height={120}
                            // width={"100%"}
                            series={miniBarSeries}
                            options={miniBarOptions}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WidgetBlock