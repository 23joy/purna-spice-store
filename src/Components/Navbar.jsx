'use client'
import React from 'react';
import navImage from '../../public/image/753647277_122094143439416815_4054143932226552697_n.jpg'
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, Button } from '@heroui/react';
import { signOut, useSession } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session } = useSession()
    const user = session?.user
    console.log(user)
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
                <ul className='flex justify-between gap-3.5 text-gray-300 '>
                    <Link className='hover:underline' href={'/'}>হোম</Link>
                    <Link className='hover:underline' href={'/products'}>পণ্যসমূহ</Link>
                    <Link className='hover:underline' href={'/details'}>আমাদের সম্পর্কে</Link>
                </ul>
            </div>
            <div className='flex justify-between gap-3'>
                {user ? <>
                    <div className="flex items-center gap-4">
                        {user.image ? <>
                            <Avatar>
                                <Avatar.Image alt="{user.img}" src='{user.img}' />
                                <Avatar.Fallback>JD</Avatar.Fallback>
                            </Avatar>
                        </> : <>
                            <Avatar>
                                <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                            </Avatar></>}
                    </div>
                    <Button className={'text-[#7B2024] border border-[#7B2024] bg-[#D9A52E] rounded-xl'}>
                        <Link onClick={() => signOut()} href={'/singIn'}>signOut</Link>
                    </Button>

                </> :
                    <div className='flex gap-4'>
                        <Button className={'color-[#FFF5E4] border border-[#FFF5E4] bg-transparent rounded-xl'}>
                            <Link href={'/singIn'}>SignIn</Link>
                        </Button>
                        <Button className={'color-[#FFF5E4] border border-[#FFF5E4] bg-transparent rounded-xl'}>
                            <Link href={'/signUp'}>SignUp</Link>
                        </Button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;