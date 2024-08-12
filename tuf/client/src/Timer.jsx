import { useContext, useEffect, useState } from "react"
import { BannerContext } from "./BannerContext";

const Timer = () => {
    const {banner,setBanner} = useContext(BannerContext);
    const [time,setTime] = useState(null);
    const [timer,setTimer] = useState("");
    
    const months ={
      1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"
    }
    
    const left = (diff)=>{
      if(diff<0)return "Event started";
      let seconds = Math.floor(diff/1000) %60
      let minutes = Math.floor( diff/1000 /60 )%60;
      let hours = Math.floor( diff/1000 /60 /60 )%24;
      let days = Math.floor( diff/1000 /60 /60 /24 );
      
      
      return `${days>=10? `${days}`:`0${days}` } ${days==1?'Day':'Days'} ${hours>=10? `${hours}`:`0${hours}` }:${minutes>=10?`${minutes}`:`0${minutes}` }:${seconds>=10? `${seconds}`:`0${seconds}`}`;
    }
    
    useEffect(()=>{
      if(banner.BannerTime!=null){
        setTime(new Date(banner.BannerTime));
        setInterval(()=>{
          if(time){let diff = time - new Date();
          
          let s = left(diff);
          setTimer(s);}
          // console.log("running from dependency array 0")
        },1000)
      }
    },[banner])

    useEffect(()=>{})


  return (
    <div className="flex justify-center flex-col ">
      <div className="text-3xl text-white p-4 rounded-full bg-[#e11d48] " > {timer} </div>
      <div className="text-xl pt-2 text-white text-center" > {time?.getDate()} {months[time?.getUTCMonth()]} {time?.getFullYear()} {time?.getHours()<10?`0${time?.getHours()}`:time?.getHours()}:{time?.getMinutes()}:{time?.getSeconds()} </div>
    </div>
  )
}
export default Timer