import ProductDetails from '@/Components/ProductDetails';
import { getDoucmentByID } from '@/lib/data';
import React from 'react';

const ProductDetailsPage =async ({params}) => {
    const{ProductId}=await params;
    const productDetails = await getDoucmentByID(ProductId);
    console.log(productDetails);
    return (
       <div className='flex justify-between items-center m-20'>
       <ProductDetails productDetails={productDetails}></ProductDetails>
       </div>
    );
};

export default ProductDetailsPage;