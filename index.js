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

renderTaskList()

function renderTaskList() {
  for (let i = 0; i < servicesRequested.length; i++) {
    taskList.innerHTML += `<li class="task">
        <span class="task-name"
          >${servicesRequested[i].name}
          <span class="remove-task">Remove</span>
        </span>
        <span class="task-cost">$${servicesRequested[i].cost}</span>
      </li>`;
  }
}
