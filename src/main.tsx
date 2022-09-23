import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home'
import FakeHome from './routes/FakeHome';
import HeaderBar from './components/HeaderBar'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <FakeHome />,
  },
  {
    path: "/contact",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
