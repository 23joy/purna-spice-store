import ProductDetails from '@/Components/ProductDetails';
import { getDoucmentByID } from '@/lib/data';
import React, { Suspense } from 'react';


const ProductDetailsPage = async ({ params }) => {
    return (
        <div className='flex justify-between items-center m-20'>
            <div>
                <div>
                    <Suspense>
                        <ProductDetails params={params}></ProductDetails>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;