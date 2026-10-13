import React from 'react';
import navImage from '../../public/image/753647277_122094143439416815_4054143932226552697_n.jpg'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/react';

const Navbar = () => {
    return (
        <div className=' bg-[#7B2024] flex items-center gap-8 justify-between p-4'>
            <div className=' flex items-center gap-4 p-0'>
                <div>
                    <Image src={navImage} alt='navimg' width={50} height={50} className='rounded-full'></Image>
                </div>
                <div>
                    <h2 className='font-bold text-2xl text-gray-300'>পূর্ণ স্পাইস স্টোর</h2>
                <p className='text-yellow-100'>ঐতিহ্যের আসল স্বাদ</p>
                </div>
            </div>
            <div>
                <ul className='flex justify-between gap-3.5 text-gray-300'>
                    <Link href={'/'}>হোম</Link>
                    <Link href={'/products'}>পণ্যসমূহ</Link>
                    <Link href={'/details'}>আমাদের সম্পর্কে</Link>
                </ul>
            </div>
            <Link href={'/singIn'}>লগ ইন</Link>
        </div>
    );
};

export default Navbar;