const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const cron = require('cron');
const https = require('https')

const mysqluri= "mysql://avnadmin:AVNS_SK3s2qzq__67QyqwEEY@tuf-1234-itsmellucas-1234.k.aivencloud.com:28395/tuf?ssl-mode=REQUIRED"

var connection = mysql.createConnection(mysqluri)

connection.config.enableKeepAlive=true;
connection.config.keepAliveInitialDelay=10000;

connection.connect((err)=>{
    if(err)console.log(err);
    else console.log("Connected");
    
})

app.listen(3001,()=>{
    console.log(`Listening on port 3000`);
});

const backendurl= 'https://tufbackend-docm.onrender.com/restart'
const job = new cron.CronJob('*/14 * * * *', ()=>{
    console.log("Restarting server");

    https.
        get(backendurl, (res)=>{
            if(res.statusCode==200){
                console.log("Server restarted");
            }else{
                console.error("Failed to restart server");
            }
        })
        .on('error',(error)=>{
            console.log("Error during restart",error.message);
        })
    
    connection.query(`SELECT 1 + 1 as Solution`, (err,rows)=>{
        if(err)console.log(err);
        else console.log("DB pinged");
    })
    
})

job.start();

app.post('/update',(req,res)=>{

    const {date,link,on,title}= req.body;

    const query =`UPDATE Banner SET BannerTitle='${title}', BannerTime='${date}', BannerVisibility=${on}, BannerLink='${link}' WHERE BannerId=1`

    connection.query(query,(error,rows,fields)=>{
        if(error){
            console.log(error);
            res.send(error);
        }
        else{
            // console.log(rows);
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
            // console.log(rows);
            // console.log(fields);
            console.log("successful");

            res.send(rows);
        }
    })  
})

app.get('/restart',(req,res)=>{
    console.log("Server restarted")
    res.send("Server Restarted")
})