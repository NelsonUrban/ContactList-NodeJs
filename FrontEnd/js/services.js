const Host = 'http://localhost:8090';

   const getAllContact = () => {
    return new Promise ( async (resolve,reject) => { 
    try 
    {
      const response = await fetch(`${Host}/contact`)
      const data = await response.json()
      resolve(data);
    } 
    catch (error)    
    {
     reject(error);
    }
    });
}

const AddContact = () => {
 return new Promise ( async (resolve, reject) =>{
  try
  {
    const response = await fetch(`${Host}/contact`)
    const {body} = response.json();
    resolve(body);     
  } 
  catch (error)
  {
    reject(error);
    
  }
 });
}

const DeleteContact = (id) => {
 return new Promise(async (resolve,reject) => {
  const init = {
    method: 'DELETE'
  }
  try {
    const response = await fetch(`${Host}/contact/${id}`, init)
    const data = await response.json()
    resolve(data)
  }catch(e)
  {
    reject(e)
  }

 });

}

const getContactById = (id) => {
  
  return new Promise(async (resolve,reject) => {
    try
    {
      const response = await fetch(`${Host}/contact/${id}`)
      const data = await response.json();    

      resolve(data)
      
    } catch (error)
     {
      reject(error)
    }

  })
}

const updateContact = (id, contact) => {
  return new Promise(async (resolve, reject) => {
    let init = {
      method: 'PUT',
      body: JSON.stringify(contact),
      headers: {
        "Content-Type" : "application/json"
      }
    }
    try {
      const response = await fetch(`${HOST}/contact/${id}`, init)
      const data = await response.json()
    
      resolve(data);
    }catch(e){
      reject(e)
    }
  })
}


const ContactService = {
    getAllContact,
    AddContact,
    DeleteContact,
    getContactById,
    updateContact
  }

