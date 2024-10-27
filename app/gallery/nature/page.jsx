"use client";
import React, { useState } from "react";

export default function NatureGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const images = [
    "https://plus.unsplash.com/premium_photo-1664360971475-d84469e7d7aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1420593248178-d88870618ca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1673410154246-4002e211a6fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1700142429247-a91a360495ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1691675468270-0c1308533a80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1515607986243-58713224c404?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
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