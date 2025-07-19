"use client";
import { useEffect, useState } from "react";
import HeroSection from "@/components/heroSection";
import ProductCard from "@/components/productComponent";
import CategoryCard from "@/components/categoryCard";
  import Footer from "@/components/footerComponent";
import FeatureCards from "@/components/featureCard";


export default function HomePage() {
   const products = [
    {
      image: "/product10.jpg",
      category: "test",
      title: "Black Real Leather Wallet",
      price: "120.00",
    },
    {
      image: "/product11.jpg",
      category: "test",
      title: "Tyler Brown Leather Wallet",
      price: "105.50",
    },
    {
      image: "/product12.jpg",
      category: "test",
      title: "Light Brown Real Leather Credit Card Case",
      price: "45.50",
    },
    {
      image: "/product13.jpg",
      category: "test",
      title: "Adventure Power Dinosaur Toy",
      price: "21.75",
    },
  ];
   const categories = [
    {
      image: "/toys.jpg",
      name: "Toys",
      bgColor: "bg-green-100",
    },
    {
      image: "/accessories.jpg",
      name: "Accessories",
      bgColor: "bg-yellow-100",
    },
    {
      image: "/clothing.jpg",
      name: "Clothing",
      bgColor: "bg-rose-100",
    },
  ];

  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.products || []));
  // }, []);

  return (
   <div className="h-screen">
  <div className="h-full border-black">
    <HeroSection />
  </div>
  <div>
      <section className="mt-16 px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
          New Arrivals
        </h2>
        <div className="h-1 w-12 bg-red-500 mx-auto mb-8 rounded"></div>

        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </section>
  </div>
  <div>
     <section className="mt-16 px-4 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
        Shop by Categories
      </h2>
      <div className="h-1 w-12 bg-red-500 mx-auto mb-8 rounded"></div>

      <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <CategoryCard key={index} {...cat} />
        ))}
      </div>
    </section>
  </div>
  <div>
    <section className="mt-16 px-4 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
        Why Atlab
      </h2>
      <div className="h-1 w-12 bg-red-500 mx-auto mb-8 rounded"></div>
      <div>
            <FeatureCards/>

      </div>
      </section>
  </div>
  <div>
    <Footer/>
  </div>
</div>

  );
}
