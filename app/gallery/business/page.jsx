"use client";
import React, { useState } from "react";

export default function AnimalGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const images = [
    "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGJ1c2luZXNzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1507537417841-81e85feb9bd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGJ1c2luZXNzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1672691611367-2917c0cbff0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGJ1c2luZXNzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1683133282266-13c620466f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGJ1c2luZXNzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1670071482028-7cecdcf42add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGJ1c2luZXNzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D",
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