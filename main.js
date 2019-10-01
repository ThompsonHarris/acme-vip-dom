const name = document.querySelector('[name="name"]');
const email = document.querySelector('[name="email"]');
const checkbox = document.querySelector('[name="checkbox"]');

const contactList = document.querySelector('.contactList');

let tempCounter = 0;


// console.log(contactList)
const listObject = [];

document.getElementById('create').addEventListener('click', (ev) => {
    ev.preventDefault();
    listObject.push({'id' : tempCounter ,'name' : name.value , 'email' : email.value, 'isVip' : checkbox.checked});
    const contactItem = `<div class="contactItem"><p id='contact_${tempCounter}'>${listObject[tempCounter].name} (${listObject[tempCounter].email})</p><button id="destroy_${tempCounter}" type="submit">Destroy</button></div>`
    contactList.innerHTML += contactItem;
    
    console.log(listObject);
    destroyLastItem(listObject, tempCounter)
    tempCounter++

})


function destroyLastItem(obj, id){

    const button = document.getElementById(`destroy_${id}`);
    button.addEventListener('click', (ev) =>{
        const tempId = Number(ev.target.id.slice(ev.target.id.lastIndexOf('_') + 1));
        // delete obj[id];
        obj.filter(ele=>{
           if(tempId === ele.id){
             console.log('delete me')
           }
        })

        console.log(obj)
       

    })

}


