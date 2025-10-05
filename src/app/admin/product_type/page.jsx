"use client";
import React, { useState } from "react";

export default function TypeManager() {
  const [typeName, setTypeName] = useState("");
  const [typeDesc, setTypeDesc] = useState("");
  const [types, setTypes] = useState([
    { name: "Electronics", description: "Devices and gadgets" },
    { name: "Clothing", description: "Apparel and fashion wear" },
  ]);

  const handleAddType = (e) => {
    e.preventDefault();
    if (typeName && typeDesc) {
      setTypes([...types, { name: typeName, description: typeDesc }]);
      setTypeName("");
      setTypeDesc("");
    }
  };

  const handleDelete = (index) => {
    const updated = [...types];
    updated.splice(index, 1);
    setTypes(updated);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Form Section */}
      <div className="md:w-1/2  p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 ">Add Product Type</h2>
        <form onSubmit={handleAddType} className="space-y-4">
          <div>
            <label className="block mb-1 ">Type Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 "
              value={typeName}
              onChange={(e) => setTypeName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 ">Type Description</label>
            <textarea
              className="w-full border rounded px-3 py-2 "
              value={typeDesc}
              onChange={(e) => setTypeDesc(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Add Type
          </button>
        </form>
      </div>

      {/* Table Section */}
      <div className="md:w-1/2 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Type List</h2>
        <table className="min-w-full bg-white  rounded shadow">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-left text-sm">
              <th className="px-4 py-2 border-b">Type Name</th>
              <th className="px-4 py-2 border-b">Description</th>
              <th className="px-4 py-2 border-b">Operations</th>
            </tr>
          </thead>
          <tbody>
            {types.map((type, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="px-4 py-2">{type.name}</td>
                <td className="px-4 py-2">{type.description}</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-sm bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {types.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500 dark:text-gray-400">
                  No types added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
