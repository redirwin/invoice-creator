let servicesRequested = [];
const taskList = document.querySelector("#task-list");
const addCarBtn = document.querySelector("#add-car-btn");
const addLawnBtn = document.querySelector("#add-lawn-btn");
const addWeedsBtn = document.querySelector("#add-weeds-btn");
const totalAmountEl = document.querySelector("#total-amount-el");
const sendInvoiceBtn = document.querySelector("#send-invoice-btn");
let totalCost = 0;
let carWashAlreadyAdded = false;
let mowLawnAlreadyAdded = false;
let pullWeedsAlreadyAdded = false;
let removeItem = "";

addCarBtn.addEventListener("click", function () {
  if (!carWashAlreadyAdded) {
    servicesRequested.push({ name: "Wash Car", cost: 10, id: "carWashEl" });
    totalCost += 10;
    carWashAlreadyAdded = true;
    carWashEl = document.querySelector("#carWashEl");
  }
  renderTaskList();
});

addLawnBtn.addEventListener("click", function () {
  if (!mowLawnAlreadyAdded) {
    servicesRequested.push({ name: "Mow Lawn", cost: 20, id: "mowLawnEl" });
    totalCost += 20;
    mowLawnAlreadyAdded = true;
  }
  renderTaskList();
});

addWeedsBtn.addEventListener("click", function () {
  if (!pullWeedsAlreadyAdded) {
    servicesRequested.push({ name: "Pull Weeds", cost: 30, id: "pullWeedsEl" });
    totalCost += 30;
    pullWeedsAlreadyAdded = true;
  }
  renderTaskList();
});

function renderTaskList() {
  taskList.innerHTML = "";
  for (let i = 0; i < servicesRequested.length; i++) {
    taskList.innerHTML += `
        <li class="task">
            <span class="task-name"
            >${servicesRequested[i].name}
            <span class="remove-task" id="${servicesRequested[i].id}">Remove</span>
            </span>
            <span class="task-cost">$${servicesRequested[i].cost}</span>
        </li>
        `;
  }
  totalAmountEl.textContent = "$" + totalCost;
  createRemoveFeature();
}

sendInvoiceBtn.addEventListener("click", function () {
  servicesRequested = [];
  taskList.innerHTML = "";
  totalCost = 0;
  totalAmountEl.innerHTML = "$0";
  carWashAlreadyAdded = false;
  mowLawnAlreadyAdded = false;
  pullWeedsAlreadyAdded = false;
});

// This function adds event listeners for remove element when new items are added to the list.
function createRemoveFeature() {
  for (let i = 0; i < servicesRequested.length; i++) {
    if (servicesRequested[i].name === "Wash Car") {
      removeItem = document.querySelector("#carWashEl");
      removeItem.addEventListener("click", function () {
        totalCost -= 10;
        carWashAlreadyAdded = false;
        removeTask("Wash Car");
      });
    } else if (servicesRequested[i].name === "Mow Lawn") {
      removeItem = document.querySelector("#mowLawnEl");
      removeItem.addEventListener("click", function () {
        totalCost -= 20;
        mowLawnAlreadyAdded = false;
        removeTask("Mow Lawn");
      });
    } else if (servicesRequested[i].name === "Pull Weeds") {
      removeItem = document.querySelector("#pullWeedsEl");
      removeItem.addEventListener("click", function () {
        totalCost -= 30;
        pullWeedsAlreadyAdded = false;
        removeTask("Pull Weeds");
      });
    }
  }
}

function removeTask(taskName) {
  for (let i = 0; i < servicesRequested.length; i++) {
    if (servicesRequested[i].name === taskName) {
      servicesRequested.splice(i, 1);
    }
  }
  renderTaskList();
}
