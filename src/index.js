document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", function() {
      taskItem.remove();
    });

    taskItem.appendChild(deleteButton);

    const tasksList = document.getElementById("tasks");
    tasksList.appendChild(taskItem);

    taskInput.value = "";
    taskInput.focus();
  });
});
