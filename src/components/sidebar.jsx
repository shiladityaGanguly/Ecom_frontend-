"use client";

import {
  FaHome,
  FaBoxOpen,
  FaListAlt,
  FaThLarge,
  FaUserPlus,
  FaSignOutAlt,
  FaBars,
  FaTimes 
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Icon (Mobile Only) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar} className="text-2xl text-black bg-white p-2 rounded shadow">
          <FaBars />
        </button>
      </div>

      {/* Overlay (Mobile Only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`h-screen w-64 bg-[#f5b08b] text-white fixed top-0 left-0 shadow-lg flex flex-col z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
  <div className="text-2xl font-bold">MyShop</div>
  {/* Close button for mobile */}
  <button
    className="md:hidden text-white text-xl"
    onClick={closeSidebar}
  >
    <FaTimes />
  </button>
</div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem icon={<FaHome />} label="Dashboard" href="/admin" />
          <SidebarItem icon={<FaBoxOpen />} label="Create Products" href="/admin/create_product" />
          <SidebarItem icon={<FaListAlt />} label="Product List" href="/admin/product_list" />
          <SidebarItem icon={<FaThLarge />} label="Product Type" href="/admin/product_type" />
          <SidebarItem icon={<FaUserPlus />} label="Create User" href="/admin/create_user" />
          <SidebarItem icon={<FaSignOutAlt />} label="Logout" href="/" />
        </nav>

        {/* Footer */}
        {/* <div className="p-4 border-t border-gray-700 text-sm text-gray-200">
          © 2025 MyShop
        </div> */}
      </div>
    </>
  );
}

function SidebarItem({ icon, label, href }) {
  return (
    <Link href={href}>
      <div className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800 cursor-pointer transition">
        <div className="text-lg">{icon}</div>
        <span>{label}</span>
      </div>
    </Link>
  );
}
