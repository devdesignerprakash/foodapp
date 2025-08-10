
import { createBrowserRouter } from "react-router-dom";
import Login from '../auth/Login';
import MainLayout from '../components/MainLayout'
import Register from "../auth/Register";
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      // {
      //   path:"/login",
      //   element:<Login/>
      // }
    ]
  },

  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  }

 ])
 export default appRouter;