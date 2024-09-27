import React from "react";
export default function page() {
  return (
    <>
      <div
        class="relative bg-cover bg-center h-screen "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495580621852-5de0cc907d2f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="relative flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 class="text-5xl md:text-6xl font-bold mb-4">
              Explore the Art of{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                Photography
              </span>
            </h1>
            <p class="text-lg md:text-xl mb-8">
              Discover stunning images captured by talented photographers.
            </p>
            <a
              href="/gallery"
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
