import { getProducts } from '@/lib/data';
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const OurQuality = async () => {
    const product = await getProducts();
    console.log("products", product)
    return (
        <div className='m-10 '>
            <div className='text-center space-y-3 mb-10 '>
                <h2 className='text-amber-800 font-bold'>OUR SPICES, OUR QUALITY</h2>
                <h2 className='text-2xl text-[#7B2024] font-bold'>মসলার গুনাবলি</h2>
                <p className='text-[#65483A]'>প্রতিটি মসলার নিজস্ব ঘ্রাণ, স্বাদ ও বৈশিষ্ট্যে আপনার প্রতিদিনের রান্না হয়ে উঠুক আরও সুস্বাদু।</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-1 pb-20 gap-10'>
                {
                    product.map(product => <Card key={product._id}
                        className='bg-[] p-10'
                     >
                        <div className='flex gap-5'>
                            <div className='w-full grid grid-cols-1 gap-3'>
                                <Image src={product.Image}
                                    alt='{product.Image}'
                                    height={200}
                                    width={200}
                                    className='h-[250px] rounded-2xl object-contain w-full '
                                ></Image>
                                <h2 className='text-[#7B2024] font-bold'>{product.name}</h2>
                                <p className='text-[#65483A]'>{product.description}</p>
                            </div>
                            <div className='w-full grid grid-cols-1 gap-4'>
                                {
                                    product.benefits.map(item => <div key={item._id} className=''>
                                        <Card className='bg-[#E2E8D5]'>
                                            <h2 className='text-[#7B2024]'>{item.title}</h2>
                                            <p className='text-[#65483A]'>{item.description}</p>
                                        </Card>
                                    </div>)
                                }
                            </div>
                        </div>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default OurQuality;