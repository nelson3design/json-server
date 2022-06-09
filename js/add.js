var form = document.querySelector('#form')

const createUser =async ()=>{

    let user ={
        name : form.name.value,
        email : form.email.value,
        contact : form.contact.value
    }

    await fetch('http://localhost:5000/users',{
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
    })

    

}

form.addEventListener('submit',createUser)