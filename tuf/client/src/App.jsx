import { useContext, useEffect, useState } from "react"
import Banner from "./Banner"
import Navbar from "./Navbar"
import { Route, Routes } from "react-router-dom";
import BannerSettings from "./BannerSettings";
import { BannerContext } from "./BannerContext";


function App() {
  const {banner,setBanner} = useContext(BannerContext);

  const getData = async ()=>{
    const res = await fetch("http://localhost:3000/getRows");
    const response = await res.json();
    setBanner(response[0]);
    // setOn(response[0].BannerVisibility);
    // setTime(response[0].BannerTime);
    // console.log(response[0]);
  }

  const [pos, setPos] = useState({x:0,y:0});

  useEffect(()=>{
    console.log(banner)
  })

  useEffect(()=>{
    getData();
  },[])

  return (
<>
  <Navbar/>
  {/* <div className={` w-[300px] h-[300px] round-grad z-10 rounded-full bg-white absolute top-[40%] left-[60%]`} >
  </div> */}
  <div className="p-6 pt-6 flex justify-center w-full">
      <Routes>
        <Route path="/set" element={<BannerSettings/>} />
        <Route path="/" element={<Banner/>}/>
      </Routes>
    
  </div>
</>
  )
}

export default App
