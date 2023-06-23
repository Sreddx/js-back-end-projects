const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to the To Do List!')
  })

dummyData = ['Buy groceries', 'Do laundry', 'Clean room', 'Finish homework']

app.get('/to-do', (req, res) => {
    res.send(dummyData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })