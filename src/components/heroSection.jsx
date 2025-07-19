// export default function HeroSection() {
//   return (
//    <section className="relative bg-[#f3c4ab] w-full min-h-screen px-4 md:px-20 flex items-center justify-center overflow-hidden">
//   {/* Right half background image (behind text) */}
//   {/* <div
//     className="absolute right-0 top-0 h-full w-1/2 bg-no-repeat bg-cover bg-center opacity-20 z-0"
//     style={{ backgroundImage: "url('/background-overlay.png')" }} // Replace with your image path
//   ></div> */}

//   {/* Content Container */}
//   <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-11 max-w-6xl w-full mx-auto">

//     {/* Left: Product Image */}
//     <div className="w-full md:w-1/2 flex justify-center">
//       <img
//         src="/product1.jpg"
//         alt="Product"
//         className="w-[400px] md:w-[500px] lg:w-[700px] rounded-lg object-cover"
//       />
//     </div>

//     {/* Right: Text Content */}
//     <div className="w-full md:w-1/2 text-center md:text-left">
//       <p className="text-sm md:text-base font-semibold tracking-widest text-white uppercase mb-2">
//         New Arrival
//       </p>
//       <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
//         Nourish delicate skin & <br /> hair package
//       </h1>
//       <p className="text-sm md:text-lg text-white mb-6">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//       </p>
//       <button className="bg-white text-gray-900 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
//         Shop Now
//       </button>
//     </div>

//   </div>
// </section>



//   );
// }

import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/product1.jpg",
    title: "Nourish delicate skin & hair package",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    reverse: false,
  },
  {
    id: 2,
    image: "/product2.jpg",
    title: "Glow with our natural essentials",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reverse: true,
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(true); // Fade in new slide
      }, 500); // Wait for fade out to finish
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { image, title, description, reverse } = slides[current];

  return (
    <section className="relative bg-[#f3c4ab] w-full min-h-screen px-4 md:px-20 flex items-center justify-center overflow-hidden">
      <div
        className={`relative z-10 flex flex-col md:flex-row items-center justify-between gap-11 max-w-6xl w-full mx-auto transition-all duration-1000 ease-in-out ${
          reverse ? "md:flex-row-reverse" : ""
        } ${fade ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center transition-all duration-1000 ease-in-out">
          <img
            src={image}
            alt="Product"
            className="w-[400px] md:w-[500px] lg:w-[700px] rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left transition-all duration-1000 ease-in-out">
          <p className="text-sm md:text-base font-semibold tracking-widest text-white uppercase mb-2">
            New Arrival
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
            {title}
          </h1>
          <p className="text-sm md:text-lg text-white mb-6">{description}</p>
          <button className="bg-white text-gray-900 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
