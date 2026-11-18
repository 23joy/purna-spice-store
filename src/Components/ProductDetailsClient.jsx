'use client'
import { Button, Card, } from '@heroui/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

const ProductDetailsClient = ({ productDetails, user }) => {
    const {_id, image, category, name, price, weight } = productDetails;
    const handleBooking =async () => {
        const booking = {
            userId: user?.id,
            userName: user?.name,
            userEmail: user.email,
            userImage:user.image,
            image,
            name,
            category,
            price,
            weight,
            ProductId:_id,
        }

        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/mybooking`,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        const data=await res.json()
        if(data){
            redirect('/mybooking')
        }
        console.log(data)
    }
    return (
        <Card className="bg-[#FFF5E4] m-10 rounded-xl  flex justify-between gap-3 sm:flex-row md:flex-row " >
            <div className='w-full'>
                <Image src={productDetails.image}
                    alt={productDetails.image}
                    width={400} height={400}
                    className='w-full h-[400px] rounded-4xl object-contain rounded-xl '
                ></Image>
            </div>
            <div className='w-full space-y-2 p-3' >
                <div className='w-full space-y-2'>
                    <h2 className='text-2xl text-[#7B2024] font-bold '>পণ্য নামঃ <span>{productDetails.name}</span></h2>
                    <p className='text-[#60483B]'>পণ্য বিবরণঃ <span>{productDetails.description}</span></p>
                </div>
                <div>
                    <Button onClick={handleBooking} className={'bg-[#7B2024] rounded-2xl text-shadow-red-400'}>Buy Now</Button>
                </div>
            </div>
        </Card >
    );
};

export default ProductDetailsClient;