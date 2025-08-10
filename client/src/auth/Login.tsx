
import { Button } from "@shadcn/components/ui/button";
import {useState, type FormEvent} from 'react'
import { Input } from "@shadcn/components/ui/input";
import { Separator } from "@shadcn/components/ui/separator";
import { Loader, LockKeyhole, Mail } from "lucide-react";
import {Link} from "react-router-dom";
import { LoginSchema, type LoginInputState } from "../schemas/User";
import { flattenError } from "zod";

const Login = () => {
  const loading = false;
  const [input,setInput]=useState<LoginInputState>({
      email:"",
      password:"",
    })
    const [error, setError]=useState<Partial<LoginInputState>>({})
    const inputHandler =(e:React.ChangeEvent<HTMLInputElement>)=>{
      const {name,value}=e.target
      console.log(name,value)
      setInput((prev)=>({...prev,[name]:value}))
  
    }
    const submitHandler=(e:FormEvent)=>{
      e.preventDefault()
      const result=LoginSchema.safeParse(input)
        if(!result.success){
            const {fieldErrors}=flattenError(result.error)
            console.log(fieldErrors as Partial<LoginInputState>)
            setError(fieldErrors as Partial<LoginInputState>)
          return;
      }
    }
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <form
       onSubmit={submitHandler}
        className=" md:p-8 p-4 w-full border max-w-md rounded-lg md:border border-gray-200 mx-4"
      >
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Mudkina Eats</h1>
        </div>
        {/* Email input */}
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              name="email"
              onChange={inputHandler}
              value={input.email}
              placeholder="Enter your Email"
              className="pl-10 focus-visible:ring-0"
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500" />
            {error.email && <span className="text-red-500 text-sm">{error.email}</span>}
          </div>
        </div>
        {/* password Input */}
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              onChange={inputHandler}
              name="password"
              value={input.password}
              placeholder="Enter your Password"
              className="pl-10 focus-visible:ring-0"
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500" />
            {error.password && <span className="text-red-500 text-sm">{error.password}</span>}
          </div>
        </div>
        <div className="mb-10">
          {loading ? (
            <Button className="w-full">
              <Loader className="mr-4 h-4 w-4 animate-spin" /> Please Wait....
            </Button>
          ) : (
            <Button className="w-full" type="submit">Login</Button>
          )}
          <div className="mt-4">
            <Link to="/forget-password" className="text-sm text-blue-500">Forgot Password</Link>
          </div>
        </div>
        <Separator/>
        <p> Don't have Account?{" "}
            <Link to="/register" className="text-blue-500">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
