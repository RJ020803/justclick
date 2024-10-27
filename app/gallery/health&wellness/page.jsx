"use client";
import React, { useState } from "react";

export default function HealthWellnessGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const images = [
    "https://images.unsplash.com/photo-1602520628350-fbf9db1f02ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoJTIwYW5kJTIwd2VsbG5lc3N8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1598901978648-4d1c0d66518a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoJTIwYW5kJTIwd2VsbG5lc3N8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1667249323445-c883e122cdce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRoJTIwYW5kJTIwd2VsbG5lc3N8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1664369473447-64172945caa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhlYWx0aCUyMGFuZCUyMHdlbGxuZXNzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1727431325765-d4a77d370e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhlYWx0aCUyMGFuZCUyMHdlbGxuZXNzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1664369473422-866cd696b216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhlYWx0aCUyMGFuZCUyMHdlbGxuZXNzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1663051004613-40a643b4d9a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGhlYWx0aCUyMGFuZCUyMHdlbGxuZXNzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1571170321687-2479b26acae2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGhlYWx0aCUyMGFuZCUyMHdlbGxuZXNzfGVufDB8fDB8fHww",
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