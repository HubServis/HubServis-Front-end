//Injected Chartjs
import Chart from "chart.js/auto";

import { Bar } from "react-chartjs-2";

const labels = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Receitas",
      backgroundColor: "#00E125",
      data: ["-10", 20, 5, 2, 20, 30, 45],
    },
    {
      label: "Despesas",
      backgroundColor: "#20712D",
      data: ["-80", 10, 5, 2, 20, 30, 45],
    },
  ],
};

export const BarChart = () => {
  return (
    <div>
      <Bar
        data={data}
        options={{
          type: 'bar',
          data: data,
          options: {
            plugins: {
              title: {
                display: true,
                text: 'Chart.js Bar Chart - Stacked'
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true
              }
            }
          }
        }}
      />
    </div>
  );
};
