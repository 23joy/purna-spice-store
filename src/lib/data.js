export const getProducts = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/product`);
    const data =await res.json();
    return data;
}

export const getDoucmentByID=async(ProductId)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/product/${ProductId}`);
    const data = await res.json()
    return data;
}


export const whyChooseUs=async()=>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/choose`);
    const data =await res.json();
    return data;
}