var list = document.getElementById("list");

function addtodo(){

    //for make a li
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.setAttribute("class", "litext");


    // li.setAttribute("class","btn1");

    li.appendChild(liText);
    list.appendChild(li);

   //for making delete button
    var delBtn = document.createElement('button');
    var delText = document.createTextNode("Delete");

    delBtn.setAttribute("class","btn");
    delBtn.setAttribute("onclick","delete_item(this)");
    delBtn.appendChild(delText);
    li.appendChild(delBtn);

    var editbtn = document.createElement('button');
    var editText = document.createTextNode("EDIT");
    editbtn.setAttribute("class","btn");
    editbtn.setAttribute("onclick","Edit_item(this)");
    editbtn.appendChild(editText);
    li.appendChild(editbtn);



    todo_item.value = "";
}

function delete_item(e){
 

   e.parentNode.remove();
}

function delete_all(){
    list.innerHTML = "";
}

function Edit_item(e){
  
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter the Edit value", val);
    e.parentNode.firstChild.nodeValue = editValue;
}

