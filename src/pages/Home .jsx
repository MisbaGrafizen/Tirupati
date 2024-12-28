import React from "react";
import HeroSection from "../../src/Component/LandingPage/herosection/HeroSection";
import AboutUs from "../../src/Component/LandingPage/aboutUs/AboutUs";
import IndustryApplications from "../../src/Component/LandingPage/Applictions/IndustryApplications";
// import Products from "../../Component/LandingPage/products/Products";
import ServiceSection from "../../src/Component/LandingPage/services/Services";
import WhyChoose from "../../src/Component/LandingPage/whyChoose/WhyChoose";
import ProductShowcase from "../../src/Component/LandingPage/products/Products";
import Testimonials from "../../src/Component/LandingPage/testimonials/Testimonials";
import Footer from "../../src/Component/footer/Footer";
import Blog from "../../src/Component/LandingPage/blog/Blog";



export default function Home() {
  return (
    <>
      <section className=" flex flex-col   gap-[20px] w-[90%] md:w-[80%]  2xl:w-[1200px]    h-[100%] mx-auto">

      </section>
      <HeroSection />
      <section className=" flex flex-col   w-[90%] md:w-[80%]  2xl:w-[1200px]    h-[100%] mx-auto">
        <AboutUs />
        <IndustryApplications />
        <ProductShowcase />


      </section>
      <ServiceSection />
      <section className=" flex flex-col   gap-[20px] w-[90%] md:w-[80%]  2xl:w-[1200px]    h-[100%] mx-auto">
        <WhyChoose />

      </section>
      <Testimonials />
      <section className=" flex flex-col   gap-[20px] w-[90%] md:w-[80%]  2xl:w-[1200px]    h-[100%] mx-auto">
      <Blog />

      </section>

      <Footer />
    </>
  );
}
