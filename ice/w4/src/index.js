import Component from "./Component.js";
var Component from "./Component.js";
function runOnLoad()
{
    
    let element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    // console.log(x);
    var comp = new Component(document.getElementById("addTaskPane"));
    let element2 = document.createElement("div");
    container.appendChild(element2);
  

    let firstTask = new Task (
        {
        done: false,
        content: "This is a task"
        }
    )
    let container  = document.getElementById("container");
    let task = document.createElement("div");
   
    container.appendChild(task);
    task.innerHTML = firstTask.render();
    
        
}


window.addEventListener("DOMContentLoaded", runOnLoad);