import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ReactDOM} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements,RouterProvider,Route} 
from'react-router-dom';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} />
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>
)

export default router;