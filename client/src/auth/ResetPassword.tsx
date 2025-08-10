import { Button } from "@shadcn/components/ui/button"
import { Input } from "@shadcn/components/ui/input"
import { Loader, LockKeyhole } from "lucide-react"
import { Link } from "react-router-dom"

const ResetPassword = () => {
    const loading=false;
  return (
    <div className="flex items-center justify-center min-h-screen w-full ">
        <form action="" className="flex flex-col gap-5 items-center md:border md:p-8 w-full max-w-md rounded-lg">
            <h1 className="text-2xl font-bold">Reset Password</h1>
            <p className="text-gray-500 text-sm">Enter your New password to reset your password</p>
            <div className="w-full relative">
                <Input type="password" placeholder="Enter your New Password" className="w-full pl-9"/>
                <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500" />
            </div>
            <div className="w-full">
            {loading ? (
                <Button className="w-full" disabled>
                    <Loader className="mr-4 h-4 w-4 animate-spin" /> Please Wait....
                </Button>
            ) : (
                <>
                <Button className="w-full" type="submit">Reset Password</Button>
                </>
                
            )}
            <span className="text-gray-500 text-sm">Back to {" "}<Link to="/login" className="text-blue-500 text-sm">Login</Link></span>
            </div>
        </form>
    </div>
  )
}

export default ResetPassword