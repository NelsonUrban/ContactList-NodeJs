function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  async function refreshItemsInList(){
  
 
  

    const contact = await ContactService.getAllContact(); 
    //console.log(contact);
    const itemList = $('.list-contact');

    itemList.html('') 
    for( let con of contact)
    {
        let baseElement = `
          <li>          
            <span >${con.Nombre}</span> 
            <i class="fa fa-edit"  onclick=\"openElement('${con._id}')\"></i>
            <i class="fa fa-info-circle" onclick=\"detailsElement('${con._id}')\"></i>
            <i class="fa fa-close" onclick=\"Delete('${con._id}')\"></i> 
          </li>`
        itemList.append(baseElement)
      }
  }
async function Delete(id){
    const data = await ContactService.DeleteContact(id)
    refreshItemsInList()
    console.log(data);
  }
  // async function updateContact(id,body){
  //   const data = await ContactService.updateContact(id,body)
  //   refreshItemsInList()
  //   console.log(data);
  // }
  const openElement = (id) => {
    window.location = `./Edit-contact.html?id=${id}`
  } 
  const detailsElement = (id) => {
    window.location = `./Details-contact.html?id=${id}`
  }

  async function getContactByID(id) {
    const data = await ContactService.getContactById(id);
    return data;
    
  }    
    $(document).ready(async function(){
      refreshItemsInList()
     });
 