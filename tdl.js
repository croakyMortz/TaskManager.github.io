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
    

    //Priority choosing
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

    //delete button
    const deleteButt = document.createElement("button"); 
    deleteButt.textContent = ('Remove'); 
    deleteButt.onclick = function() { 
    newDiv.remove(); 
    };
    

    const taskText = document.createElement("span");
    taskText.textContent = data;


    //appending
    newDiv.append(checkBox); 
    newDiv.append(taskText);
    newDiv.append(select); 
    newDiv.append(deleteButt); 
    container.append(newDiv); 
    
    
   
/*logging task and priority to console, works...add 'console.log' instead of
     'arrOfTasks.push' for testing'
    */
    select.addEventListener("change", () => {
        const selectOption = select.value;
        arrOfTasks.push("Task: " + taskText.textContent + " Priority: " + selectOption)
    });


    document.getElementById("entry").value = ''; 
   
}; 

export function getTasks() {
    return arrOfTasks;
};







