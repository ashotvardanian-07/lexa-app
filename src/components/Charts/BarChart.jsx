import Chart from "react-apexcharts";
import cls from "./charts.module.scss";

const BarChart = () => {
    const series = [
        {
            name: "Series A",
            data: [45, 75, 100, 75, 100, 75, 50, 75, 50, 75, 100, 80]
        },
        {
            name: "Series B",
            data: [180, 65, 90, 65, 90, 65, 40, 65, 40, 65, 90, 65]
        }
    ]

    const options = {
        chart: {
            type: "bar",
            height: 300,
            stacked: true,
            toolbar: { show: false },
        },
        stroke: {
            width: 2,
        },
        fill: {
            type: "fill",
            opacity: 1,
        },
        markers: {
            size: 0,
            hover: {
                size: 8,
            },
            colors: ["#f0f1f4", "#29bbe3"],
            strokeWidth: 0,
        },
        colors: ["#29bbe3", "#f0f1f4"],
        xaxis: {
            categories: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
            axisTicks: {
                show: false
            },
            labels: { style: { colors: '#adb5bd' }}
        },
        yaxis: {
            min: 0,
            max: 240,
            tickAmount: 4,
            labels: { style: { colors: '#adb5bd' }}
        },
        dataLabels: { enabled: false },
        legend: { show: false }
    }

    return (
        <div className={cls.each_chart}>
            <h2 className={cls.title}>Monthly Earnings</h2>
            <div className={cls.info}>
                <div>
                    <h5>$ 2548</h5>
                    <span>Marketplace</span>
                </div>
                <div>
                    <h5>$ 6985</h5>
                    <span>Total Income</span>
                </div>
            </div>
            <Chart
                type="bar"
                height={300}
                series={series}
                options={options}
            />
        </div>
    )
}

export default BarChart
