//! Status Chart
const projectStatusCtx = document
  .getElementById("projectStatusChart")
  .getContext("2d");
const projectStatusChart = new Chart(projectStatusCtx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [64, 26, 10],
        backgroundColor: ["#4CAF50", "#2196F3", "#F44336"],
        hoverBackgroundColor: ["#66BB6A", "#42A5F5", "#EF5350"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed !== null) {
              label += context.parsed + "%";
            }
            return label;
          },
        },
      },
    },
    cutout: "80%",
  },
});

//!! Tasks Overview Chart
const tasksOverviewCtx = document
  .getElementById("tasksOverviewChart")
  .getContext("2d");
const data = {
  all: [
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 50, 40, 30, 20, 10, 5, 15,
    25, 35, 45, 55, 65,
  ],
  "1M": [5, 10, 15, 20, 25],
  "6M": [5, 10, 15, 20, 25, 30, 35, 40],
  "1Y": [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
};
const labels = {
  all: [
    "Sprint 1",
    "Sprint 2",
    "Sprint 3",
    "Sprint 4",
    "Sprint 5",
    "Sprint 6",
    "Sprint 7",
    "Sprint 8",
    "Sprint 9",
    "Sprint 10",
    "Sprint 11",
    "Sprint 12",
    "Sprint 13",
    "Sprint 14",
    "Sprint 15",
    "Sprint 16",
    "Sprint 17",
    "Sprint 18",
    "Sprint 19",
    "Sprint 20",
    "Sprint 21",
    "Sprint 22",
    "Sprint 23",
    "Sprint 24",
  ],
  "1M": ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5"],
  "6M": [
    "Sprint 1",
    "Sprint 2",
    "Sprint 3",
    "Sprint 4",
    "Sprint 5",
    "Sprint 6",
    "Sprint 7",
    "Sprint 8",
  ],
  "1Y": [
    "Sprint 1",
    "Sprint 2",
    "Sprint 3",
    "Sprint 4",
    "Sprint 5",
    "Sprint 6",
    "Sprint 7",
    "Sprint 8",
    "Sprint 9",
    "Sprint 10",
    "Sprint 11",
    "Sprint 12",
  ],
};
const tasksOverviewChart = new Chart(tasksOverviewCtx, {
  type: "bar",
  data: {
    labels: labels.all,
    datasets: [
      {
        label: "Tasks",
        data: data.all,
        backgroundColor: "rgba(33, 150, 243, 0.8)",
        borderColor: "rgba(33, 150, 243, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: { beginAtZero: true, grid: { display: false, color: "#444" } },
      y: { beginAtZero: true, grid: { color: "#444" } },
    },
    plugins: { legend: { display: false } },
  },
});

function filterData(filter) {
  tasksOverviewChart.data.labels = labels[filter];
  tasksOverviewChart.data.datasets[0].data = data[filter];
  tasksOverviewChart.update();
}
