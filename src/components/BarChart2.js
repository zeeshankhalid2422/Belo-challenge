import React from "react";
import { Bar, defaults } from "react-chartjs-2";

// defaults.global.tooltips.enabled = false;
defaults.global.legend.position = "bottom";

const BarChart = () => {
  return (
    <div className="p-40">
      <Bar
        data={{
          labels: [
            "",
            "",
            "",
            "",
            "",
            "Berezina River",
            "Studienska",
            "Botr",
            "Orscha / Mohilow",
            "",
            "",
            "Wirma",
            "Mojaisk",
            "Moscow",
          ],
          datasets: [
            {
              label: "Retreat",
              backgroundColor: "#58595b",
              borderColor: "#58595b",
              borderWidth: 1,
              hoverBackgroundColor: "#58595b",
              hoverBorderColor: "red",
              data: [
                10000, 4000, 8000, 14000, 12000, 28000, 50000, 20000, 24000,
                37000, 55000, 87000, 96000, 100000,
              ],
            },
            {
              label: "Temperature",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: [-26, -30, -24, -20, -11, -21, -9, 0],
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
                  beginAtZero: false,
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
