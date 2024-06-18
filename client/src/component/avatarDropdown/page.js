import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Avatar} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/redux/reducerSlices/userSlice";

export default function AvatarDropdown() {
    const dispatch = useDispatch()
   const { userDetails} = useSelector(state=>state.user)
    const generateShortName= () => {
        const nameArr = userDetails.fullName?.split(' ')
       return nameArr.map((item)=>{ 
        return item[0].toUpperCase()
      }).join('')
      }
  const items = [
    {
      key: "Profile",
      label: "Profile",
    },
    {
      key: "Ride History",
      label: "Ride History",
    },
    {
      key: "Logout",
      label: "Logout",
    }
  ];

  const handleAction =(key)=> {
    if(key === 'Logout'){
       dispatch( logoutUser())
    }

  }

  return (
    <Dropdown>
      <DropdownTrigger>
      
     <Avatar name={generateShortName()} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            onClick={()=>handleAction(item.key)}
            color={item.key === "Logout" ? "danger" : "default"}
            className={item.key === "Logout" ? "text-danger" : ""}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
