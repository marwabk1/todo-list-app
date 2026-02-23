const inputBox=document.getElementById("input-box");
const addBtn=document.getElementById("addBtn");
const daySelect=document.getElementById("day-select");
const categorySelect=document.getElementById("category-select");

const searchInput=document.getElementById("sidebar-search");


const dayLists={
    mon: document.getElementById("list-mon"),
    tue: document.getElementById("list-tue"),
    wed: document.getElementById("list-wed"),
    thu: document.getElementById("list-thu"),
    fri: document.getElementById("list-fri"),
    sat: document.getElementById("list-sat"),
    sun: document.getElementById("list-sun"),
}

addBtn.addEventListener("click", addTask);

inputBox.addEventListener("keydown", function(e){
    if(e.key==="Enter"){
        addTask();
    }   
});

function addTask(){
    const taskText=inputBox.value.trim();
    const selectedDay=daySelect.value;
    const selectedCategory=categorySelect.value;

    if(taskText===""){
        alert("Please enter a task.");
        return;
    }   

    const li=document.createElement("li");
    li.dataset.category=selectedCategory;


    const textSpan=document.createElement("span");
    textSpan.textContent=taskText;
    textSpan.classList.add("task-text");
    


    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(textSpan);
    li.appendChild(deleteBtn);

    dayLists[selectedDay].appendChild(li);

    inputBox.value="";
    inputBox.focus();

}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    return;
  }

  if(e.target.classList.contains("task-text")){
   e.target.parentElement.classList.toggle("completed");
  }
});

searchInput.addEventListener("input", function () {
  const query = searchInput.value.trim().toLowerCase();

  
  const allTasks = document.querySelectorAll(".day-list li");

  allTasks.forEach((li) => {
    const textSpan = li.querySelector(".task-text");
    const taskText = textSpan ? textSpan.textContent.toLowerCase() : "";

    if (taskText.includes(query)) {
      li.style.display = "flex";   
    } else {
      li.style.display = "none";   
    }
  });
});