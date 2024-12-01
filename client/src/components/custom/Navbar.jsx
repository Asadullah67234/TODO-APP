import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { ArrowDown, Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-5 py-2 shadow-md mx-10 my-2">
        <div>
          <Avatar className="cursor-pointer w-12 h-12">
          <Link to="/">
          <AvatarImage src="https://github.com/shadcn.png"/>
          </Link>  
          </Avatar>
        </div>
        <Menubar className="border-none hidden md:flex">
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">
              <Link to="/">HOME</Link>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <div>
          <Menubar className="rounded-full hidden md:flex">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">
                <ArrowDown className="w-4 h-4" />
              </MenubarTrigger>
              <MenubarContent className="bg-white p-2 rounded-md mx-12 my-2">
                <MenubarItem className="cursor-pointer font-bold">
                  <Link to="/profile">Profile</Link>
                </MenubarItem>
                <MenubarItem className="cursor-pointer">
                  <Button variant="link" className="w-full">
                    <Link>Logout</Link>
                  </Button>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent className="w-full sm:w-1/2">
              <SheetHeader>
                <SheetTitle>TODO APP</SheetTitle>
                <SheetDescription>
                  <Link to="/">
                    <Button variant="link" className="w-full">
                      Home
                    </Button>
                  </Link>
                  <Link to="/profile">
                    <Button variant="link" className="w-full">
                      Profile
                    </Button>
                  </Link>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Navbar;
