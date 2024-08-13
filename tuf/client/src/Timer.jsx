import { useContext, useEffect, useState } from "react"
import { BannerContext } from "./BannerContext";

const Timer = () => {
    const {banner,setBanner} = useContext(BannerContext);
    const [time,setTime] = useState(new Date());
    const [timer,setTimer] = useState(null);
    const [title,setTitle] = useState(null);
    const getData = async ()=>{
      const res = await fetch("https://tufbackend-docm.onrender.com/getRows");
      const response = await res.json();
      // if(on!=response[0].BannerVisibility)setOn(response[0].BannerVisibility);
      if(time!=response[0].BannerTime)setTime(new Date(response[0].BannerTime));
      // if(link!=response[0].BannerLink)setLink(response[0].BannerLink);
      if(title!=response[0].BannerTitle)setTitle(response[0].BannerTitle);
      setBanner(response[0]);
      console.log(response[0]);
    }

    const months ={
      0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"
    }
    
    const left = (diff)=>{
      if(diff<0)return "Event started";
      let seconds = Math.floor(diff/1000) %60
      let minutes = Math.floor( diff/1000 /60 )%60;
      let hours = Math.floor( diff/1000 /60 /60 )%24;
      let days = Math.floor( diff/1000 /60 /60 /24 );
      
      return `${days>=10? `${days}`:`0${days}` } ${days==1?'Day':'Days'} ${hours>=10? `${hours}`:`0${hours}` }:${minutes>=10?`${minutes}`:`0${minutes}` }:${seconds>=10? `${seconds}`:`0${seconds}`}`;
    }
    
    // useEffect(()=>{
      
    // },[])

    useEffect(()=>{
      // if(banner.BannerTime!=null){
      //   setTime(new Date(banner.BannerTime));
      // }
      getData();
    },[])

    useEffect(()=>{
      setTime(new Date(banner.BannerTime));
      console.log("new",banner.BannerTime)
      setTitle(banner.BannerTitle);
      const interval = setInterval(()=>{
        if(time){
          let diff = time - new Date();
          let s = left(diff);
          setTimer(s);
        }
        console.log("time",time.getMonth());
      },1000)

      return()=>{
        clearInterval(interval);
      }
    },[banner])

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="text-white text-3xl p-4 pb-12 m-4"> {title} </div> 
      {timer && <div className="text-2xl text-center text-white p-4 w-fit rounded-full bg-[#e11d48] " > {timer} </div>}
      {time && <div className="text-lg pt-2 text-white text-center" > Starts on<i> {time?.getDate()} {months[time?.getUTCMonth()]} {time?.getFullYear()}</i> at<i> {time?.getHours()<10?`0${time?.getHours()}`:time?.getHours()}:{time?.getMinutes()}:{time?.getSeconds()} </i> </div>}
    </div>
  )
}
export default Timer