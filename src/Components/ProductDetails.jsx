
import { auth } from '@/lib/auth';
import { getDoucmentByID } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';
import ProductDetailsClient from './ProductDetailsClient';

const ProductDetails = async ({ params }) => {
    const { ProductId } = await params;
    const productDetails = await getDoucmentByID(ProductId);
    console.log(productDetails)
    

    const session = await auth.api.getSession({
        headers: await headers() 
    })
    const user=session?.user;
    console.log(user)

   
    return(
        <ProductDetailsClient user={user} productDetails={productDetails}></ProductDetailsClient>
    );
};

export default ProductDetails;