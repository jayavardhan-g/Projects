import { useContext, useEffect, useState } from "react"
import Banner from "./Banner"
import Navbar from "./Navbar"
import { Route, Routes } from "react-router-dom";
import BannerSettings from "./BannerSettings";
import { BannerContext } from "./BannerContext";


function App() {
  const {banner,setBanner} = useContext(BannerContext);

  const getData = async ()=>{
    const res = await fetch("http://https://tufbackend-docm.onrender.com/getRows");
    const response = await res.json();
    setBanner(response[0]);
  }

  // const clicked= async ()=>{

  //   const data = {HI:"Hi"};

  //   const res = await fetch("https://tufbackend-docm.onrender.com/test",{
  //     method:"post",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body:JSON.stringify(data)
  //   })
  // }

  const [pos, setPos] = useState({x:0,y:0});

  useEffect(()=>{
    getData();
  },[])

  return (
<>
  <Navbar/>

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
