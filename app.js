const path = require('path')
const express = require('express')
const app = express()
const port = 3020
const root = path.join(__dirname, 'public')
app.use(express.json()) 
app.use('/api/v1', require('./routes/api/v1/index'))
app.use(express.static('public'))
app.get('/', (__,response) =>{
    response.sendFile('index.html', {root})
})
app.get('/event/:id', (__, response) => {
   response.sendFile('event.html', {root})
})
app.get('/admin', (__, response) => {
   response.sendFile('admin.html', {root})
})
app.listen(port, () => {console.log(`Listening on port ${port}`)})