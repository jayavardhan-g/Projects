const cron = require('cron')
const https = require('https')

const backendurl= 'http://https://tufbackend-docm.onrender.com'
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
})

module.exports={job}