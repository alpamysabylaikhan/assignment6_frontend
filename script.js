//Task 0
alert("Hello, Alpamys Abylaikhan!");
alert("from group SE-2430");
alert("Hello, JavaWorld!");

//Task 1
let name = "Abylaikhan";
let age = 20;
let isStudent = true;

function showVariables() {
  console.log("Current Variables:");
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Is Student:", isStudent);

  //Updating data
  document.getElementById("nameValue").textContent = name;
  document.getElementById("ageValue").textContent = age;
  document.getElementById("studentValue").textContent = isStudent ? "Yes" : "No";
}

showVariables();

document.getElementById("changeVarsBtn").onclick = () => {
  let newName = prompt("Enter a new name:", name);
  let newAge = prompt("Enter a new age:", age);
  let newStatus = confirm("Are you a student? (OK = Yes, Cancel = No)");

  if (newName) name = newName;
  if (!isNaN(newAge) && newAge !== "") age = Number(newAge);
  isStudent = newStatus;

  console.clear();
  console.log("✅ Variables updated!");
  showVariables();
};



//Task 2
const textParagraph = document.getElementById("text");
const textInput = document.getElementById("newTextInput");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.onclick = () => {
  const newText = textInput.value.trim();
  if (newText === "") {
    alert("Please enter some text!");
  } else {
    textParagraph.textContent = newText;
    textInput.value = "";
  }
};

//Task 3
const styleBox = document.getElementById("task3");
const styleText = document.getElementById("styleText");
const bgBtn = document.getElementById("bgBtn");
const fontBtn = document.getElementById("fontBtn");

let isGray = true;
let isSmallFont = true;

bgBtn.onclick = () => {
  if (isGray) {
    styleBox.style.backgroundColor = "lightgreen";
  } else {
    styleBox.style.backgroundColor = "#eee";
  }
  isGray = !isGray;
};

fontBtn.onclick = () => {
  if (isSmallFont) {
    styleText.style.fontSize = "22px";
  } else {
    styleText.style.fontSize = "16px";
  }
  isSmallFont = !isSmallFont;
};


//Task 4
const list = document.getElementById("list");
document.getElementById("addItem").onclick = () => {
  let li = document.createElement("li");
  li.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(li);
};

document.getElementById("removeItem").onclick = () => {
  if (list.lastChild) list.removeChild(list.lastChild);
};

//Task 5
const colorBox = document.getElementById("colorBox");
colorBox.addEventListener("mouseover", () => colorBox.style.background = "orange");
colorBox.addEventListener("mouseout", () => colorBox.style.background = "lightblue");

//Task 6
const input = document.getElementById("textInput");
const output = document.getElementById("output");
input.addEventListener("keyup", () => {
  output.textContent = input.value;
});

//Task 7
function calculate(op) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  switch (op) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num2 !== 0 ? num1 / num2 : "Error"; break;
  }

  document.getElementById("calcResult").textContent = result;
}

//Task 8
let tasks = [];
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const descInput = document.getElementById("descInput");
const taskList = document.getElementById("taskList");

addTaskBtn.onclick = () => {
  const taskTitle = taskInput.value.trim();
  const taskDesc = descInput.value.trim();

  if (taskTitle === "") {
    alert("Please enter a task title!");
    return;
  }

  const li = document.createElement("li");

  const titleSpan = document.createElement("strong");
  titleSpan.textContent = taskTitle;

  const descPara = document.createElement("p");
  descPara.textContent = taskDesc || "No description provided.";
  descPara.style.margin = "4px 0 0 10px";
  descPara.style.fontSize = "0.9em";
  descPara.style.color = "gray";

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => {
    taskList.removeChild(li);
    tasks = tasks.filter(t => t.title !== taskTitle);
  };

  li.onclick = (e) => {
    if (e.target !== delBtn) li.classList.toggle("completed");
  };

  li.appendChild(titleSpan);
  li.appendChild(descPara);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  tasks.push({ title: taskTitle, description: taskDesc });
  
  taskInput.value = "";
  descInput.value = "";
};
