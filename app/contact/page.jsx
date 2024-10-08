"use client"
import React from "react";
import Link from "next/link";
import {useState} from "react"

export default function contact() {
  const [state,setState]=useState("Sign Up")
  return (
    <>
    {state==="Sign Up" ? (<div className="container mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold text-center mb-6">User Registration</h1>
  <form className="space-y-4">
    <div className="flex flex-col">
      <label htmlFor="name" className="text-gray-700 font-bold mb-2">Name</label>
      <input type="text" id="name" name="name" className="border rounded-md p-2" required />
    </div>
    <div className="flex flex-col">
      <label htmlFor="email" className="text-gray-700 font-bold mb-2">Email</label>
      <input type="email" id="email" name="email" className="border rounded-md p-2" required />
    </div>
    <div className="flex flex-col">
      <label htmlFor="phone" className="text-gray-700 font-bold mb-2">Phone Number</label>
      <input type="tel" id="phone" name="phone" className="border rounded-md p-2" required />
    </div>
    <div className="flex flex-col">
      <label htmlFor="password" className="text-gray-700 font-bold mb-2">Password</label>
      <input type="password" id="password" name="password" className="border rounded-md p-2" required />
    </div>
    <div className="flex flex-col">
      <label htmlFor="confirm_password" className="text-gray-700 font-bold mb-2">Confirm Password</label>
      <input type="password" id="confirm_password" name="confirm_password" className="border rounded-md p-2" required />
    </div>
    <div className="text-center">
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Register</button>
    </div>
    <div><p>Already Have An Account<span className ="cursor-pointer text-blue-600" onClick={()=>setState("Login")}>Login Here</span></p> </div>
  </form>
</div>):(  <div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-center mb-8">Login</h1>
  <form class="max-w-md mx-auto">
    <div class="mb-4">
      <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
      <input type="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email address" required />
    </div>
    <div class="mb-6">
      <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
      <input type="password" id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" required />
    </div>
    <div class="flex items-center justify-between">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
      <a href="#" class="inline-block align-baseline text-sm text-gray-500 hover:text-gray-800">Forgot Password?</a>
    </div>
  </form>
  <p class="text-center mt-4">Not a member? <a onClick={()=>setState("Sign Up")} href="#" class="text-blue-500 hover:text-blue-700">Sign Up</a></p>
</div>)}
    
      
    </>
  );
}