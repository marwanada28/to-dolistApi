const response = require('express')

fetch('http://localhost:3000/api/student/1', {
    method: 'DELETE',
    headers: {
        "x-api-key": "123"
    },
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))