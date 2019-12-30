


// $('#IdElemento') //selecciona elemento por ID -> document.getElementById
// $('div') //Selecciona elementos por tagName -> document.getElementByTagName
// $('.ul-list') //selecciona elementos por clase css -> document.getElementByClassName
// $('<li>') //Crea un elemento nuevo en memoria
// $(objeto) //selecciona elemento y agrega funciones propias de jQuery
const ALL = 'ALL'
const ACTIVE = 'ACTIVE'
const COMPLETE = 'COMPLETE'


let isEditing = false;
let currentEditingItemId = undefined;
let itemsToDisplay = ALL
async function refreshItemsInList(){
  
  let todos = await TodoService.getAllTodos()
  const itemList = $('.item-list')

  
  switch(itemsToDisplay){
    case ACTIVE:
        todos = todos.filter((todo) => {
          return todo.complete == false
        })
      break;

    case COMPLETE:
        todos = todos.filter((todo) => {
          return todo.complete == true
        })
      break;
  }

  itemList.html('')
  for (let todo of todos){

    let baseElement = `
      <li> 
        <i class="fa ${todo.complete ? 'fa-check-circle' : 'fa-circle-o'}" onclick="setItemComplete(${todo.id})"></i> 
        <span class="${todo.complete ? 'tachado' : ''}">${todo.title}</span> 
        <i class="fa fa-edit" onclick="onItemEdit(${todo.id})"></i>
        <i class="fa fa-close" onclick="onItemDelete(${todo.id})"></i> 
      </li>`
    itemList.append(baseElement)
  }
}

async function createTodo(){
  const txtTodoTitle = $('#txtTodoTitle');
  if(txtTodoTitle.val() != ''){
    

    if(isEditing){
      let todo = await TodoService.getTodoById(currentEditingItemId)
      todo.title = txtTodoTitle.val()
      await TodoService.updateTodo(currentEditingItemId, todo)
      isEditing = false;
      currentEditingItemId = undefined;
    }else {
      let todo = { title: txtTodoTitle.val() }
      await TodoService.addTodo(todo)
    }
    txtTodoTitle.val('')
    refreshItemsInList()
  }
}

async function onItemDelete(id){
  const data = await TodoService.removeTodo(id)
  refreshItemsInList()
  console.log(data);
}

async function setItemComplete(id){
  const todo = await TodoService.getTodoById(id)

  if(todo.complete){
    todo.complete = false
  }else {
    todo.complete = true
  }

  await TodoService.updateTodo(id, todo)
  refreshItemsInList()
}

async function onItemEdit(id){
  const todo = await TodoService.getTodoById(id);
  const txtTodoTitle = $('#txtTodoTitle');
  txtTodoTitle.val(todo.title);
  isEditing = true;
  currentEditingItemId = id;
}

function filterItems(type) {
  itemsToDisplay = type
  refreshItemsInList()
}

$(document).ready(async function(){
 refreshItemsInList()
})

const waitWithCallback = (n, callback) => {
  setTimeout(() => {
    callback(n)
  }, n)
}

// const waitWithPromise = (n) => {
//   n = n || 5000
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`tiempo ${n}`)
//       resolve(n)
//     }, n)
//   })
// }

// const doSomeTask = async () => {
//   //codigo
//   let b = 10
//   // waitWithCallback(5000, () => {
//   //   console.log('tiempo')
    
//   // })
//   // waitWithPromise(5000).then((n) => {
//   //   console.log(`tiempo ${n}`)
    
//   // })
//   const b = obj.valor
//   waitWithPromise && await waitWithPromise(5000) && 
//   console.log(b)
  

  
//   //codigo
// }