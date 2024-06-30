'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Image, Avatar} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import AvatarDropdown from "../avatarDropdown/page";
import Link from "next/link";


export default function NavBar() {
  const {isLoggedIn,userDetails} = useSelector(state=>state.user)

  const router = useRouter()
  const handleLogin =()=>{
    router.push('/login')
  } 


  return (
    <Navbar className="bg-black text-white" shouldHideOnScroll>
      <NavbarBrand>
       
        <p className="font-bold text-inherit">
        <Image src="instantlogo.png" alt="logo" className='w-20 h-20 mx-40' />
          
        </p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
       { userDetails.role !== 'rider' && (
         <NavbarItem>
         <Link className="text-white text-sm" color="foreground" href="/">
           Ride
         </Link>
       </NavbarItem>
       )
       }
        { userDetails.role === 'rider' && (
        <NavbarItem  >
          <Link href="/rider-dashboard" className="text-white text-sm" color="foreground">
            Drive
          </Link>
        </NavbarItem>
        )}
        <NavbarItem>
          <Link color="foreground"className="text-white text-sm" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {isLoggedIn ? (
          <AvatarDropdown/>
        ) : (
          <NavbarItem>
      <Button onClick={handleLogin} className="bg-white text-black"> Login</Button>
      </NavbarItem>
        )}
      
      </NavbarContent>
    </Navbar>
  );
}
