import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Table from './components/Table.tsx'
import { ContestContextProvider } from './assets/Context.tsx'


const router  = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/:filter',
        element:<Table/>
      },{
        path:'/',
        element:<Table/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContestContextProvider>
      <RouterProvider router={router} />
    </ContestContextProvider>
  </React.StrictMode>,
)
