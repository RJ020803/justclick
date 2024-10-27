"use client";
import React, { useState } from "react";

export default function FoodDrinkGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const images = [
    "https://images.unsplash.com/photo-1610450949065-1f2841536c88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGQlMjBjb2ZmZSUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvbGQlMjBjb2ZmZSUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1695750678153-e7148811673e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvbGQlMjBjb2ZmZSUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1586985288206-3cdc4f67cd03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGNvbGQlMjBjb2ZmZSUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1627998691167-4dab0dfcae9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGNvbGQlMjBjb2ZmZSUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1695750679584-b8e21965ef0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGNvbGQlMjBjb2ZmZSUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1663853489934-86644f550b8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxjb2xkJTIwY29mZmUlMjBjaG9jb2xhdGV8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1695750678195-beb8ba487094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxjb2xkJTIwY29mZmUlMjBjaG9jb2xhdGV8ZW58MHx8MHx8fDA%3D",
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="grid gap-4">
            <div>
              <img
                onClick={() => openModal(image)}
                className="h-auto max-w-full rounded-lg object-cover object-center cursor-pointer transition-transform transform hover:scale-105 hover:opacity-100 opacity-70"
                src={image}
                alt={`gallery-photo-${index}`}
              />
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative w-[90vh] h-[90vh]">
            <img
              src={selectedImage}
              alt="Preview"
              className="absolute inset-0 w-full h-full rounded-3xl border object-cover"
            />
            <button
              className="absolute right-0 bg-red-900 text-black rounded-full p-2 focus:outline-none hover:bg-blue-600"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}