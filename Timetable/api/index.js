const express = require('express');
const { default: mongoose, mongo } = require('mongoose');
const cors = require('cors');
const cookieParser= require('cookie-parser');

const dburl = "mongodb+srv://itsmellucas:gvJ3nDqUGs6npL06@cluster0.khmio3f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use('/uploads',express.static(__dirname+'/uploads'));

mongoose.connect(dburl);

app.get('/test', (req,res)=>{
    res.json('Test ok');
})

app.use('/h',require('./routes/Auth'))

var port = process.env.PORT || 5001;


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});