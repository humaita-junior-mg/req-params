const express = require('express')
const app = express()

 
let people = [{id: 0, name: 'Humaitá'}, {id: 1, name: 'Pedro'}, {id: 2, name: 'Fernanda'}, {id: 3, name: 'Beatriz'}]


let names = (req, res)=>{
    res.json(JSON.stringify(people))
} 

app.use(express.urlencoded({extended:false})) 

app.get('/', (req, res)=>{
    res.send('Método funcionou corretamente')
})

 app.get('/people', names) 

 app.get('/people/:id', (req, res)=>{
    let person = people[req.params.id]
    res.json(person)
}) 

app.listen(3000, ()=>{
    console.log('Servidor rodando...')
})