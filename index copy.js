let servicesRequested = [];
const taskList = document.querySelector("#task-list");
const addCarBtn = document.querySelector("#add-car-btn");
const addLawnBtn = document.querySelector("#add-lawn-btn");
const addWeedsBtn = document.querySelector("#add-weeds-btn");
const totalAmountEl = document.querySelector("#total-amount-el");
const sendInvoiceBtn = document.querySelector("#send-invoice-btn");
let totalCost = 0;
let carWashSelected = false;
let mowLawnSelected = false;
let pullWeedsSelected = false;

renderTaskList();

addCarBtn.addEventListener("click", function () {
  if (carWashSelected) {
    return;
  }
  carWashSelected = true;
  servicesRequested.push({ name: "Wash Car", cost: 10, id: "washCar" });
  totalCost += 10;
  renderTaskList();
});

addLawnBtn.addEventListener("click", function () {
  servicesRequested.push({ name: "Mow Lawn", cost: 20, id: "mowLawn" });
  if (mowLawnSelected) {
    return;
  }
  mowLawnSelected = true;
  totalCost += 20;
  renderTaskList();
});

addWeedsBtn.addEventListener("click", function () {
  servicesRequested.push({ name: "Pull Weeds", cost: 30, id: "pullWeeds" });
  if (pullWeedsSelected) {
    return;
  }
  pullWeedsSelected = true;
  totalCost += 30;
  renderTaskList();
});

function renderTaskList() {
  taskList.innerHTML = "";
  for (let i = 0; i < servicesRequested.length; i++) {
    // totalCost += servicesRequested[i].cost;

    taskList.innerHTML += `
        <li class="task">
            <span class="task-name"
            >${servicesRequested[i].name}
            <span class="remove-task" id="${servicesRequested[i].id}El">Remove</span>
            </span>
            <span class="task-cost">$${servicesRequested[i].cost}</span>
        </li>
        `;
  }

  console.log(taskList.innerHTML);

  totalAmountEl.innerHTML = `$${totalCost}`;
}

sendInvoiceBtn.addEventListener("click", function () {
  servicesRequested = [];
  taskList.innerHTML = "";
  totalCost = 0;
  totalAmountEl.innerHTML = "$0";
  carWashSelected = false;
  mowLawnSelected = false;
  pullWeedsSelected = false;
});

function removeService() {
  console.log("In removeService function.");

  //   console.log(servicesRequested);
  //   for (let i = 0; i < servicesRequested.length; i++) {
  //     if (servicesRequested[i].name === service) {
  //       servicesRequested.splice(i, 1);
  //     }
  //   }
  //   console.log(servicesRequested);
}
