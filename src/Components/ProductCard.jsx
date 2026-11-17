
import ProductsPage from '@/app/products/page';
import React, { Suspense } from 'react';


const ProductCard = async () => {

    return (
        <div className='m-10 space-y-4'>
            <div className=''>
                <h2 className='text-center font-bold text-3xl text-[#7B2024] underline pb-10'>পণ্য পরিচিতি</h2>
                <p className='font-bold text-2xl'>গুঁড়া মসলা</p>
            </div>

            <div>
                <Suspense fallback={<p>loading......</p>}>
                    <ProductsPage></ProductsPage>
                </Suspense>
            </div>
        </div>
    );
};

export default ProductCard;