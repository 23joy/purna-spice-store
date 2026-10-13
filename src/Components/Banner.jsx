import { Badge, Button } from '@heroui/react';
import bannerimg from '../../public/image/mosla.jpg'
import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='flex max-w-full m-auto p-10 justify-between '>
            <div className='space-y-5'>
                 <Badge className='relative bg-red-200  text-red-500 p-2'>বাংলার ঐতিহ্য, ঘরের স্বাদ</Badge>
                <h2 className='text-[#7B2024] font-bold text-3xl'>মসলার ঘ্রাণে জমুক স্বাদের উৎসব!</h2>
                <p className='text-gray-600'>প্রতিদিনের রান্নায় নিয়ে আসুন পরিচিত মসলার স্বাদ। আপনার পছন্দের <br /> মসলা বেছে নিন এক জায়গা থেকেই।</p>
               <div className='flex gap-4'>
                 <Button className='rounded-xl hover:bg-[#7B2024] hover:text-gray-100 border bg-transparent text-[#7B2024]'>মসলা কিনুন</Button>
                <Button className="rounded-xl hover:bg-[#7B2024] hover:text-gray-100 border bg-transparent text-[#7B2024]">আরও জানুন</Button>
               </div>
            </div>
            <div>
               <Image src={bannerimg} alt='bannerimg' width={600}height={800} className='rounded-xl'></Image> 
            </div>
        </div>
    );
};

export default Banner;