const HOST = 'https://5db4a2954e41670014ef268b.mockapi.io';

const getAllTodos = () => {
  return new Promise( async (resolve, reject) => {
    try {
      const response = await fetch(`${HOST}/todo`)
      const data = await response.json()
      resolve(data);
    }catch(err) {
      reject(err)
    }
  });
}

const getTodoById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${HOST}/todo/${id}`)
      const data = await response.json()
      resolve(data)
    }catch(e){
      reject(e)
    }
  })
}

const addTodo = (todo)=> {
  return new Promise(async (resolve, reject) => {
    const init = {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json"
      }
    }

    try {
      const response = await fetch(`${HOST}/todo`, init);
      const data = await response.json();
      resolve(data);
    }catch(e){
      reject(e)
    }
  })
}


const removeTodo = (id) => {
  return new Promise(async (resolve, reject) => {
    const init = {
      method: 'DELETE'
    }
    try {
      const response = await fetch(`${HOST}/todo/${id}`, init)
      const data = await response.json()
      resolve(data)
    }catch(e){
      reject(e)
    }
  })
}

const updateTodo = (id, todo) => {
  return new Promise(async (resolve, reject) => {
    let init = {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        "Content-Type" : "application/json"
      }
    }
    try {
      const response = await fetch(`${HOST}/todo/${id}`, init)
      const data = await response.json()
      console.log(data)
      resolve(data);
    }catch(e){
      reject(e)
    }
  })
}




const TodoService = {
  getAllTodos,
  getTodoById,
  addTodo,
  removeTodo,
  updateTodo
}




