import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { Button, Input } from '@nextui-org/react';


const DashboardCard = (props) => {
    const { selectedVehicle } = useSelector(state => state.ride);
    const defaultPrice = props.totalPrice; 
    const [totalPrice, setTotalPrice] = useState(defaultPrice);

    const increasePrice = () => {
        const newPrice = totalPrice * 1.02;
        if (newPrice <= defaultPrice * 1.02) {
            setTotalPrice(newPrice);
        }
    };

    const decreasePrice = () => {
        const newPrice = totalPrice / 1.02;
        if (newPrice >= defaultPrice / 1.02) {
            setTotalPrice(newPrice);
        }
    };

    return (
        <div>
            <div style={{ position: 'relative', top: '100px', zIndex: 99 }} className='flex p-2 bg-white shadow-lg m-12'>
                <div className='text-4xl w-[40%] p-12'>
                    <strong>Faster</strong> <br /> more convenient<br /> in a new way
                    <Input className='my-6' placeholder='Enter PickUp Address' />
                    <Input placeholder='Enter Destination Address' />
                    <Button className="bg-black rounded-none text-white my-6">Search Rides</Button>
                </div>
                <div className='p-4'>
                    <Image src={"/" + selectedVehicle + '.png'} className='h-[300] ' height={500} width={500} />
                    <div className='p-2 border bg-black text-white border-black m-2'>
                        Estimated Price:  
                        <Button onClick={decreasePrice} className='bg-white text-black m-2 text-2xl'>-</Button>  
                        {totalPrice.toFixed()}  
                        <Button onClick={increasePrice} className='bg-white text-black m-2 text-2xl'>+</Button>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCard;
