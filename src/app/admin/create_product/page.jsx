"use client";
import React, { useState } from "react";
import axios from "axios";

export default function CreateProduct() {
  const [imageFile, setImageFile] = useState(null);
  const [convertedImageUrl, setConvertedImageUrl] = useState("");

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!imageFile) {
    alert("Please upload an image.");
    return;
  }

  const formData = new FormData();
  formData.append("image_file", imageFile);

  try {
    const response = await axios.post(
      "https://www.remove.bg-alternative.site/api/remove",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob", // 👈 This makes axios return a Blob directly
      }
    );

    const blob = response.data; // Already a Blob
    const url = URL.createObjectURL(blob);

    // Automatically download the image
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted-product.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (error) {
    console.error("Failed to remove background:", error);
    alert("Background removal failed. Please try again.");
  }
};


  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md"
      >
        {/* Product Type */}
        <div className="mb-5">
          <label htmlFor="product_type" className="block mb-2 text-sm font-medium">
            Product Type
          </label>
          <select
            id="product_type"
            name="product_type"
            className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select a type</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Product Name */}
        <div className="mb-5">
          <label htmlFor="product_name" className="block mb-2 text-sm font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-5">
          <label htmlFor="price" className="block mb-2 text-sm font-medium">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label htmlFor="description" className="block mb-2 text-sm font-medium">
            Product Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg"
            required
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="mb-5">
          <label htmlFor="image" className="block mb-2 text-sm font-medium">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="block w-full text-sm text-gray-900 border border-gray-300"
            onChange={handleImageChange}
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Submit
        </button>
      </form>

      {/* Show converted image if available */}
      {convertedImageUrl && (
        <div className="max-w-xl mx-auto mt-6 text-center">
          <p className="mb-2 font-medium">Background Removed Preview:</p>
          <img
            src={convertedImageUrl}
            alt="Product without background"
            className="w-full max-h-[400px] object-contain mx-auto border"
          />
        </div>
      )}
    </>
  );
}
