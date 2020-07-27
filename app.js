
var list = document.getElementById("list")


function addTodo(){
    var_todo = document.getElementById("todo-item")
    var li = document.createElement("li")
    var liText = document.createTextNode(var_todo.value)
    li.appendChild(liText)

var delbtn = document.createElement("button")
var delText = document.createTextNode("DELETE TASK")
delbtn.setAttribute("class","btn")
delbtn.setAttribute("onclick","deleteItem(this)")
delbtn.appendChild(delText)

li.appendChild(delbtn)
    

    list.appendChild(li)


    var_todo.value = ""
   

    
}


function deleteItem(dd){
    dd.parentNode.remove()
}
