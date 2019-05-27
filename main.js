//////////////// lists database///////////////
var arrayOfLists=[];


///////////// add New List Section ///////////////////////
var addNewListButton = document.getElementById("addList");
var addNewListInput = document.getElementById("addListInput");
var tablesComponents = document.getElementById("tables");
var newListItem = document.getElementById("lists");



addNewListButton.addEventListener('click', function(){
   
    addNewListButton.style.display = 'none';
    addNewListInput.style.display = 'block';
});

// code that makes enter work to start click event
document.getElementById("value")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button").click();
    }
});

// code to start event on add list
document.getElementById("button").addEventListener('click', function(){
    var value = document.getElementById("value").value;
    if(value){
        addNewList(value);
        document.getElementById("value").value ="";
        
    }
    addNewListButton.style.display = 'block';
    addNewListInput.style.display = 'none';
});

var columnsCatalogue = document.getElementById("columns");

//function that targets button and its parent
columnsCatalogue.addEventListener("click",e =>{
   
      if(e.target.tagName === "BUTTON"){
        addNewCard(e.target.id)}

         
});

//function adds new cards to the targeted list/column
function addNewCard(idNumber){
    var itemDiv = document.createElement("div");
    itemDiv.classList.add("card");
    document.getElementById(1000+parseInt(idNumber)).appendChild(itemDiv);
}


//adding new list/column function
function addNewList(input){
    //create new list/column and give class to it
    var itemDiv = document.createElement("div");
    itemDiv.id = idGenerator(); //add id
    itemDiv.classList.add("column");
    columnsCatalogue.appendChild(itemDiv);
    //create name header in just created column
    var itemHeader = document.createElement("h3");
    itemHeader.innerText = input;
    itemDiv.appendChild(itemHeader);
    //adding empty div
    var classWrapperDiv = document.createElement("div");
    classWrapperDiv.id = 200 + itemDiv.id;
    classWrapperDiv.classList.add("cardsWrapper")
    itemDiv.appendChild(classWrapperDiv);
    //adding button to the newly created column and adding same id as column id
    var itemButton = document.createElement("button");
    itemButton.innerText = "Add new card";
    itemButton.id= 100+itemDiv.id;
    //itemButton.onclick = function(){console.log(itemButton.id)};
    itemDiv.appendChild(itemButton); 
}
////////////////////add New List Section end////////////////////












//////////////////// Generate ID Section //////////////////
var startNumberID = 0;

//function that generates ID number iterating startNumberID;
function idGenerator(){
    var numberID = startNumberID++;
    return numberID;
}

// function that pushes generated ID number to arrayOfLists database
//not used yet
function pushToArrayOfLists(numberID){
    pushToArrayOfLists.push({listID:numberID})
}








