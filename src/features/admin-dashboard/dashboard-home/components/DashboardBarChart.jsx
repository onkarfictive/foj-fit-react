import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function VerticalBarDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);

    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          backgroundColor: "#70f193",
          borderColor: "#70f193",
          data: [65, 59, 80, 81, 56, 55, 40, 65, 85, 35, 70, 45],
          barThickness: 28, // Set bar width here (in pixels)
          borderRadius: 5, // Set the radius to round the top corners
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          grid: {
            color: surfaceBorder,
            drawBorder: false,
            display: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Chart type="bar" data={chartData} options={chartOptions} className="" style={{ width: "100%", height: "400px" }} />
    </div>
  );
}
