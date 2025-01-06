//todolist taker 

const arrOfTasks = [];

export const toDoList = () => { 
    const data = document.getElementById("entry").value; 
    const text = document.createTextNode(data); 
    
    if (data.trim() === '') { 
    return; 
    } 
    
    const newDiv = document.createElement("div"); 
    const container = document.getElementById("stor"); 
    
    const checkBox = document.createElement("input"); 
    checkBox.type = "checkbox"; 

    const select = document.createElement("select");
    const hyOpt = document.createElement("option");
    const meOpt = document.createElement("option");
    const loOpt = document.createElement("option");
    const none = document.createElement("option");

    none.value = 'None';
    none.text = 'None';

    hyOpt.value = 'High';
    hyOpt.text = 'High';

    meOpt.value = 'Medium';
    meOpt.text = 'Medium';

    loOpt.value = 'Low';
    loOpt.text = 'Low';

    select.append(none);
    select.append(hyOpt);
    select.append(meOpt);
    select.append(loOpt);

     
    const deleteButt = document.createElement("button"); 
    deleteButt.textContent = ('Remove'); 
    deleteButt.onclick = function() { 
    newDiv.remove(); 
    };
     
    newDiv.append(checkBox); 
    newDiv.append(text);
    newDiv.append(select); 
    newDiv.append(deleteButt); 
    container.append(newDiv); 
    
   

    const tasks = {
        description: data,
        priority: select.value

    };

    arrOfTasks.push(tasks);

    document.getElementById("entry").value = ''; 
   
}; 

export function getTasks() {
    return arrOfTasks;
};

/*
const nan = 'heel';


export function mn() {
    return nan;
}

const finRes = document.getElementById("stor").value;
export function getFin() {
    return finRes;
}  */



