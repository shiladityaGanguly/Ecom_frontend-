import { FaEye, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import ProductModal from "./productModel";

export default function ProductCard({ image, category, title, price }) {
    const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div className="bg-white rounded-lg shadow-md p-3 hover:shadow-xl transition duration-300 group relative">
      {/* Image with overlay icons */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded"
        />

        {/* Hover Icons */}
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* <button className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-100">
            <FaShoppingCart className="w-4 h-4" />
          </button> */}
          <button className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-100"
            onClick={() => setShowModal(true)}

          >
            <FaEye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product details */}
      <p className="text-sm text-gray-500 mt-4">{category}</p>
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
      <p className="text-base font-medium text-gray-800">${price}</p>
    </div>
     {/* Modal */}
      {showModal && (
        <ProductModal
          image={image}
          category={category}
          title={title}
          price={price}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
