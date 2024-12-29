const response = require('express')

fetch('http://localhost:3000/api/student',{
    method : 'POST',
    headers :{
        "Content-Type":"application/json"
    },
    body :JSON.stringify({
        name : 'Dori',
        email : 'dori@gmail.com',
        phone : '0888888815'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error =>console.log(error))