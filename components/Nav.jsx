"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from "lucide-react";

export default function Nav() {

   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

   const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
   };

  return (
   <header className="bg-slate-200 shadow-md">
          <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link href="/">
              <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                <span className="text-slate-500">jst</span>
                <span className="text-slate-700">Clk</span>
              </h1>
            </Link>
            <ul className="hidden lg:flex gap-5">
              <li className="text-xs md-text-base text-slate-700 hover:underline">
                <Link href="/about">About </Link>
              </li>

              <li className="text-xs md-text-base text-slate-700 hover:underline">
                <Link href="/gallery">Gallery </Link>
              </li>

              <li className="text-xs md-text-base text-slate-700 hover:underline">
                <Link href="/contact">Contact </Link>
              </li>
            </ul>
            <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">

              <ul>
                <li className='py-4 text-white'>
                <Link href="/about">About </Link>
                </li>
                <li className='py-4 text-white'>
                <Link href="/gallery">Gallery </Link>
                </li>
                <li className='py-4 text-white'> 
                <Link href="/contact">Contact </Link>
                </li>
              </ul>
            </div>
          )}
        </header> 
  )
}
