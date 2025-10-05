"use client";
import React from "react";

const products = [
  {
    id: "P001",
    name: "Smartphone",
    description: "Latest Android smartphone with 128GB storage.",
    price: "₹15,999",
  },
  {
    id: "P002",
    name: "Wireless Headphones",
    description: "Bluetooth over-ear headphones with noise cancellation.",
    price: "₹3,499",
  },
];

export default function ProductTable() {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full bg-white  border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <thead>
          <tr className="bg-gray-100  text-left text-sm uppercase">
            <th className="px-6 py-3 border-b">Product ID</th>
            <th className="px-6 py-3 border-b">Name</th>
            <th className="px-6 py-3 border-b">Description</th>
            <th className="px-6 py-3 border-b">Price</th>
            <th className="px-6 py-3 border-b">Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b  ">
              <td className="px-6 py-4">{product.id}</td>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">{product.description}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4 flex gap-2">
                <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
