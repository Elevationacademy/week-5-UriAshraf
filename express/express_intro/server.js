const express = require('express')
const app = express()
const path = require('path')

const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}

// serve files 

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


// listening

//route - root base 

app.get('/books/:bookID', function(req, res){

    res.send(data[req.params.bookID])
})

app.get('/details', function(req, res){
    const query = req.query
    res.send(req.query)
})

const port = 3000
app.listen(port, function(){
    console.log("server in running "+ port)
})