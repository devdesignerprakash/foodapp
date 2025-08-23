import { Button } from "@shadcn/components/ui/button"
import { Input } from "@shadcn/components/ui/input"
import { Link2Icon, Loader, Mail } from "lucide-react"
import { Link } from "react-router-dom"

const ForgetPassword = () => {
    const loading=false;
  return (
    <div className="flex items-center justify-center min-h-screen w-full ">
        <form action="" className="flex flex-col gap-5 items-center md:border md:p-8 w-full max-w-md rounded-lg">
            <h1 className="text-2xl font-bold">Forget Password</h1>
            <p className="text-gray-500 text-sm">Enter your email to reset your password</p>
            <div className="w-full relative">
                <Input type="email" placeholder="Enter your email" className="w-full pl-9"/>
                <Mail className="absolute inset-y-2 left-2 text-gray-500" />
            </div>
            <div className="w-full relative">
            {loading ? (
                <Button className="custom-btn w-full" disabled>
                    <Loader className="mr-4 h-4 w-4 animate-spin" /> Please Wait....
                </Button>
            ) : (
                <>
                <Button className=" custom-btn w-full" type="submit">Send Reset Link</Button>
                <Link2Icon className="absolute left-27 top-1.75 text-white" />
                </>
                
            )}
            <span className="text-gray-500 text-sm">Back to {" "}<Link to="/login" className="text-blue-500 text-sm">Login</Link></span>
            </div>
        </form>
    </div>
  )
}

export default ForgetPassword