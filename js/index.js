const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");


const searchForm = document.querySelector('.search');
var form2 = document.querySelector('#form2')

document.querySelector('.update').style.display="none"

 const url= 'http://localhost:5000/users/'







async function allUser(search){


  let uri= 'http://localhost:5000/users/?_sort=id&_order=desc'
if (search) {
  uri += `&q=${search}`
}




    const response= await fetch(uri)

    const data= await response.json()
    console.log(data)
    
    const tbody = document.querySelector('#tbody')
    let template = '';


    
    data.forEach(e => {

        template += `
      <tr>
      <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.email}</td>
        <td>${e.contact}</td>
       
        <td><button class="btn1" id="${e.id}">Editar</button>
        <button class="btn2" id="${e.id}">Excluir</button>
        </td>
        
      </tr>
    `
      tbody.innerHTML=template
  form2.btn.addEventListener('click',(e)=>{
                e.preventDefault()
  })
      

      const btn2 = document.querySelectorAll('.btn2')
      const btn1 = document.querySelectorAll('.btn1')

      

      btn1.forEach((bt)=>{
        // console.log(bt)
     

      

      bt.addEventListener('click',(event)=>{
        console.log(event.target.id)



        document.querySelector('.update').style.display="block"

         document.querySelector('.table').style.display="none"

        

        
        const res = fetch(url + event.target.id, {
              method: 'GET'
            }).then(response=> response.json())
            .then(response=>{
            

            

             

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
                  
                        fetch(url+event.target.id,{
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

    
 })
    









btn2.forEach((bt)=>{


  
     bt.addEventListener('click',(event)=>{
      
      

      if(confirm('tem certeza de excluir esse usuario?')==true){

        const res = fetch(url + event.target.id, {
            method: 'DELETE'
          }).then(response=> response.json())
          .then(resutl=>{
            console.log(resutl)
          })
      }
     
      
           
         
     })


})





        
    });
}





// search
searchForm.btn.addEventListener('click', async (e) => {
    e.preventDefault();
    allUser(searchForm.search.value.trim());

    searchForm.search.value=""
  })
  
  window.addEventListener('DOMContentLoaded', () => allUser());