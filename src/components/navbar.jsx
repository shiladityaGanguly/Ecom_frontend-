"use client";
import Link from "next/link";
import Image from 'next/image';

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
  {
    label: "Home",
    href: "/",
    submenu: [
      { label: "About Us", href: "/portfolio/project1" },
      { label: "Quality Control", href: "/portfolio/project2" },
      { label: "Management Team", href: "/portfolio/project2" },
      { label: "CSR", href: "/portfolio/project2" },
      { label: "Contact Us", href: "/portfolio/project2" }
    ]
  },
  {
    label: "Portfolio",
    href: "/",
    submenu: [
      { label: "Baby Message Oil", href: "/portfolio/project1" },
      { label: "Digital Market Place", href: "/portfolio/project2" },
      { label: "OTC Segment", href: "/portfolio/project2" },
      { label: "Corporate Assignment", href: "/portfolio/project2" },
      { label: "Best Manufacturing Projects", href: "/portfolio/project2" }
    ],
  },
  {
    label: "Update Info",
    href: "/",
    submenu: [
      { label: "Profile", href: "/update/profile" },
      { label: "Settings", href: "/update/settings" },
    ],
  },
  {
    label: "Distribution",
    href: "/",
     submenu: [
      { label: "Channel Marketing", href: "/update/profile" },
      { label: "State C & FA", href: "/update/settings" },
      { label: "Export Policies", href: "/update/settings" },
      { label: "Job & Work", href: "/update/settings" },
    ],
  },
];

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Title */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
             <Image src="/business_icon.jpg" alt="Logo" width={80} height={80} />
            </Link>
          </div>

           <div className="hidden md:flex items-center gap-8 relative">
      {menuItems.map((item, index) => (
        <div key={index} className="relative group">
          <Link href={item.href} className="text-gray-700 hover:text-blue-600">
            {item.label}
          </Link>

          {/* Submenu if exists */}
          {item.submenu && (
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-2 z-10">
              {item.submenu.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  href={subItem.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            
            <Link href="/login" className="text-gray-700 hover:text-blue-600 flex items-center gap-2">
              Login
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
            </Link>
            
          </div>

          

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/login" className="block py-2 text-gray-700 hover:text-blue-600">
            Portfolio
          </Link>
          <Link href="/register" className="block py-2 text-gray-700 hover:text-blue-600">
            Update info
          </Link>
          <Link href="/register" className="block py-2 text-gray-700 hover:text-blue-600">
           Distribution
          </Link>
        </div>
      )}
    </nav>
  );
}
