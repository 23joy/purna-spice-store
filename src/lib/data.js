export const getProducts = async()=>{
    const res = await fetch('http://localhost:7001/product');
    const data =await res.json();
    return data;
}

export const getDoucmentByID=async(ProductId)=>{
    const res=await fetch(`http://localhost:7001/product/${ProductId}`);
    const data = await res.json()
    return data;
}


export const whyChooseUs=async()=>{
    const res =await fetch("http://localhost:7001/choose");
    const data =await res.json();
    return data;
}