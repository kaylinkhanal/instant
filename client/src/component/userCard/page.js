'use client'
import React from "react";
import {User} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "@/redux/reducerSlices/chatSlice";

export default function UserCard(props) {
  const dispatch =  useDispatch()
  return (
    <User   
      onClick={()=> dispatch(setSelectedUser(props.item))}
      name={props.item.fullName}
      description="Product Designer"
      className="m-4"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
  );
}
