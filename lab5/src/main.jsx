import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav'
import Welcome from './Welcome'
import Idea from './Idea'
import Info from './Info'
import FAQ from './FAQ'
import Contact from './Contact'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Welcome/>
	},
	{
		path: "Idea",
		element: <Idea/>
	},
   {
		path: "Info",
		element: <Info/>
	},
	{
		path: "FAQ",
		element: <FAQ/>
	},
    {
		path: "Contact",
		element: <Contact/>
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)