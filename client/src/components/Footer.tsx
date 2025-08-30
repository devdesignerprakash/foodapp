import { date } from "zod"

const Footer = () => {
    const date= new Date();
  return (
    <div className="bg-gray-900 text-white w-full h-40">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center items-center">
            <p className="text-lg font-semibold">© {date.getFullYear()} Mudkina Eats. All rights reserved.</p>
            <p className="text-sm text-gray-400">Designed and Developed by Prakash Neupane</p>
        </div>
    </div>
  )
}

export default Footer