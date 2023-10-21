var inputBox = document.getElementById("inputBox")
 var listContainer = document.getElementById("list-container")
 

 
  
 
function addTask() {
  if (inputBox.value==""){
  alert("you should write any thing")
  }
  else {
 
 
    var li = document.createElement("li")
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    var span=document.createElement("span")
    span.innerHTML='\u00d7'
    li.appendChild(span)
     
  }
  inputBox.value=''
  saveData()
}
listContainer.addEventListener("click" , function(e) {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    saveData()

  }
  else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove()
    saveData()

  }
 
})
function saveData() {
  localStorage.setItem("data",listContainer.innerHTML)
  
}
function show() {
  listContainer.innerHTML=localStorage.getItem("data")
  
}
show()
 
 