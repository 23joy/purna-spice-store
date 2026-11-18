import AddmodalProducts from '@/Components/AddmodalProducts';
import Allproducts from '@/Components/Allproducts';
import React, { Suspense } from 'react';


const ProductsPage = async () => {

    return (
        <div>
            <div>
                <h2 className='font-bold text-2xl text-center p-10'>All products</h2>
            </div>
            <div className=''>
               <Suspense fallback={<p>loading......</p>}>
                <AddmodalProducts></AddmodalProducts>
               </Suspense>
            </div>
            <Suspense>
                <Allproducts></Allproducts>
            </Suspense>
        </div>

    );
};

export default ProductsPage;