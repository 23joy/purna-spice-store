import MybookingPage from '@/Components/MybookingPage';
import MybookingUsers from '@/Components/MybookingUsers';
import { auth } from '@/lib/auth';
import { Card } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React, { Suspense } from 'react';
export const instant=false;

const mybookingPage =async () => {
    const session=await auth.api.getSession({
        headers:await headers()
    })
    const user=session?.user;
    console.log(user)
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/mybooking/${user?.id}`)
    const mybooking=await res.json();
    return (
        <div className='container mx-auto space-y-4'>
            <div>
                <h2>My booking Products</h2>
            </div>
            <div className='flex gap-10'>
             <Suspense>
                <MybookingUsers user={user}></MybookingUsers>
             </Suspense>
                <div>
                    <Suspense>
                        <MybookingPage mybooking={mybooking}></MybookingPage>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default mybookingPage;