import { useEffect, useRef } from "react";
import c3 from "c3";
import cls from './charts.module.scss'
import "c3/c3.css";

import { earningsDonutChartData } from "../../data.js";

const EarningsDonutChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const columns = earningsDonutChartData.map(item => [item.name, item.value]);
        const colors = {};
        earningsDonutChartData.forEach(item => {
            colors[item.name] = item.fill;
        });

        const chart = c3.generate({
            bindto: chartRef.current,
            data: {
                columns: columns,
                colors: colors,
                type: "donut",
            },
            donut: {
                title: "In-Store Sales 30",
                width: 35,
                label: {
                    format: () => ""
                }
            },
            legend: {
                position: "bottom",
            },
            transition: {
                duration: 300,
            },
        });

        return () => chart.destroy();
    }, []);

    return (
        <div className={cls.each_chart}>
            <h2 className={cls.title}>Monthly Earnings</h2>
            <div className={cls.info}>
                <div>
                    <h5>$ 56241</h5>
                    <span>Marketplace</span>
                </div>
                <div>
                    <h5>$ 23651</h5>
                    <span>Total Income</span>
                </div>
            </div>
            <div className={cls.chart} ref={chartRef}></div>
        </div>
    );
};

export default EarningsDonutChart;
