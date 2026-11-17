import ProductDetails from '@/Components/ProductDetails';
import { getDoucmentByID } from '@/lib/data';
import React, { Suspense } from 'react';
export const instant=false;
const ProductDetailsPage =async ({params}) => {
    const{ProductId}=await params;
    const productDetails = await getDoucmentByID(ProductId);
    console.log(productDetails);
    return (
       <div className='flex justify-between items-center m-20'>
       <div>
        <Suspense>
            <ProductDetails productDetails={productDetails}></ProductDetails>
        </Suspense>
       </div>
       </div>
    );
};

export default ProductDetailsPage;