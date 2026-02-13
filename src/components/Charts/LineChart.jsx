import Chart from "react-apexcharts";
import cls from "./charts.module.scss";

const PyramidChart = () => {
    const series = [
        {
            name: "Series A",
            data: [0, 150, 60, 180, 90, 75, 30],
        },
        {
            name: "Series B",
            data: [0, 45, 150, 36, 60, 240, 30],
        },
        {
            name: "Series C",
            data: [0, 15, 195, 21, 360, 120, 30],
        },
    ];

    const options = {
        chart: {
            type: "area",
            height: 300,
            stacked: false,
            toolbar: { show: false },
        },
        stroke: {
            show: false
        },
        fill: {
            type: "fill",
            opacity: 0.3,
            colors: ["#796fbe", "#bdbdbd", "#29bbe3"],
        },
        colors: ["#796fbe", "#fff", "#29bbe3"],
        markers: {
            size: 0,
            hover: {
                size: 5,
            },
        },
        xaxis: {
            categories: [2011, 2012, 2013, 2014, 2015, 2016, 2017],
        },
        yaxis: {
            min: 0,
            max: 360,
        },
        dataLabels: { enabled: false },
        legend: { show: false }
    };

    return (
        <div className={cls.each_chart}>
            <h2 className={cls.title}>Email Sent</h2>
            <div className={cls.info}>
                <div>
                    <h5>$89425</h5>
                    <span>Marketplace</span>
                </div>
                <div>
                    <h5>$56210</h5>
                    <span>Total Income</span>
                </div>
                <div>
                    <h5>$8974</h5>
                    <span>Last Month</span>
                </div>
            </div>
            <Chart
                type="area"
                height={300}
                series={series}
                options={options}
            />
        </div>
    )
};

export default PyramidChart;
