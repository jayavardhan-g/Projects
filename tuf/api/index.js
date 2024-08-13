const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const mysqluri= "mysql://avnadmin:AVNS_SK3s2qzq__67QyqwEEY@tuf-1234-itsmellucas-1234.k.aivencloud.com:28395/tuf?ssl-mode=REQUIRED"

var connection = mysql.createConnection(mysqluri)

connection.connect((err)=>{
    if(err)console.log(err);
    else console.log("Connected");
})

app.listen(3000,()=>{
    console.log(`Listening on port 3000`);
});

app.post('/update',(req,res)=>{

    const {date,link,on,title}= req.body;

    const query =`UPDATE Banner SET BannerTitle='${title}', BannerTime='${date}', BannerVisibility=${on}, BannerLink='${link}' WHERE BannerId=1`

    connection.query(query,(error,rows,fields)=>{
        if(error){
            console.log(error);
            res.send(error);
        }
        else{
            console.log(rows);
            // console.log(fields);
            // console.log("successful");
            res.status(200);
            res.send("Success");
        }
    })

})

app.get('/getRows',(req,res)=>{
    console.log("Getting");
    let query = `SELECT * FROM Banner`
    connection.query(query,(error,rows,fields)=>{
        if(error){
            console.log(error);
            res.send(error);
        }
        else{
            console.log(rows);
            console.log(fields);
            console.log("successful");

            res.send(rows);
        }
    })  
})

app.post('/test',(req,res)=>{
    console.log(req);
    res.json(req.body);
})