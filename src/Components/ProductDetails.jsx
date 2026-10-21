import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductDetails = ({productDetails}) => {
    console.log(productDetails)
    return (
      <Card className="bg-[#FFF5E4] m-10 rounded-xl  flex justify-between gap-3 sm:flex-row md:flex-row ">
        <div className='w-full'>
            <Image src={productDetails.Image} 
            alt={productDetails.Image}
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
                <Link href={'/'}>
                <Button className={'bg-[#7B2024] rounded-2xl text-shadow-red-400'}>Buy Now</Button>
                </Link>
            </div>
        </div>
      </Card>
    );
};

export default ProductDetails;