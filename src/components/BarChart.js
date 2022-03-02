import React from "react";
import { Bar, defaults } from "react-chartjs-2";

// defaults.global.tooltips.enabled = false;
defaults.global.legend.position = "bottom";

const BarChart = () => {
  return (
    <div className="p-40">
      <Bar
        data={{
          labels: ["Kovno", "Vilna", "Vitebsk", "Smolensk", "Gjat", "Moscow"],
          datasets: [
            {
              label: "Attack",
              backgroundColor: "#fff0",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 2,
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: [422000, 400000, 175000, 145000, 187100, 100000],
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
