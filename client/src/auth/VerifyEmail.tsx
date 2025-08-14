import { Button } from "@shadcn/components/ui/button";
import { Input } from "@shadcn/components/ui/input";
import { useRef, useState } from "react";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRef= useRef<(HTMLInputElement | null)[]>([])
 
  const handleChange=(index:number, value:string)=>{
    const newOtp=[...otp]; //copy of otp
    newOtp[index]=value.substring(value.length-1); 
    setOtp(newOtp);
    if(value && index<otp.length-1){
      inputRef.current[index+1]?.focus();
    }
  }
const handleBackkeyPress=(index:number)=>{
  const newOtp=[...otp]; //copy of otp
  newOtp[otp.length-1]="";
  setOtp(newOtp);
  if(otp.length>0){
  inputRef.current[index - 1]?.focus();
  }
 
}

// }
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="p-8 rounded-lg w-full flex flex-col gap-10 border border-gray-200 max-w-md ">
        <div className=" text-center">
          <h1 className="font-extrabold text-lg">Verify Email Address</h1>
          <p className="text-gray-800 text-sm">
            Enter the 6 digits Verification Code
          </p>
        </div>
        <form action="">
          <div className="flex justify-between">
            {otp.map((data:string, index:number) => (
              <Input
                key={index}
                ref={(element)=>{inputRef.current[index]=element}}
                className="md:w-12 md:h-12 w-8 h-8 md:text-2xl font-normal text-center focus:outline-none focus:ring-2"
                type="text"
                maxLength={1}
                value={data}
                onChange={(e)=>handleChange(index, e.target.value)}
                onKeyDown={(e)=>e.key=="Backspace"?handleBackkeyPress(index):null}
              />
            ))}
          </div>
          <div className="w-full mt-2 items-center justify-center">
          <Button className="w-1/2">Verify</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
