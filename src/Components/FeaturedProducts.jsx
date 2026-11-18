import { getProducts } from '@/lib/data';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedProducts = async () => {
    const product = await getProducts()
    const products = product.slice(0, 4)

    return (
        <div>
            <div className='flex justify-center flex-col items-center p-10'>
                <h2 className='font-bold text-2xl'>মসলা সমূহ</h2>
                <p className='text-gray-600 text-center p-5'>প্রতিদিনের রান্নায় নিয়ে আসুন পরিচিত মসলার স্বাদ। আপনার পছন্দের
                    মসলা বেছে নিন এক জায়গা থেকেই।</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5'>
                {
                    products.map(product => <Card key={product._id} className='w-full min-w-0 p-4 sm:p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300'>
                        <div>
                            <Image src={product.image}
                                alt={product.image}
                                height={200}
                                width={200}
                                className='h-[250px] rounded-2xl object-contain w-full '
                            ></Image>
                        </div>
                        <div className='space-y-3 w-full min-w-0'>
                            <h2>{product.name}</h2>
                            <p>প্যাকেট : : {product.weight}</p>
                            <h4>৳ {product.price}</h4>
                            <div className='flex flex-wrap  gap-3'>
                                <Link href={`/products/${product._id}`}>
                                    <Button className={'bg-[#7B2024] rounded-xl'}>
                                        Details
                                    </Button>
                                </Link>
                                <Button className={'bg-[#7B2024] rounded-xl'}>কার্টে যোগ করুন
                                    <Link href={'/'}></Link>
                                </Button>
                            </div>
                        </div>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;