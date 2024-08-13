import { useEffect, useState } from "react"
import Timer from "./Timer"
import { Link } from "react-router-dom";

const Banner = () => {
  
  const [on,setOn] = useState(false);
  const [time,setTime] = useState("");
  const [link,setLink] = useState('/');

  const getData = async ()=>{
    const res = await fetch("https://tufbackend-docm.onrender.com/getRows");
    const response = await res.json();
    if(on!=response[0].BannerVisibility)setOn(response[0].BannerVisibility);
    if(time!=response[0].BannerTime)setTime(response[0].BannerTime);
    if(link!=response[0].BannerLink)setLink(response[0].BannerLink);
    console.log(response[0]);
  }

  useEffect(()=>{
    getData();
  })
  
  return (
<> 
    {on && 
    <a href={`${link}`} className=" w-full" >
      <div className="p-4 w-full h-[500px] bg-[#191919] rounded-xl border-[1px] border-[#27272a] hover:border-[#ffffff] " >
          
          <div className="flex w-full h-full justify-center items-center">
            <Timer data={time}/>
          </div>
      </div>
    </a>
    }
    <div>
      <div className="text-white mt-16 p-4 m-4 bg-[#34bdf4] rounded-xl">
        <Link to="/set">
          Update Banner
        </Link>
      </div>
    </div>
</>
  )
}
export default Banner