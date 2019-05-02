const express = require('express');
const app = express();
const db = require('./models')
// const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/icecreamdb" 

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
 


// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/', express.static(__dirname + '/static'));

app.get('/',(req,res)=>{
    db.IceCream.find({}).then(iceCreams=>{
        res.json(iceCreams)
    })
})

app.post('/',(req,res)=>{
    db.IceCream.create({
        flavor: req.body.flavor,
        eaten:false
    }).then(newIceCream=>{
        res.json(newIceCream)
    })
})
 
app.listen(PORT);