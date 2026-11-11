
import ProductsPage from '@/app/products/page';
import Link from 'next/link';
import React from 'react';

const ProductCard = async () => {

    return (
        <div className='m-10 space-y-4'>
            <div className=''>
                <h2 className='text-center font-bold text-3xl text-[#7B2024] underline pb-10'>পণ্য পরিচিতি</h2>
                <p className='font-bold text-2xl'>গুঁড়া মসলা</p>
            </div>

            <ProductsPage></ProductsPage>
        </div>
    );
};

export default ProductCard;