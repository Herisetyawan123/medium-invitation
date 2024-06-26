import React, { useState, useEffect } from "react";
import "./index.css";

const images = [
  "/photo/cover.jpeg",
  "/photo/cover2.jpeg",
  "/photo/cover3.jpeg",
];

function CoverSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [showNextImage, setShowNextImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNextImage(true);
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setShowNextImage(false);
      }, 500); // Durasi harus sama dengan transisi CSS
    }, 3000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, [nextImageIndex]);
  return (
    <div className="w-full h-full bg-[url('/wallpaper.jpeg')] bg-no-repeat bg-cover bg-center px-10 py-24">
      <div className="backdrop-blur-sm bg-white/30 w-full h-full rounded-md shadow flex flex-col gap-2 justify-end items-center py-16">
        <div
          className="bg-yellow-700 overflow-hidden h-96 w-64 rounded-t-full mb-10"
          data-aos="zoom-out-down"
        >
          <div className="image-wrapper">
            <img
              src={images[currentImageIndex]}
              alt="cover"
              className={showNextImage ? "hidden" : ""}
            />
            <img
              src={images[nextImageIndex]}
              alt="cover"
              className={showNextImage ? "" : "hidden"}
            />
          </div>
        </div>
        <h1 className="font-['Rondal-Regular'] text-3xl" data-aos="fade-up">
          Sutipan & Fitri
        </h1>
        <p className="font-semibold" data-aos="fade-up">
          20 juni 2025
        </p>
      </div>
    </div>
  );
}

export default CoverSection;
