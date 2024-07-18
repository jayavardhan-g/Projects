import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SphereCanvas from './pages/Sphere.jsx';
import HolotechCanvas from './components/Holotech.jsx';
import Dots from './pages/Dots.jsx';
import Jayavardhan from './pages/Jayavardhan.jsx';



const router = createBrowserRouter([
{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/sphere',
      element:<SphereCanvas/>
    },
    {
      path:'/holo',
      element:<HolotechCanvas/>
    },{
      path:'/dots',
      element:<Dots/>
    },{
      path:'/me',
      element:<Jayavardhan/>
    }
  ]
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
