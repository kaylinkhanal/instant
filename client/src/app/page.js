'use client'
import Image from "next/image";
import {Button, Input} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { updateRideCount } from "@/redux/reducerSlices/userSlice";
import { increaseHeight, increaseWidth,changeColor,changeShape,reset, switchArrow } from "@/redux/reducerSlices/boxSlice";

export default function Home() {
  //
  const {width, height,left, backgroundColor,bottom, borderRadius} = useSelector(state=> state.box)
  const dispatch = useDispatch()
  let area
  if(borderRadius === '0%'){
    area = width * height
  }else{
    area = Math.PI * (width/2) **2
  }
 
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between p-4">
     <span className="bg-white text-2xl">{area}</span> 
      <div  onClick={()=> dispatch(changeShape())}
       style={{width,height,backgroundColor,borderRadius, bottom:bottom, left:left, position:'relative'}}>

      </div>

      <Button onClick={()=> dispatch(reset())}>Reset</Button>
      <div className="flex">
    <Button onClick={()=>  dispatch(switchArrow({value:-60, type:'left'}))}> ← </Button>
    <Button onClick={()=>  dispatch(switchArrow({value:60, type:'up'}))}> ↑ </Button>
    <Button onClick={()=>  dispatch(switchArrow({value:-60, type:'down'}))}> ↓ </Button>
    <Button onClick={()=>  dispatch(switchArrow({value:60, type:'right'}))}> → </Button>
    </div>
    <Input onChange={(e)=> dispatch(changeColor(e.target.value)) } placeholder="Enter color"/>
    <Button onClick={()=> dispatch(increaseHeight())}>Increase height</Button>
    <Button onClick={()=> dispatch(increaseWidth())}>Increase width</Button>

 

    
    </main>
  );
}
