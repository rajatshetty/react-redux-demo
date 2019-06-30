const express = require('express')
const app = express()
const port = 4000
var cors = require('cors')

app.use(cors())

var list = ["item1", "item2", "item3", "item4"];
var todos = [{"_id":"1","title": "onetitle", "description": "onedesp", "date":"2019-06-17T10:26:49.254Z"}];

app.use(express.json())

app.get('/api/getlist', (req, res) => {
    res.json(list)
})

app.post('/api/additem', (request, response) => {
    console.log(request.body.item);
    list.push(request.body.item);
    response.send("added the data");

})

app.get('/api/todos', (req, res) => {
    res.json(todos)
})

app.post('/api/todos', (request, response) => {
    console.log(request.body);
    todos.push(request.body);
    response.send("added the data");

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))