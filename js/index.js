const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");


const searchForm = document.querySelector('.search');
var form2 = document.querySelector('#form2')

const url= 'http://localhost:5000/users'

async function allUser(trem){

    const response= await fetch(url)

    const data= await response.json()
    console.log(data)
    
    const tbody = document.querySelector('#tbody')
    let template = '';
    
    data.forEach(e => {

        template += `
      <tr>
        <td>${e.name}</td>
        <td>${e.email}</td>
        <td>${e.contact}</td>
       
        <td><a class="link1">Editar</a>
        <a class="link2">Excluir</a>
        </td>
        
      </tr>
    `
      tbody.innerHTML=template

      const link2 = document.querySelector('.link2')
      const link1 = document.querySelector('.link1')

      link1.addEventListener('click',(event)=>{
        const res = fetch('http://localhost:5000/users/' + e.id, {
              method: 'GET'
            }).then(response=> response.json())
            .then(response=>{
              console.log(response.id)

              var link=response.id

              console.log(event.target.link)

              form2.name.value=response.name
              form2.email.value=response.email
              form2.contact.value=response.contact


              form2.btn.addEventListener('click',(e)=>{
                e.preventDefault()
                console.log(response.id)

                let user ={
                  name : form2.name.value,
                  email : form2.email.value,
                  contact : form2.contact.value
                      }
                  
                        fetch('http://localhost:5000/users/'+response.id,{
                          method: 'PUT',
                          body: JSON.stringify(user),
                          headers: { 'Content-Type': 'application/json' }
                      }).then(response=>response.json())
                      .then(response=>{
                  
                        console.log(response)
                         
                      })
              })
         
            })
         
     })

    

    














     link2.addEventListener('click',()=>{
        const res = fetch('http://localhost:5000/users/' + e.id, {
              method: 'DELETE'
            });
            window.location.replace("/");
         
     })



        
    });
}


// var form = document.querySelector('#form2')

// const createUser =async (id)=>{

   

//     await fetch('http://localhost:5000/users/'+id,{
//         method: 'GET',
//         // body: JSON.stringify(user),
//         headers: { 'Content-Type': 'application/json' }
//     })
//     .then(response=> response.json())
//     .then(response=> {
//       console.log(response)

//       let user ={
//         name : "nelson",
//         email : "nelson@gmail.com",
//         contact : "489545454545"
//     }

//       fetch('http://localhost:5000/users/'+id,{
//         method: 'PUT',
//         body: JSON.stringify(user),
//         headers: { 'Content-Type': 'application/json' }
//     }).then(response=>response.json())
//     .then(response=>{

//       console.log(response)
       
//     })







//     })

//     // window.location.replace('index.html')

// }

// form.addEventListener('submit',createUser(postId))






// allUser()


// search
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    allUser(searchForm.term.value.trim());
  })
  
  window.addEventListener('DOMContentLoaded', () => allUser());