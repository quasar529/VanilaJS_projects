//Select Items

const alert=document.querySelector(".alert");
const form=document.querySelector(".grocery-form");
const grocery=document.getElementById("grocery");
const submitBtn=document.querySelector(".submit-btn");
const container=document.querySelector(".grocery-container");
const list=document.querySelector(".grocery-list");
const clearBtn=document.querySelector(".clear-btn");

//
let editElement;
let editFlag=false;
let editId="";

//*event
//submit form
form.addEventListener('submit',addItem);
//clear items
clearBtn.addEventListener('click',clearItems);
//load items
window.addEventListener('DOMContentLoaded',setupItems);
//functions

function addItem(e){
    e.preventDefault();
    const value=grocery.value;
    const id=new Date().getTime().toString();
    if(value && !editFlag){
        createListItem(id,value);

        displayAlert("added to the list","success");

        container.classList.add("show-container");
        //add to localS
        addToLocalStorage(id,value);
        setBackToDefault();

    }else if(value && editFlag){
        editElement.innerHTML=value;
        displayAlert('value changed','success');
        //edit localstorage
        editLocalStorage(editId,value);
        setBackToDefault();
    }else{
        displayAlert("please enter value","danger");
    }
}


//alert
function displayAlert(text,action){
    alert.textContent=text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function(){
        alert.innerHTML="<br>";
        alert.classList.remove(`alert-${action}`);
    },1000);
}
//clear
function clearItems(){
    const items=document.querySelectorAll('.grocery-item');
    if(items.length>0){
        items.forEach(function(item){
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert('empty list', 'danger');
    setBackToDefault();
    localStorage.removeItem('list');
}
//delete
function deleteItem(e){
    const element=e.currentTarget.parentElement.parentElement;
    const id=element.dataset.id;
    list.removeChild(element);
    if(list.children.length===0){
        container.classList.remove("show-container");
    }
    displayAlert('item removed', 'danger');
    setBackToDefault();
    //remove
    //removeFromLocalStorage(id);
}
//edit
function editItem(e){
    const element=e.currentTarget.parentElement.parentElement;

    editElement=e.currentTarget.parentElement.previousElementSibling;

    grocery.value=editElement.innerHTML;
    editFlag=true;
    editId=element.dataset.id;
    submitBtn.textContent='edit';
}
//set back to default
function setBackToDefault(){
    grocery.value='';
    editFlag=false;
    editId='';
    submitBtn.textContent="submit";
}

//Local Storage

function addToLocalStorage(id,value){
    const grocery={id,value};
    let items=getLocalStorage();

    items.push(grocery);
    localStorage.setItem('list',JSON.stringify(items));
}
function removeFromLocalStorage(id){
    let items=getLocalStorage();

    items=items.filter(function(item){
        if(item.id!==id){
            return item;
        }
    })
    localStorage.setItem('list',JSON.stringify(items));
}
function editLocalStorage(id,value){
    let items=getLocalStorage();
    items=items.map(function(item){
        if(item.id===id){
            item.value=value;
        }
        return item;
    })
    localStorage.setItem('list',JSON.stringify(items));

}
function getLocalStorage(){
    return localStorage.getItem("list") 
    ? JSON.parse(localStorage.getItem("list")):[];
}

//SET UP
function setupItems(){
    let items=getLocalStorage();
    if(items.length>0){
        items.forEach(function(item){
            createListItem(item.id,item.value);
        });
        container.classList.add("show-container");
    }
}
function createListItem(id, value) {
  const element = document.createElement("article");
  //add class
  element.classList.add("grocery-item");
  //add id
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = ` <p class="title">${value}</p>
        <div class="btn-container">
            <button class="edit-btn" type="button">
                <img src="images/edit.png" class="edit-btn-icon"></img>
            </button>
            <button class="delete-btn" type="button">
                <img src="images/delete.png" class="delete-btn-icon"></img>
            </button>
        </div>`;

  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
  list.appendChild(element);
}