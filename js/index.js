const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");
const searchForm = document.querySelector('.search');
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
       
        <td><a href="/editar.html?id=${e.id}">Editar</a></td>
        <td><a class="link2">Excluir</a></td>
      </tr>
    `
      tbody.innerHTML=template

      const link2 = document.querySelector('.link2')



     link2.addEventListener('click',()=>{
        const res = fetch('http://localhost:5000/users/' + e.id, {
              method: 'DELETE'
            });
            window.location.replace("/");
         
     })



        
    });
}



// allUser()


// search
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    allUser(searchForm.term.value.trim());
  })
  
  window.addEventListener('DOMContentLoaded', () => allUser());