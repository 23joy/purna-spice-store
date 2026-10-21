import ProductsPage from '@/app/products/page';
import { getProducts } from '@/lib/data';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = async () => {
    const products = await getProducts();
    console.log(products)
    return (
        <div  className='m-10 space-y-4'>
            <div className=''>
                <h2 className='text-center font-bold text-3xl text-[#7B2024] underline pb-10'>পণ্য পরিচিতি</h2>
                <p className='font-bold text-2xl'>গুঁড়া মসলা</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-8 p-3 sm:grid-cols-2 xl:grid-cols-4 grid-cols-1'>
                {
                    products.map(product => <div key={product.id}>
                      <ProductsPage product={product}></ProductsPage>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProductCard;