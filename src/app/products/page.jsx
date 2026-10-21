import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductsPage = ({ product }) => {
    return (
        <Card className='w-full min-w-0 p-4 sm:p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300'>
            <div>
                <Image src={product.Image}
                 alt='{product.Image}'
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
        </Card>
    );
};

export default ProductsPage;