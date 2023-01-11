  // Get the task input element and the task list element
  const taskInput = document.querySelector("input[type='text']");
  const taskList = document.querySelector("#task-list");

  // Handle the form submission to add a new task
  document.querySelector("form").addEventListener("submit", e => {
      e.preventDefault();
      if (taskInput.value === "") return;

      // Create a new list item with the task text
      const task = document.createElement("li");
      task.innerHTML = taskInput.value;

      // Create the "Complete" button
      const completeButton = document.createElement("button");
      completeButton.innerHTML = "Complete";
      completeButton.addEventListener("click", e => {
          e.preventDefault();
          task.classList.add("completed");
      });

      // Create the "Delete" button
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.addEventListener("click", e => {
          e.preventDefault();
          task.remove();
      });

      // Add the buttons to the task
      task.appendChild(completeButton);
      task.appendChild(deleteButton);

      // Add the task to the task list
      taskList.appendChild(task);

      // Clear the input
      taskInput.value = "";
  });