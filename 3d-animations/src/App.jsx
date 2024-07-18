import { Suspense, useRef } from "react";
import AstronautCanvas from "./components/Astronaut"
import EarthCanvas from "./components/Earth";
import HolotechCanvas from "./components/Holotech";
import SpacestationCanvas from "./components/Spacestation";
import { Outlet } from "react-router-dom";
import Dots from "./pages/Dots";

const App = () => {
  return (
<>
<div className="h-screen z-50">
  <Suspense fallback={<div>Hi</div>} >
    <Outlet/>
  </Suspense>
</div>
{/* <Outlet/> */}
</>
  )
}
export default App