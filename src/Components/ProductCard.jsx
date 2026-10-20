import { getProducts } from '@/lib/data';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = async () => {
    const products = await getProducts();
    console.log(products)
    return (
        <div  className='m-10'>
            <div>
                <h2 className='text-center text-3xl text-[]'>পণ্য পরিচিতি</h2>
                <p className='font-bold text-2xl'>গুঁড়া মসলা</p>
            </div>
            <div className='grid grid-cols-3 gap-8 p-3'>
                {
                    products.map(product => <div key={product.id}>
                        <Card className='p-6'>
                            <div className='space-y-3'>
                                <h2>{product.name}</h2>
                                <p>প্যাকেট ঃ {product.weight}</p>
                                <h4>৳ {product.price}</h4>
                                <div className='flex  gap-5'>
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
                        </Card>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProductCard;