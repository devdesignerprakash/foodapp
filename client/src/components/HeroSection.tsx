import { Input } from "@shadcn/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@shadcn/components/ui/button";
import heroImage from '../assets/chowmein.webp'

const HeroSection = () => {
  const [searchText,setSearchText] = useState<string>("");
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-full items-center justify-center">
      <div className="flex flex-col gap-10 md:w-[40%]">
        <div className="flex flex-col gap-5 ">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl ">Order Foods anytime and anywhere</h1>
          <p className="text-gray-500">Fast delivery at your doorstep.Our delecious food is just a click away.</p>
        </div>
        <div className="relative flex times-center gap-2">
          <Input 
            className="pl-9 rounded-full border-gray-300 focus:border-gray-400 focus:ring-0 focus:outline-none" placeholder="Search for food..." 
            type="text" 
            value={searchText}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearchText(e.target.value)}
          />
          <Search className=" text-gray-500 absolute inset-y-2 left-2" />
          <Button className="custom-btn">Search</Button>
        </div>
      </div>
      <div>
        <img src={heroImage} alt="chowmein" className="object-cover w-full max-h-[500px] max-w-[90%]" />
      </div>
    </div>
  );
};

export default HeroSection;
