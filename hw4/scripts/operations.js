window.onload = function(){
    displayTask()
}

const greg = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")): []

document.querySelector('#push').addEventListener("click",  () =>{
    const task = document.querySelector("#newtask input")
    createTask(task)
    location.reload()
})

document.querySelector('#reset').addEventListener("click",  () =>{
    clearAll()
    location.reload()
})

document.querySelector('#duetasks').innerHTML += greg.length

function createTask(task){
    if (task.value.length === 0){
        return
    }
    greg.push(task.value)
    localStorage.setItem("tasks", JSON.stringify(greg))
    location.reload
}

function displayTask(){
    for(let i = 0; i < greg.length; i++){
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
                ${greg[i]}
                <h4>Task #${i+1}</h4>
            <button class="delete">
            <div>
                <h5>DELETE</h5>
            </button>
            </div>
        </div>
    `
    }
    document.querySelector(".tasks")
    deleteTask()

}

function clearAll(){
    localStorage.clear('tasks')
}

function deleteTask(){
    let alldelebtn = document.querySelectorAll(".delete");
    alldelebtn.forEach((del, i) => {
        del.addEventListener("click", () => { deleteOneTask(i) })
    })
}

function deleteOneTask(i){
    greg.splice(i, 1)
    localStorage.setItem("tasks", JSON.stringify(greg))
    location.reload()
}


