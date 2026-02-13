import EarningsDonutChart from './EarningsDonutChart.jsx'
import cls from './charts.module.scss'
import LineChart from "./LineChart.jsx";
import BarChart from "./BarChart.jsx";

const Charts = () => {
    return (
        <section className={`${cls.charts} container`}>
            <EarningsDonutChart />
            <LineChart />
            <BarChart />
        </section>
    )
}

export default Charts