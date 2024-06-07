import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";


export default function NavBar() {
  return (
    <Navbar className="bg-black text-white" shouldHideOnScroll>
      <NavbarBrand>
       
        <p className="font-bold text-inherit">
        <Image src="instantlogo.png" alt="logo" className='w-20 h-20 mx-40' />
          
        </p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white text-sm" color="foreground" href="#">
            Ride
          </Link>
        </NavbarItem>
        <NavbarItem  >
          <Link href="#" className="text-white text-sm" color="foreground">
            Drive
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground"className="text-white text-sm" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarItem>
      <Button className="bg-white text-black"> Login</Button>
      </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
