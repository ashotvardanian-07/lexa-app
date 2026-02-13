import EarningsDonutChart from './EarningsDonutChart.jsx'
import cls from './charts.module.scss'
import LineChart from "./LineChart.jsx";

const Charts = () => {
    return (
        <div className={`${cls.charts} container`}>
            <EarningsDonutChart />
            <LineChart />
        </div>
    )
}

export default Charts