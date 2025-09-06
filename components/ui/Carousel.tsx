"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

const images = ["/ttp-sc1.png", "/ttp-sc2.png", "/ttp-sc3.png"];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Auto-rotate every 5 seconds when not hovered
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <div
      className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-lg aspect-[16/9]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      {images.map((img, i) => (
        <Transition
          key={i}
          show={i === current}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Image
            src={img}
            alt={`Slide ${i + 1}`}
            fill
            className=" object-fill"
            priority={i === 0}
          />
        </Transition>
      ))}

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white p-2 hover:bg-black/70"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white p-2 hover:bg-black/70"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
