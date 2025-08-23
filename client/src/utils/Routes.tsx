
import { createBrowserRouter } from "react-router-dom";
import Login from '../auth/Login';
// import MainLayout from '../components/MainLayout'
import Register from "../auth/Register";
import ForgetPassword from "../auth/ForgetPassword";
import ResetPassword from "../auth/ResetPassword";
import VerifyEmail from "../auth/VerifyEmail";
import Navbar from "../components/Navbar";
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Navbar/>,
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
  },{
    path:"/verify",
    element:<VerifyEmail/>
  }

 ])
 export default appRouter;