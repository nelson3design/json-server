const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");







async function oneUser(id){
    var form = document.querySelector('#form2')

    const req = await fetch(`http://localhost:5000/users/${id}`,{

    })

    const res= await req.json()

  
    let user ={
        name : form.name.value=res.name,
        email : form.email.value=res.email,
        contact : form.contact.value=res.contact
    }
    


  console.log(res)

  


  

}


oneUser(id)

