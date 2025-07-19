import { FaTimes, FaCheck } from "react-icons/fa";

export default function ProductModal({ image, category, title, price, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-6xl w-full flex relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <FaTimes size={18} />
        </button>

        {/* Left: Image */} 
        <div className="w-1/2">
          <img src={image} alt={title} className="w-full h-auto rounded" />
        </div>

        {/* Right: Details */}
        <div className="w-1/2 pl-6 flex flex-col justify-between">
          <div>
            <p className="text-sm text-indigo-600">{category}</p>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-lg font-bold text-gray-800">
              ${price}{" "}
              <span className="text-sm font-normal text-gray-500">& Free Shipping</span>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>

            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p><strong>Free shipping on orders over $50!</strong></p>
              <ul className="mt-1 space-y-1">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-600" /> No-Risk Money Back Guarantee!
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-600" /> No Hassle Refunds
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-600" /> Secure Payments
                </li>
              </ul>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          {/* <div className="mt-6 flex items-center gap-4">
            <div className="flex border rounded">
              <button className="px-3 py-1 text-lg">-</button>
              <span className="px-4 py-1">1</span>
              <button className="px-3 py-1 text-lg">+</button>
            </div>
            <button className="bg-indigo-700 text-white font-semibold px-6 py-2 rounded hover:bg-indigo-800">
              ADD TO CART
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
