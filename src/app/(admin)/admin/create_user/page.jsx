"use client";
import React from "react";

export default function UserRegistration() {
  return (
    <form className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">User Registration</h2>

      {/* Username */}
      <div className="mb-5">
        <label htmlFor="username" className="block mb-2 text-sm font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg"
          required
        />
      </div>

      {/* Email */}
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg"
          required
        />
      </div>

      {/* Phone Number */}
      <div className="mb-5">
        <label htmlFor="ph_no" className="block mb-2 text-sm font-medium">
          Phone Number
        </label>
        <input
          type="tel"
          id="ph_no"
          name="ph_no"
          className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg"
          required
        />
      </div>

      {/* Address */}
      <div className="mb-5">
        <label htmlFor="address" className="block mb-2 text-sm font-medium">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          rows="3"
          className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg"
          required
        ></textarea>
      </div>

      {/* Password */}
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg"
          required
        />
      </div>

      {/* Confirm Password */}
      <div className="mb-5">
        <label htmlFor="confirm_pass" className="block mb-2 text-sm font-medium">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm_pass"
          name="confirm_pass"
          className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Register
      </button>
    </form>
  );
}
