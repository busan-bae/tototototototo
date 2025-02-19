const userInput = document.getElementById("user-input")
const taskAddBtn = document.getElementById("task-add-btn")
let taskList = []
taskAddBtn.addEventListener("click",addtask)



function addtask(){
     let task = {
        id : randomId(),
        taskContent : userInput.value,
        isComplete : false
    }
    taskList.push(task)
    console.log(taskList)
    render()
}

function render(){
    let resultHTML = '';
    for(let i = 0 ; i < taskList.length; i++){
        if(taskList[i].isComplete === true) {
            resultHTML += `<div class="task-list task-done">
            <div class = "tasks cancel">
                ${taskList[i].taskContent}
            </div>
            <div class="btn-box">
                <button onclick="toggleComplete('${taskList[i].id}')" ><i class="fa-solid fa-arrow-rotate-left"></i></button>                
                <button onclick="deleteTask('${taskList[i].id}')"  ><i class="fa-solid fa-trash"></i></button>                
            </div>
        </div>`        
        } else
        resultHTML += `<div class="task-list">
                    <div class= "tasks">
                        ${taskList[i].taskContent}
                    </div>
                    <div class="btn-box">
                        <button onclick="toggleComplete('${taskList[i].id}')" ><i class="fa-solid fa-check"></i></button>                
                        <button onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash"></i></button>                
                    </div>
                </div>`        
    }
    document.getElementById("task-board").innerHTML = resultHTML
}

function toggleComplete(id) {
    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete
            break;
        }
    }
    render()
    console.log(taskList)
}
    
function deleteTask(id){
    for(let i =0; i< taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1)
            break;
        }
    }
    render()
}



function randomId(){
    return '_' + Math.random().toString(36).substr(2, 9);
}
