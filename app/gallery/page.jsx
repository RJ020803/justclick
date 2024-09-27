
import React from "react";
import { Images } from ".//data";
import Link from 'next/link';
import ImageCard from '../../components/ImageCard';

const gallery = () => {
  return (
    <div className="mt-5 tracking -tracking-wide">
      <h2 className="text-xl sm:text-2xl lg:text-4xl text-center my-10 lg:my-10">
        View All Images Category
      </h2>
      <div className="lg:grid grid-cols-3 gap-6">
        {Images.map((image) => (
          <Link key={image.id} href={`/gallery/${image.id}`}>

              <ImageCard src={image.src} title={image.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default gallery;