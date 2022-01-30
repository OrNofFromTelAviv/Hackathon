//Creating ariables

let addButton = document.getElementById("add-button");
let ClearCompleted = document.getElementById("clear-completed-button");
let EmptyListBtn = document.getElementById("empty-button");
//let SaveListBtn = document.getElementById("save-button");
let toDoEntryBox = document.getElementById("todo-entry-box");
let toDoList = document.getElementById("todo-list");

let quotesText = document.getElementById("quotes-text");
let quotesTitle = document.getElementById("quotes-title")

let toDoWrapper = document.querySelector("todo-wrapper")

let listCounter = document.getElementById("counter");



//Adding event-listener functions to buttons
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
   let itemText = toDoEntryBox.value;
   newToDoItem (itemText, false);
  };




  

//deleting completed items
ClearCompleted.addEventListener("click", clearCompletedToDoItems);

function clearCompletedToDoItems() {
    let completedItems = toDoList.getElementsByClassName("completed");
    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

//deleting everything
 EmptyListBtn.addEventListener ("click", emptyList);
 function emptyList() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}


/*saving the list
SaveListBtn.addEventListener ("click", saveList);
function saveList() {
   let toDos = [];

    for (let i = 0; i < toDoList.children.length; i++) {
        let toDo = toDoList.children.item(i);

        let toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
}
*/


 //loading save list
 function loadList() {
    if (localStorage.getItem("toDos") != null) {
        let toDos = JSON.parse(localStorage.getItem("toDos"));

        for (let i = 0; i < toDos.length; i++) {
            let toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}

loadList();

 //Adding an item to the list 

 function newToDoItem(itemText, completed) {
   let toDoItem = document.createElement("li");
   let toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);
 
   

   if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("click", toggleToDoItemState);
};


 

//Marking items as done function
function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
  
        setTimeout (newQuote, 300)
    }
}

  function newQuote () {

    let quotes = [
        "Everything you\'ve ever wanted is on the other side of fear. ― George Addair",
        "Your life only gets better when you get better. ― Brian Tracy",
        "The bad news is time flies. The good news is you\'re the pilot. ― Michael Altshuler",
        "You only live once, but if you do it right, once is enough. ― Mae West",
        "Life isn\'t about finding yourself. Life is about creating yourself. ― George Bernard Shaw",
        "The best way to get started is to quit talking and begin doing. ― Walt Disney",
        "Whether you think you can or think you can\'t, you\'re right... ― Henry Ford",
        "If you\'re going through hell, keep going. ― Winston Churchill",
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit. ― Aristotle",
        "The hard days are what make you stronger. ― Aly Raisman"


        ]
    
        i = Math.floor(Math.random()*quotes.length);
        quotesTitle.innerHTML = "<strong>Yaaas! You Are Great<strong><br>"
        quotesText.innerHTML =  quotes[i];
    };

