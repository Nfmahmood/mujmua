"use client";

import { useState } from "react";

function Collage({ images }) {
  const { id, picture, title, description } = images;

  const [visibleCount, setVisibleCount] = useState(10);
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {images.slice(0, visibleCount).map((image) => (
          <div key={image.id} className="relative overflow-hidden rounded-lg">
            <img
              src={image.picture}
              alt={`Image ${image.description}`}
              className="object-cover w-full rounded-lg transition-transform duration-300 hover:scale-105"
            />

            <div className="flex gap-3 items-center mb-2">
              <p className="text-sm text-primary-200">
                {image.title} - {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < images.length && (
        <button
          onClick={loadMore}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Collage;
