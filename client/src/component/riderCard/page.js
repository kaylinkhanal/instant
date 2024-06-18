'use client'
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function RiderCard(props) {
  const router=  useRouter()
  return (
    <Card className="py-4 m-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{props.title}</h4>
      </CardHeader>
      <CardBody  onClick={()=>router.push(props.link)} className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={props.image}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
