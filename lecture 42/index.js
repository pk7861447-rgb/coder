// let todos = [];

// // DOM Selection
// const todoForm = document.querySelector("#todoForm");
// const todoInput = document.querySelector("#todoInput");
// const todoList = document.querySelector("#todoList");

// // 1. Add New Todo Event
// todoForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const text = todoInput.value.trim();
//   if (!text) return;

//   const newTodo = {
//     id: Date.now(),
//     text: text,
//     isCompleted: false
//   };

//   todos.push(newTodo);
//   todoInput.value = "";
//   renderTodos();
// });

// // 2. Event Delegation for Delete & Toggle
// todoList.addEventListener("click", (e) => {
//   const li = e.target.closest("li");
//   if (!li) return;
  
//   const id = Number(li.dataset.id);

//   // If Delete Button Clicked
//   if (e.target.classList.contains("delete-btn")) {
//     todos = todos.filter(todo => todo.id !== id);
//     renderTodos();
//   }

//   // If Toggle/Check Button Clicked
//   if (e.target.classList.contains("toggle-btn")) {
//     todos = todos.map(todo => {
//       if (todo.id === id) {
//         return { ...todo, isCompleted: !todo.isCompleted };
//       }
//       return todo;
//     });
//     renderTodos();
//   }
// });

// // 3. Render Function to Update UI
// function renderTodos() {
//   todoList.innerHTML = "";

//   todos.forEach(todo => {
//     const li = document.createElement("li");
//     li.dataset.id = todo.id;
//     li.className = `todo-item ${todo.isCompleted ? "completed" : ""}`;

//     li.innerHTML = `
//       <span>${todo.text}</span>
//       <div class="actions">
//         <button class="toggle-btn">${todo.isCompleted ? "↩" : "✓"}</button>
//         <button class="delete-btn">✕</button>
//       </div>
//     `;

//     todoList.appendChild(li);
//   });
// }


// High-Resolution Nature Wallpaper URLs
const backgrounds = {
  forest: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
  mountains: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80",
  ocean: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
  aurora: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1920&q=80"
};

// Data State Array
let todos = [];

// DOM Element References
const bgSelect = document.querySelector("#bgSelect");
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

// 1. Dynamic Background Switcher Event
bgSelect.addEventListener("change", (e) => {
  const selectedTheme = e.target.value;
  document.body.style.backgroundImage = `url('${backgrounds[selectedTheme]}')`;
});

// 2. Add New Task Event
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = todoInput.value.trim();
  if (!text) return;

  const newTodo = {
    id: Date.now(),
    text: text,
    isCompleted: false
  };

  todos.push(newTodo);
  todoInput.value = "";
  renderTodos();
});

// 3. Event Delegation for Toggle and Delete Actions
todoList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  const id = Number(li.dataset.id);

  // Delete Action
  if (e.target.classList.contains("delete-btn")) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
  }

  // Complete/Toggle Action
  if (e.target.classList.contains("toggle-btn")) {
    todos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    renderTodos();
  }
});

// 4. Render Function to Sync Array State to DOM
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    li.className = `todo-item ${todo.isCompleted ? "completed" : ""}`;

    li.innerHTML = `
      <span>${todo.text}</span>
      <div class="actions">
        <button class="toggle-btn">${todo.isCompleted ? "↩" : "✓"}</button>
        <button class="delete-btn">✕</button>
      </div>
    `;

    todoList.appendChild(li);
  });
}