
import { createBrowserRouter } from "react-router-dom";
import Login from '../auth/Login';
import MainLayout from '../components/MainLayout'
import Register from "../auth/Register";
import ForgetPassword from "../auth/ForgetPassword";
import ResetPassword from "../auth/ResetPassword";
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
  },
  {
    path:"/forget-password",
    element:<ForgetPassword/>
  }
  ,{
    path:"/reset-password",
    element:<ResetPassword/>
  }

 ])
 export default appRouter;