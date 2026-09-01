'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between sm:h-24">
          {/* Logo Section */}
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/images/logos/logo.png"
                alt="First Atlantic Schools Logo"
                width={90}
                height={90}
                className="h-14 w-auto object-contain sm:h-[72px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Menu Links */}
          <div className="hidden items-center space-x-8 md:flex lg:space-x-12">
            <Link href="/" className="font-semibold text-[#0d0066] transition duration-200 hover:text-blue-700">
              Home
            </Link>

            {/* The School Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('school')}
                className="flex items-center gap-1 font-semibold text-[#0d0066] transition duration-200 hover:text-blue-700 focus:outline-none"
              >
                The School
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'school' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'school' && (
                <div className="absolute left-0 z-50 mt-3 w-48 rounded-md border border-gray-100 bg-white py-2 shadow-lg">
                  <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    About Us
                  </Link>
                  <Link href="/admission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Admissions
                  </Link>
                  <Link href="/academics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Academics
                  </Link>
                </div>
              )}
            </div>

            {/* School Login Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('login')}
                className="flex items-center gap-1 font-semibold text-[#0d0066] transition duration-200 hover:text-blue-700 focus:outline-none"
              >
                School Login
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'login' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'login' && (
                <div className="absolute left-0 z-50 mt-3 w-48 rounded-md border border-gray-100 bg-white py-2 shadow-lg">
                  <a href="#" target="_self" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Student Portal
                  </a>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Staff Portal
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Parent Portal
                  </Link>
                </div>
              )}
            </div>

            <Link href="/gallery" className="font-semibold text-[#0d0066] transition duration-200 hover:text-blue-700">
              Gallery
            </Link>

            <Link href="/contact" className="font-semibold text-[#0d0066] transition duration-200 hover:text-blue-700">
              Contact
            </Link>
          </div>

          {/* Mobile Menu - native details for better real-phone support */}
          <details className="group relative md:hidden">
            <summary className="flex list-none cursor-pointer items-center rounded-md p-2 text-[#0d0066] transition hover:bg-gray-100 [&::-webkit-details-marker]:hidden">
              <Menu className="h-6 w-6 group-open:hidden" />
              <X className="hidden h-6 w-6 group-open:block" />
            </summary>

            <div className="absolute right-0 top-full z-50 mt-3 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl">
              <div className="space-y-2 px-4 py-4">
                <Link href="/" className="block rounded-md py-2 font-semibold text-[#0d0066]">
                  Home
                </Link>

                <details className="overflow-hidden rounded-xl border border-gray-100">
                  <summary className="flex list-none cursor-pointer items-center justify-between px-3 py-3 text-left [&::-webkit-details-marker]:hidden">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">The School</span>
                    <ChevronDown className="h-4 w-4 text-[#0d0066] transition-transform duration-200" />
                  </summary>
                  <div className="border-t border-gray-100 bg-gray-50/50 py-2">
                    <Link href="/about" className="block rounded-md px-3 py-2 text-sm text-[#0d0066] hover:bg-white">
                      About Us
                    </Link>
                    <Link href="/admission" className="block rounded-md px-3 py-2 text-sm text-[#0d0066] hover:bg-white">
                      Admissions
                    </Link>
                    <Link href="/academics" className="block rounded-md px-3 py-2 text-sm text-[#0d0066] hover:bg-white">
                      Academics
                    </Link>
                  </div>
                </details>

                <details className="overflow-hidden rounded-xl border border-gray-100">
                  <summary className="flex list-none cursor-pointer items-center justify-between px-3 py-3 text-left [&::-webkit-details-marker]:hidden">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">School Login</span>
                    <ChevronDown className="h-4 w-4 text-[#0d0066] transition-transform duration-200" />
                  </summary>
                 <div className="border-t border-gray-100 bg-gray-50/50 py-2">
                <button
                  type="button"
                  className="block w-full rounded-md px-3 py-2 text-left text-sm text-[#0d0066] hover:bg-white"
                >
                 Student Portal
               </button>

                <button
                  type="button"
                  className="block w-full rounded-md px-3 py-2 text-left text-sm text-[#0d0066] hover:bg-white"
                >
                 Staff Portal
                </button>

                <button
                 type="button"
                  className="block w-full rounded-md px-3 py-2 text-left text-sm text-[#0d0066] hover:bg-white"
                >
                  Parent Portal
                </button>
              </div>
                </details>

                <Link href="/gallery" className="block rounded-md py-2 font-semibold text-[#0d0066]">
                  Gallery
                </Link>

                <Link href="/contact" className="block rounded-md py-2 font-semibold text-[#0d0066]">
                  Contact
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
