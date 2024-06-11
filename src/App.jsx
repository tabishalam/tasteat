import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HomePage from "./pages/Home/Home";
import UserLayout from './layout/UserLayout';

import './App.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      { 
        index: true, 
        element: <HomePage />
      },
    ]
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App
