import { Button } from "@shadcn/components/ui/button"
import { Input } from "@shadcn/components/ui/input"
import { Mail } from "lucide-react"




const ForgetPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full ">
        <form action="" className="flex flex-col gap-5 items-center md:border md:p-8 w-full max-w-md rounded-lg">
            <h1 className="text-2xl font-bold">Forget Password</h1>
            <p className="text-gray-500 text-sm">Enter your email to reset your password</p>
            <div className="w-full relative">
                <Input type="email" placeholder="Enter your email" className="w-full pl-9"/>
                <Mail className="absolute inset-y-2 left-2 text-gray-500" />
            </div>
            <Button className="w-full">Reset Password</Button>
        </form>
    </div>
  )
}

export default ForgetPassword