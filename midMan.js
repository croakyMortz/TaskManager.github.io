import { getTasks, toDoList } from './tdl.js';
import { takeName } from './takeName&Intro.js'
import { displayToDo } from './priTable.js';


document.getElementById("addATaskmM").addEventListener("click", toDoList);
document.getElementById("addATaskmM").addEventListener("click", displayToDo)
document.getElementById("nameTaker").addEventListener("click", takeName);

/*
let man = getFin();
console.log(man); 

const showTasksWithPri = () => {
    const task = getTasks();
    task.forEach(task => {
        console.log(`Task: ${task.description}, Priority: ${task.priority}`);
    });
};

showTasksWithPri();


*/
