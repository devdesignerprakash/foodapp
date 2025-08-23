
import { Button } from "@shadcn/components/ui/button";
import { Input } from "@shadcn/components/ui/input";
import { Separator } from "@shadcn/components/ui/separator";
import { Loader, LocationEditIcon, LockKeyhole, Mail, Phone, User } from "lucide-react";
import React, { useState, type FormEvent } from "react";
import {Link} from "react-router-dom";
import { RegisterSchema, type RegisterInputState } from "../schemas/User";
import { flattenError } from "zod";

const Register = () => {
  const loading = false;
  const [userDetails,setUserDetails]=useState<RegisterInputState>({
    fullName:"",
    address:"",
    email:"",
    password:"",
    phoneNumber:""
  })
  const [error, setError]=useState<Partial<RegisterInputState>>({})
  const inputHandler =(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target
    console.log(name,value)
    setUserDetails((prev)=>({...prev,[name]:value}))

  }
  const submitHandler=(e:FormEvent)=>{
    e.preventDefault()
    const result=RegisterSchema.safeParse(userDetails)
      if(!result.success){
          const {fieldErrors}=flattenError(result.error)
          console.log(fieldErrors as Partial<RegisterInputState>)
          setError(fieldErrors as Partial<RegisterInputState>)
        return;
    }
  
  }
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <form
        action=""
        className=" md:p-8 p-4 w-full border max-w-md rounded-lg md:border border-gray-200 mx-4"
        onSubmit={submitHandler}
      >
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Mudkina Eats</h1>
        </div>
        {/* full Name */}
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              name="fullName"
              value={userDetails.fullName}
              placeholder="Enter your Full Name"
              onChange={inputHandler}
              className="pl-10 focus-visible:ring-0"
            />
            <User className="absolute inset-y-2 left-2 text-gray-500" />
            {error.fullName && <span className="text-red-500 text-sm">{error.fullName}</span>}
          </div>
        </div>
        {/* Address */}
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              name="address"
              onChange={inputHandler}              
              value={userDetails.address}
   placeholder="Enter your Address"
              className="pl-10 focus-visible:ring-0"
            />
            <LocationEditIcon className="absolute inset-y-2 left-2 text-gray-500" />
            {error.address && <span className="text-red-500 text-sm">{error.address}</span>}
          </div>
        </div>
        {/* Phone Numer */}
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              name="phoneNumber"
              onChange={inputHandler}
              value={userDetails.phoneNumber}
              placeholder="Enter your Phone Number"
              className="pl-10 focus-visible:ring-0"
            />
            <Phone className="absolute inset-y-2 left-2 text-gray-500" />
            {error.phoneNumber && <span className="text-red-500 text-sm">{error.phoneNumber}</span>}
          </div>
        </div>
        
        {/* Email input */}
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              name="email"
              onChange={inputHandler}
              value={userDetails.email}
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
              name="password"
              onChange={inputHandler}
              value={userDetails.password}
              placeholder="Enter your Password"
              className="pl-10 focus-visible:ring-0"
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500" />
            {error.password && <span className="text-red-500 text-sm">{error.password}</span>}
          </div>
        </div>
        <div className="mb-10">
          {loading ? (
            <Button className="custom-btn w-full">
              <Loader className="mr-4 h-4 w-4 animate-spin" /> Please Wait....
            </Button>
          ) : (
            <Button className="custom-btn w-full" type="submit">Register</Button>
          )}
        </div>
        <Separator/>
        <p className="mt-10"> Already have an account? {" "}
            <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
