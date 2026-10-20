export const getProducts = async()=>{
    const res = await fetch('http://localhost:7001/product')
    const data =await res.json()
    return data;
}