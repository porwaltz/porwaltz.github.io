const taskList = [];
let tasks = document.getElementsByClassName("task");
let ten = document.getElementsByClassName("ten");

for (let i = 0; i < ten.length; i++){ 
    taskList.push(ten[i].innerHTML);
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