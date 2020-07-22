// Large Traffic Overview Graph

const largeTrafficGraph = document
  .querySelector("#largeTrafficGraph");

let largeGraph = new Chart(largeTrafficGraph, {
  type: "line",
  data: {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [
      {
        data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
        backgroundColor: "rgba(116, 119, 191, .3)",
        borderWidth: 1
      },
    ],
  },
  options: {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }],
    },
    legend: {
        display: false
    },
    layout: {
        padding: {
            top: 0,
            right: 15,
            bottom: 0,
            left: 15
        }
    }
  }
});

// Daily Traffic Graph

const dailyTrafficGraph = document
  .querySelector("#dailyTrafficGraph");

const dailyGraph = new Chart(dailyTrafficGraph, {
    type: "bar",
    data: {
        labels: ["S", "M", "T", "W", "Th", "F", "S"],
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: "#7477bf",
            radius: 6
        }]
    },
    options:  {
        animation: {
            duration: 0
        },
        legend:  {
            display: false
        },
        layout:  {
            padding: {
                top: 0,
                right: 15,
                bottom: 0,
                left: 15
            }
        }
    }
});

// Mobile User Chart

const mobileChart = document.querySelector("#mobileChart");

const mobilePie = new Chart(mobileChart, {
    type: "doughnut",
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            data: [15, 15, 70],
            backgroundColor: [
                "#74b1bf",
                "#81c98f",
                "#7377bf"
            ]
        }]
    },
    options: {
        legend: {
            position: "right",
            labels: {
                boxWidth: 15
            }
        },
        layout: {
            padding: {
                top: 0,
                right: 15,
                bottom: 0,
                left: 15
            }
        }
    }
});
