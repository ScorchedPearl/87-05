"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import { IconMenu,IconX } from '@tabler/icons-react';
import { useState } from "react";
import { navLinks } from "@/constants";
import ModeToggleButton from "./ModeToggle";
const NavItems=()=>{
  return(
   <div>
   <ul className="nav-ul">
      {navLinks.map((link) => (
        <li key={link.id} className="nav-li hover:text-primary">
          <Link href={link.href} className="nav-link_a ">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>

   </div>
  )
}
export default function NavBar(){
 const [isOpen, setIsOpen] = useState(false);
 function menuOpenHandler(){
  setIsOpen((prevIsOpen) => !prevIsOpen);
 }
  return (
   <header className="fixed top-0 left-0 right-0 z-50">
    <div className="max-w-7xl mx-auto">
       <div className="flex justify-between items-center py-5 mx-auto ">
            <Link href="/" className="text-muted-foreground*1.5 font-bold text-xl hover:text-primary transition-colors mx-5">My PortFolio</Link>
            
            <nav className="sm:flex hidden ">
              <NavItems></NavItems>
              <ModeToggleButton ></ModeToggleButton>
            </nav>
            <Button onClick={menuOpenHandler} className="text-primary-foreground hover:text-primary flex md:hidden lg:hidden">
             {isOpen ? <IconX size={6} stroke={2} /> :<IconMenu size={6} stroke={2} />}
            </Button>
       </div>
    </div>
    <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
      <nav className="p-5">
        <NavItems></NavItems>
        <ModeToggleButton></ModeToggleButton>
      </nav>

    </div>
   </header>
  )
}