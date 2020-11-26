const express = require(`express`)
const app = express()
const path = require(`path`)



app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]




app.get('/', function(req, res){
    console.log(`hello first visitor`);
    res.send("Server is up and running smoothly")
})



app.get(`/priceCheck/:name`, function(req, res){
    let name = req.params.name
    let prodactPrice = {price: null}
    for (let prodact of store){
        if (prodact.name === name ){
            prodactPrice = {price: prodact.price}
        }
    }
    res.send(prodactPrice)
})


app.get(`/buy/:name`, function(req, res){
    let name = req.params.name
    for (let prodact of store){
        if (prodact.name === name ){
            prodact.inventory -= 1
            res.send(`Enjoy ! you purchased a ${prodact.name} for ${prodact.price} Shekels <br> ${prodact.inventory} units left in stock` )
        }
    }
    res.end()
})



const port = 3000
app.listen(port, function(){
    console.log(`running server on ${port}`);
})