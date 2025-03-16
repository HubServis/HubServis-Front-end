//Injected Chartjs
import Chart from "chart.js/auto";

import { Pie } from "react-chartjs-2";

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Dinheiro",
      backgroundColor: "#97FFA8",
      data: [20, 30, 45],
    },
    {
      label: "Cartão de Credito",
      backgroundColor: "#00E125",
      data: [20, 30, 45],
    },
    {
      label: "Cartão de Debito",
      backgroundColor: "#20712D",
      data: [20, 30, 45],
    },
  ],
};

export const PizzaChart = () => {
  return (
    <div>
      <Pie
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
        }}
      />
    </div>
  );
};
