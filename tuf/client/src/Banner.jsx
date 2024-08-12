import { useEffect, useState } from "react"
import Timer from "./Timer"

const Banner = () => {
  
  const [on,setOn] = useState(false);
  const [time,setTime] = useState("");

  const getData = async ()=>{
    const res = await fetch("http://localhost:3000/getRows");
    const response = await res.json();
    setOn(response[0].BannerVisibility);
    setTime(response[0].BannerTime);
    console.log(response[0]);
  }

  useEffect(()=>{
    getData();
  },[])
  
  return (
<> 
    {true && 
    <a href="https://www.google.com" className=" w-full" >
      <div className="p-4 w-full h-[500px] bg-[#191919] rounded-xl border-[1px] border-[#27272a] hover:border-[#ffffff] " >
          
          <div className="flex w-full h-full justify-center items-center">
            <Timer data={time}/>
          </div>
      </div>
    </a>
    }
</>
  )
}
export default Banner