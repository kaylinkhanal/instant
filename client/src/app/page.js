'use client'
import Image from "next/image";
import {Button, Input} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { updateRideCount } from "@/redux/reducerSlices/userSlice";
import { increaseHeight, increaseWidth,changeColor } from "@/redux/reducerSlices/boxSlice";

export default function Home() {
  //
  const {width, height, backgroundColor} = useSelector(state=> state.box)
  const dispatch = useDispatch()
  
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between p-4">
  
      <div style={{width,height,backgroundColor}}>

      </div>
    <Input onChange={(e)=> dispatch(changeColor(e.target.value)) } placeholder="Enter color"/>
    <Button onClick={()=> dispatch(increaseHeight())}>Increase height</Button>
    <Button onClick={()=> dispatch(increaseWidth())}>Increase width</Button>

    </main>
  );
}
