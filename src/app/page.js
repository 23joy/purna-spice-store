import Banner from "@/Components/Banner";
import FeaturedProducts from "@/Components/FeaturedProducts";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import OurQuality from "@/Components/OurQuality";
import ProductCard from "@/Components/ProductCard";
import WhyChooseUs from "@/Components/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
    <Banner></Banner>
    <FeaturedProducts></FeaturedProducts>
    <WhyChooseUs></WhyChooseUs>
    <OurQuality></OurQuality>
    <Footer></Footer>
    </div>
  );
}
