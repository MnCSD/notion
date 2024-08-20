"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/product/super-duper/carousel/sites.png",
  "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/product/super-duper/carousel/calendar.png",
  "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/product/super-duper/carousel/ai.png",
  "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/product/super-duper/carousel/projects.png",
  "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/product/super-duper/carousel/wiki.png",
];

const Carousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative lg:w-full w-[80%] mx-auto lg:h-[780px] h-[380px] rounded-lg shadow-xl">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Carousel image ${index + 1}`}
          fill
          className={`absolute lg:w-full rounded-lg w-[90%] mx-auto transition-opacity duration-300 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default Carousel;
