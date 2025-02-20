const userInput = document.getElementById("user-input")
const taskAddBtn = document.getElementById("task-add-btn")
let taskList = []
taskAddBtn.addEventListener("click",addtask)
userInput.addEventListener('keydown',function (e) {
    if(e.key === 'Enter'){
        addtask()
    }
})
let underLine = document.getElementById("under-line")
let tabs = document.querySelectorAll(".task-bar div")
let mode = 'all'
let filterList =[]
let list = []
alert("to do list 입력하시려면 ENTER를 입력해주세요!")

for(let i = 1; i<tabs.length;i++){
    tabs[i].addEventListener("click",function(event){   //이부분의 구조가 눈에 잘 들어오지 않음 나중에 다시 공부
        filter(event)
    })
}



function addtask(){
    if(!userInput.value){
        return alert("값을 입력해주세요")
    }
     let task = {
        id : randomId(),
        taskContent : userInput.value,
        isComplete : false
    }
    taskList.push(task)
    render()
    userInput.value=""
}


function render(){
    let resultHTML = '';
    if(mode === "all"){
        list = taskList
        console.log("이게 작동하나?",mode)
    }else if(mode === "ongoing" || mode === "done"){
        list = filterList
    } 

    for(let i = 0 ; i < list.length; i++){
        if(list[i].isComplete === true) {
            resultHTML += `<div class="task-list task-done">
             <div class="btn-box">
                <button onclick="toggleComplete('${list[i].id}')" ><i class="fa-solid fa-arrow-rotate-left"></i></button>                            
            <div class = "tasks cancel">
                ${list[i].taskContent}
            </div>
                </div>
            <div class="btn-box">                      
                <button onclick="deleteTask('${list[i].id}')"  ><i class="fa-solid fa-trash"></i></button>                
            </div>
        </div>`        
        } else
        resultHTML += `<div class="task-list">
                    <div class="btn-box">
                        <button onclick="toggleComplete('${list[i].id}')" ><i class="fa-solid fa-check"></i></button>                
                           <div class= "tasks">
                        ${list[i].taskContent}
                    </div>             
                    </div>    
                   
                    <div class="btn-box">
                  
                        <button onclick="deleteTask('${list[i].id}')"><i class="fa-solid fa-trash"></i></button>                
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
    console.log(mode)
    filter()
}
    



function deleteTask(id){
    for(let i =0; i< taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1)
            break;
        }
    }
    filter()
}

function filter(event){
    if(event){
        mode = event.target.id
        underLine.style.left = event.currentTarget.offsetLeft + "px";
        underLine.style.width = event.currentTarget.offsetWidth + "px";
        underLine.style.top = event.currentTarget.offsetTop + event.currentTarget.offsetHeight - "px";
    }
    filterList =[]
    if(mode === "all"){
       
    } else if(mode === "ongoing"){
        for(let i =0; i< taskList.length; i++){
            if(taskList[i].isComplete === false){
                filterList.push(taskList[i])
            } 
        }
    } else if(mode === "done"){
        for(let i =0; i< taskList.length; i++){
            if(taskList[i].isComplete === true ){
             filterList.push(taskList[i])
             render()
            } 
         }
    }
    render()
}

function randomId(){
    return '_' + Math.random().toString(36).substr(2, 9);
}
