const taskList = [];
let tasks = document.getElementsByClassName("task");

for (let i = 0; i < tasks.length; i++){ 
    taskList.push(tasks[i].innerHTML);
}

let searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keyup", function(event){
    let myText = searchBar.value;
    for (let i = 0; i < tasks.length; i++){ 
        if(taskList[i].indexOf(myText) < 0){
            tasks[i].style.display = "none";
        }
        else{
            tasks[i].style.display = "block";
        }
    }
});