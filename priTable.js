 import { getTasks, toDoList } from './tdl.js';


/* 5th Mar: 
   Movement of high priority achieved with use of eventlistner listening for changes 
   a tasks priority, chnaging priority will move task to 'high' table atm, delete 
   button has also been added with task to remove when the user chooses to though
   the task itself will remain where the inputt of tasks is, 
   
   someway to make that disappear after user chooses a priority?

   
*/
let tasks = getTasks();





const stor = document.getElementById("stor");

const priHi = document.getElementById("priHi");
const priMe = document.getElementById("priMe");
const priLo = document.getElementById("priLo");

const inpButt = document.getElementById("addATaskmM");

stor.addEventListener("change", () => {
    const newDiv = document.createElement("div");
    const deleteButton = document.createElement("button"); 
    deleteButton.textContent = ('Del');
    deleteButton.onclick = function () {
    newDiv.remove();
};


    if (String(tasks).match("Priority: High")) {
        newDiv.append(tasks);
        newDiv.append(deleteButton);
        priHi.append(newDiv);
    }

    if (String(tasks).match("Priority: Medium")) {
        newDiv.append(tasks);
        newDiv.append(deleteButton);
        priMe.append(newDiv);
    }

    if (String(tasks).match("Priority: Low")) {
        newDiv.append(tasks);
        newDiv.append(deleteButton);
        priLo.append(newDiv);
    }
    tasks.pop()
    
});




