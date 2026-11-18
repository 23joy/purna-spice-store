import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { CencelModal } from './CencelModal';

const MybookingPage = ({ mybooking }) => {
    console.log(mybooking)
    return (
        <div className='flex flex-col gap-5'>
            {
                mybooking.map(booking => <div key={booking?._id}>
                    <div className='flex gap-3'>
                        <Image src={booking?.image}
                            alt={booking?.name}
                            width={100}
                            height={100}
                        ></Image>
                        <div>
                            <h2>{booking?.name}</h2>
                            <p>{booking?.category}</p>
                            <CencelModal bookingId={booking?._id}></CencelModal>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MybookingPage;