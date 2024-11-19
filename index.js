 async function fet(){
    let a = await fetch("http://localhost:3000/students")
    let b = await a.json()
    let final_data = b.map((t)=>`

    <h1> ${t.id} </h1>
    <h1> ${t.name} </h1>
    <h1> ${t.age} </h1>
    <h1> ${t.add} </h1>
    
    
    
    `).join("")

    document.querySelector('#showdata').innerHTML = final_data

 }

 fet()