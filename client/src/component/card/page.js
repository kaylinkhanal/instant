'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CustomCard(props) {
    const {price, distance, riderId, pickUp, destination} = props.item
  return (
    <Card className="max-w-[400px] m-2">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{pickUp} to {destination}</p>
          <p className="text-small text-default-500">Bike</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>
         <strong>Price: </strong>   Rs. {price}
        </p>
        <p>
        <strong>Distance: </strong>   {distance}km
        </p>
      
      </CardBody>
      <Divider/>
      <CardFooter>
        Rider: {riderId}
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          View Ride Profile
        </Link>
      </CardFooter>
    </Card>
  );
}
