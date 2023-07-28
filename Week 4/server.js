const express = require ('express');
const bodyParser = require('body-parser');
const {notesRouter} = require('./Routes/noteRoutes');

const app  = express()

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())
app.use('/notes', notesRouter)

app.use((err, req, res, next)=>{
    res.json({Error: err})
})

app.listen(4500, ()=>{
    console.log('Server running on port 4500');
})