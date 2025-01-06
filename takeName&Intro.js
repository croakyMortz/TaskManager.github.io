export const takeName = (val) => { 
    const value = document.getElementById("name").value 
    document.getElementById("welcomeMes").textContent = "Hello " + value + ", what's the plan today?" 
    document.getElementById("frsArt").textContent = value; 
    }; 