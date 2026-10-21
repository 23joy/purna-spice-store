import { whyChooseUs } from '@/lib/data';
import { Card } from '@heroui/react';
import React from 'react';

const WhyChooseUs = async () => {
    const chooses = await whyChooseUs()
    return (
        <div className='m-10 space-y-4'>
            <h2 className='text-3xl text-[#7B2024]'>কেন আমাদের বেছে নেবেন?</h2>
            <div className='grid lg:grid-cols-3 gap-8 p-3 sm:grid-cols-2 xl:grid-cols-4 grid-cols-1'>
                {
                    chooses.map(choose => <div key={choose._id}
                        
                    >
                        <Card  className='rounded-2xl p-5 shadow-md bg-[#F2D7C9] hover:-translate-y-2 hover:shadow-xl transition-all duration-300'>
                            <h2 className='text-[#7B2024] text-center'>{choose.title}</h2>
                            <p className='text-[#65483A] text-center'>{choose.description}</p>
                        </Card>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WhyChooseUs;