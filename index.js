let servicesRequested = [
  {
    name: "Wash Car",
    cost: 10,
  },
  {
    name: "Mow Lawn",
    cost: 20,
  },
  {
    name: "Pull Weeds",
    cost: 30,
  },
];

const taskList = document.querySelector("#task-list");
const addCarBtn = document.querySelector("#add-car-btn");
const addLawnBtn = document.querySelector("#add-lawn-btn");
const addWeedsBtn = document.querySelector("#add-weeds-btn");
const totalAmountEl = document.querySelector("#total-amount-el");
let totalCost = 0;

renderTaskList();

console.log(totalAmountEl.innerHTML);

function renderTaskList() {
  for (let i = 0; i < servicesRequested.length; i++) {
    totalCost += servicesRequested[i].cost;

    taskList.innerHTML += `
        <li class="task">
            <span class="task-name"
            >${servicesRequested[i].name}
            <span class="remove-task">Remove</span>
            </span>
            <span class="task-cost">$${servicesRequested[i].cost}</span>
        </li>
        `;
  }

    totalAmountEl.innerHTML = `$${totalCost}`
}
