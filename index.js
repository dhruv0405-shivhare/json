 async function fet(){
    let a = await fetch("http://localhost:3000/students")
    let b = await a.json()
   //  let final_data = b.map((t)=>`

   //  <h1> ${t.id} </h1>
   //  <h1> ${t.name} </h1>
   //  <h1> ${t.age} </h1>
   //  <h1> ${t.add} </h1>    
    
    
    
   //  `).join("")

   let final_data = b.map((t)=>`
   <tr>
   <td> ${t.id} </td>
   <td> ${t.name} </td>
   <td> ${t.age} </td>
   <td> ${t.add} </td>
   <td> <button onclick="mydelete('${t.id}')">Delete </button> </td>
   </tr>
   `).join("  ")
   
   document.querySelector('#anshul').innerHTML = final_data

 }

 fet();

 function mydelete(id){
   fetch(`http://localhost:3000/students/${id}`,{
      method:'DELETE'
   })
   .then( re=>alert("deleted successfully..!!!"))

 }



//insert data

function insertdata(){
  let data = {
    name:document.querySelector('#name').value,
    age:document.querySelector('#age').value,
    address:document.querySelector('#address').value
  }




fetch("http://localhost:3000/students",{
  method:'POST',
  headers:{
    'Content-type':'applicaion/json'
  },
  body:JSON.stringify(data)
}) 
.then(res=>alert("inserted..."))

}