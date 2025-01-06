 import { getTasks, toDoList } from './tdl.js';

console.log(getTasks());

//proof of receiving data, now to fix priority or create code for priority arrangement.

export const displayToDo = () => {
    getTasks().forEach(toDo => {
        console.log(toDo);
    });
};

displayToDo();

/* const tas = getTasks();
console.log(tas);




import { mn } from './tdl.js';

const pri = () => {
    const value = document.getElementById("stor").value;
    const chosen = document.createTextNode(value);
    

};



console.log(mn()); */


