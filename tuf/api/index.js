const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2')
app.use(cors());
app.use(express.json());

const mysqluri= "mysql://avnadmin:AVNS_SK3s2qzq__67QyqwEEY@tuf-1234-itsmellucas-1234.k.aivencloud.com:28395/tuf?ssl-mode=REQUIRED"

var connection = mysql.createConnection(mysqluri)

connection.connect((err)=>{
    if(err)console.log(err);
    else console.log("Connected");
})

app.listen(3000,()=>{
    console.log(`Listening on port 3000`);
});

// app.get('/test',(req,res)=>{
//     connection.query("SELECT VERSION()",(error,rows,fields)=>{
//         if(error){
//             console.log(error);
//             res.send(error);
//         }
//         else{
//             console.log(rows);
//             console.log("successful");
//             res.send("Success");
//         }
//     })
// })

// app.post('/currentState',(req,res)=>{
//     console.log(req.body);
//     let query = `select * from Banner`;
//     connection.query(query, (error,rows,fields)=>{
//         if(error){
//             console.log(error);
//             res.send(error);
//         }
//         else{
//             console.log(rows);
//             console.log(fields);
//             console.log("successful");
//             res.send("Success");
//         }
//     } )
// })

app.post('/update',(req,res)=>{

    console.log(req.body);
    console.log(date);
    console.log(on);
    console.log(title)
    console.log(link);

    // date = `${date}`
    // link = `${link}`
    const query =`UPDATE Banner SET BannerTitle='${title}', BannerTime='${date}', BannerVisibility=${on}, BannerLink='${link}' WHERE BannerId=1`

    connection.query(query,(error,rows,fields)=>{
        if(error){
            console.log(error);
            res.send(error);
        }
        else{
            console.log(rows);
            console.log(fields);
            // console.log("successful");
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

// app.get('/create',(req,res)=>{
//     // let table = req.params.table;

//     const que = `ALTER TABLE Banner CHANGE BannerImage BannerTitle varchar(255);`

//     connection.query(que,(error,rows,fields)=>{
//         if(error){
//             console.log(error);
//             res.send(error);
//         }
//         else{
//             console.log(rows);
//             console.log(fields);
//             console.log("successful");
//             res.send("Success");
//         }
//     })

// })