import Banner from "@/Components/Banner";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import ProductCard from "@/Components/ProductCard";
import WhyChooseUs from "@/Components/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
    <Banner></Banner>
    <ProductCard></ProductCard>
    <WhyChooseUs></WhyChooseUs>
    <Footer></Footer>
    </div>
  );
}
