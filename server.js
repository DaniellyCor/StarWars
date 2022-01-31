async function getContent () {
    try{
        const response = await fetch('http://localhost:4567/')
        //console.log(response)
        const data = await response.json()
      
        show(data)
    } catch(error){
        console.error(error)
    }
}

getContent()

function show(users) {
let output = ''


for(let user of users) {
    output += `${user}`
}
document.querySelector('main').innerHTML = output
}

</script>

<!--Arquivo server.js está constido no script abaixo-->
<!--Basta recortar a linha 43 até 62 e criar o arquivo-->
<!--O gmail não autoriza o envio de executável .js-->
<script>
const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async(req, res) =>{

try{
const { data } = await axios('https://swapi.dev/api/people/?format=api')   
console.log(data)

return res.json (data)
} catch (error){
console.log("error")
}
})

app.listen('4567')