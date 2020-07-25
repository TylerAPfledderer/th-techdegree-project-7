// --------------------- //
// Notification Dropdown //
// --------------------- //

// Grab the notification bell container
const bell = document.querySelector("#js-notification-bell");
// Grab the notification dropdown
const dropdown = document.querySelector("#js-notification-dropdown");

// Trigger the dropdown to show when user clicks the bell
bell.addEventListener("click", () => {
  let classList = dropdown.classList;
  let hiddenClass = "current-notifications--hidden";

  if (classList.contains(hiddenClass)) {
    classList.remove(hiddenClass);
  } else {
    classList.add(hiddenClass);
  }
});


// ------------ //
// Alert Banner //
// ------------ //

// Grab it's container
const alertBanner = document.querySelector("#alert");

// Create the HTML inside the banner

alertBanner.innerHTML = `
    <div class="alert-bar">
        <p class="alert-bar__text">
            <strong>Alert:</strong>
            You have <strong>6</strong> overdue tasks to complete!
        </p>
        <span class="alert-bar__close">
            &cross;
        </span>
    </div>
`;

// Grab the "X" in the alert banner
const alertClose = document.querySelector(".alert-bar__close");

// Run an event when you click the "X"
alertBanner.addEventListener("click", (event) => {
  // Set the clicked area
  const element = event.target;

  // If the "X" is clicked, hide the banner.
  if (element === alertClose) {
    alertBanner.style.display = "none";
  }
});

// ------------------- //
// Large Traffic Graph //
// ------------------- //

const largeTrafficGraph = document.querySelector("#js-traffic-chart");

let largeGraph = new Chart(largeTrafficGraph, {
  type: "line",
  data: {
    labels: [
      "16-22",
      "23-29",
      "30-5",
      "6-12",
      "13-19",
      "20-26",
      "27-3",
      "4-10",
      "11-17",
      "18-24",
      "25-31",
    ],
    datasets: [
      {
        data: [
          750,
          1250,
          1000,
          1500,
          2000,
          1500,
          1750,
          1250,
          1750,
          2250,
          1750,
          2250,
        ],
        backgroundColor: "rgba(116, 119, 191, .3)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    aspectRatio: 2.5,
    animation: {
      duration: 0,
    },
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
      display: false,
    },
  },
});

// ------------------- //
// Daily Traffic Graph //
// ------------------- //

const dailyTrafficGraph = document.querySelector("#js-daily-chart");

const dailyGraph = new Chart(dailyTrafficGraph, {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "Th", "F", "S"],
    datasets: [
      {
        label: "# of Hits",
        data: [75, 100, 175, 125, 225, 200, 100],
        backgroundColor: "#7477bf",
        borderWidth: 1,
      },
    ],
  },
  options: {
    animation: {
      duration: 0,
    },
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
      display: false,
    },
  },
});

// ----------------- //
// Mobile User Chart //
// ----------------- //

const mobileChart = document.querySelector("#js-mobile-chart");

const mobilePie = new Chart(mobileChart, {
  type: "doughnut",
  data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [
      {
        label: "# of Users",
        data: [500, 550, 2000],
        backgroundColor: ["#74b1bf", "#81c98f", "#7377bf"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    animation: {
      duration: 0,
    },
    legend: {
      position: "right",
      labels: {
        boxWidth: 20,
        fontStyle: "bold",
        fontSize: 16,
      },
    },
  },
});

// -------------------- //
// Messaging Submission //
// -------------------- //

// Grab the elements in the messaging form.
const user = document.querySelector("#userField");
const message = document.querySelector("#messageField");
const send = document.querySelector("#send");

// Run post when clicking the "Send" button

send.addEventListener("click", () => {
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending.");
  } else if (user.value === "") {
    alert("Please fill out the user field before sending.");
  } else if (message.value === "") {
    alert("Please fill out the message field before sending.");
  } else {
    alert(`Message successfully sent to ${user.value}.`);
  }
});
