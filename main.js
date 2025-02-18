const userInput = document.getElementById("user-input")
const taskAddBtn = document.getElementById("task-add-btn")
let taskList = []
taskAddBtn.addEventListener("click",addtask)



function addtask(){
    let taskContent = userInput.value
    taskList.push(taskContent)
    console.log(taskList)
    render()
}

function render(){
    let resultHTML = '';
    for(let i = 0 ; i < taskList.length; i++){
        resultHTML += `<div class="task-list">
                    <div>
                        ${taskList[i]}
                    </div>
                    <div>
                        <button>Check</button>                
                        <button>Delete</button>                
                    </div>
                </div>`        


    }
    document.getElementById("task-board").innerHTML = resultHTML
}

