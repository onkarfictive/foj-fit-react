import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { mainGreen } from "../../../../utils/constant-variable.js";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend
);

const RevenueLineChart = ({ height = "319px" }) => {
  const chartRef = useRef(null);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentMonth = new Date().getMonth();
  const displayedMonths = months.slice(0, currentMonth - 1);
  const revenueData = [500, 700, 500, 700, 500, 700, 500, 700, 500, 700];
  const slicedChartData = revenueData?.slice(0, currentMonth);

  const createGradient = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(112, 241, 147, 0.15)");
    gradient.addColorStop(1, "rgba(112, 241, 147, 0)");
    return gradient;
  };

  const data = {
    labels: displayedMonths,
    datasets: [
      {
        label: "Data Growth",
        data: slicedChartData || [],
        borderColor: mainGreen,
        pointBackgroundColor: mainGreen,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx } = chart;
          return createGradient(ctx);
        },
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: "bold",
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: "bold",
          },
          callback: function (value) {
            return value >= 1000 ? value / 1000 + "k" : value;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: height}}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default RevenueLineChart;
