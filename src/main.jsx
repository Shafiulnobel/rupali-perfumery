import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Shared from './components/Shared/Shared.jsx';
import Shop from './components/Shop/Shop.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element:<Shared></Shared>
      },
      {
         path:'shop',
         element:<Shop></Shop>
      },
      {
         path:'about',
         element:<About></About>
      },
      {
         path:'contact',
         element:<Contact></Contact>
      },
      {
        path:'*',
        element:<ErrorPage></ErrorPage>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
