import React from "react";
import Link from "next/link";

export default function contact() {
  return (
    <>
      <div class=" px-8 justify-center mt-35">
        <div class="">
          <h2 class="text-4xl text-blue-900  font-semibold">
            Get In Touch.....
          </h2>

          <form action="#">
            <div class="grid grid-cols-2 ">
              <div class="mt-3">
                <label for="name" class="block text-base mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="border-transparent bg-slate-100 rounded-lg w-60 h-10 text-base px-1 py-1 focus:border-gray-600"
                  placeholder="Rimi"
                />
              </div>
              <div class="mt-3">
                <label for="name" class="block text-base mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="border-transparent bg-slate-100 rounded-lg w-60 h-10 text-base px-1 py-1 focus:border-gray-600"
                  placeholder="Jha"
                />
              </div>
            </div>
            <div class="mt-3">
              <label for="email" class="block text-base mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                class="border-transparent bg-slate-100 rounded-lg w-10/12 h-10 text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="jharimi789@gmail.com"
              />
            </div>

            <div class="mt-10 relative left-14">
              <div className="text-center bg-yellow-500 text-white py-1 w-96 rounded-md hover:text-indigo-700 font-semibold">
                <Link href="/">Let's talk....</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}