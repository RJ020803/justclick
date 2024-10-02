"use client"
import React, { useState } from "react";
import { Images } from "./data"; 
import Link from 'next/link';
import ImageCard from '../../components/ImageCard';

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredImages = Images.filter(image =>
    image.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-5 tracking-wide">
      <h2 className="text-xl sm:text-2xl lg:text-4xl text-center my-10">
        View All Images Category
      </h2>
      <div className="flex justify-center mb-5">
        <input
          type="text"
          placeholder="Search for images..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="lg:grid grid-cols-3 gap-6">
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <Link key={image.id} href={`/gallery/${image.id}`} passHref>
      
                <ImageCard src={image.src} title={image.title} alt={image.title} />
          
            </Link>
          ))
        ) : (
          <p className="text-center">No images found.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;