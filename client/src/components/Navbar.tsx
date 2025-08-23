import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "@shadcn/components/ui/avatar";
import { Button } from "@shadcn/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@shadcn/components/ui/dropdown-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@shadcn/components/ui/menubar";
import { Separator } from "@shadcn/components/ui/separator";
import { Sheet,  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@shadcn/components/ui/sheet";
import { CookingPot,  HandPlatter,  Loader2, Menu,  ShoppingCart, SquareMenu, Sun, User, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const admin = true;
  const loading=false;
  return (
    <div className="md:max-w-7xl mx-auto">
      <div className="flex items-center justify-between h-14">
        <Link to="/">
          <h1 className="font-bold md:font-extrabold text-2xl">Mudkina Eats</h1>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="order/status">Order</Link>
          {/* dashboard menu */}
          {admin && (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Dashboard</MenubarTrigger>
                <MenubarContent>
                  <Link to="#">
                    <MenubarItem>Restaurant</MenubarItem>
                  </Link>
                  <Link to="#">
                    <MenubarItem>Menu</MenubarItem>
                  </Link>
                  <Link to="#">
                    <MenubarItem>Orders</MenubarItem>
                  </Link>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          )}
        </div>
        <div className="flex items-center gap-4">
          {/* //dropdownmenu */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* end of drop down */}

          {/* cart */}
          <Link to="/cart" className="relative">
            <Button
              size={"icon"}
              className="absolute -inset-y-3 bg-red-600 left-2 rounded-full h-4 w-4 hover:bg-red-500 text-xs"
            >
              0
            </Button>
            <ShoppingCart />
          </Link>
          {/* end of cart */}
          {/* avatar */}
          <div>
            <Avatar>
              <AvatarImage />
              CN
            </Avatar>
          </div>
          {/* end of avatar */}
          <div>
            {loading ? (
              <Button className="custom-btn" disabled>
                <Loader2 className="mr-2 w-4 h-4 animate-spin "/>
                Please Wait
              </Button>
            ) : (
              <Button className="custom-btn">Logout</Button>
            )}
          </div>
        </div>
        </div>
        {/* mobile responsive */}
        <div className="md:hidden lg:hidden">
          <MobileMenu/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


export const MobileMenu=()=>{
  // const admin=true;
  return(
    <>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Menu/></Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Mudkina Eats</SheetTitle>
        </SheetHeader>
        <Separator/>
         <SheetDescription className="flex-1">
           <Link to="" className="flex items-center gap-2 hover:bg-gray-300 cursor-pointer rounded-lg px-3 py-2 hover:text-gray-800">
           <User/>
           <span>Profile</span>
           </Link>
           <Link to="" className="flex items-center gap-2 hover:bg-gray-300 cursor-pointer rounded-lg px-3 py-2 hover:text-gray-800">
           <HandPlatter/>
           <span>Order</span>
           </Link>
           <Link to="" className="flex items-center gap-2 hover:bg-gray-300 cursor-pointer rounded-lg px-3 py-2 hover:text-gray-800">
           <UtensilsCrossed/>
           <span>Restaurant </span>
           </Link>
           <Link to="" className="flex items-center gap-2 hover:bg-gray-300 cursor-pointer rounded-lg px-3 py-2 hover:text-gray-800">
           <SquareMenu/>
           <span>Menu </span>
           </Link>
           <Link to="" className="flex items-center gap-2 hover:bg-gray-300 cursor-pointer rounded-lg px-3 py-2 hover:text-gray-800">
           <ShoppingCart/>
           <span>Cart(0) </span>
           </Link>
           <Link to="" className="flex items-center gap-2 hover:bg-gray-300 cursor-pointer rounded-lg px-3 py-2 hover:text-gray-800">
           <CookingPot/>
           <span>Restaurant Orders</span>
           </Link>
          </SheetDescription>
        <SheetFooter className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <Avatar className="items-center">
              <AvatarImage/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h5 className="font-bold text-sm">Mudikina</h5>
          </div>
          <Button className="custom-btn" type="submit">Logout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>    
</>
  )

}
