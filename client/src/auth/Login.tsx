
import { Button } from "@shadcn/components/ui/button";
import { Input } from "@shadcn/components/ui/input";
import { Separator } from "@shadcn/components/ui/separator";
import { Loader, LockKeyhole, Mail } from "lucide-react";
import {Link} from "react-router-dom";

const Login = () => {
  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <form
        action=""
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
              placeholder="Enter your Email"
              className="pl-10 focus-visible:ring-0"
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500" />
          </div>
        </div>
        {/* password Input */}
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              placeholder="Enter your Password"
              className="pl-10 focus-visible:ring-0"
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500" />
          </div>
        </div>
        <div className="mb-10">
          {loading ? (
            <Button className="w-full">
              <Loader className="mr-4 h-4 w-4 animate-spin" /> Please Wait....
            </Button>
          ) : (
            <Button className="w-full">Login</Button>
          )}
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
