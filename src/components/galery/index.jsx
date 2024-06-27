import React from "react";
import Slider from "react-slick";

const images = [
  "https://via.placeholder.com/300?text=Image+3",
  "https://via.placeholder.com/300?text=Image+4",
  "https://via.placeholder.com/300?text=Image+3",
  "https://via.placeholder.com/300?text=Image+4",
];

function GallerySection() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="w-full bg-[url('wallpaper.jpeg')] bg-no-repeat bg-center bg-cover relative overflow-hidden">
      <div className="overlay bg-white/30 backdrop-blur w-full h-full bg-opacity-60 absolute"></div>

      <div className="relative w-full h-full py-20">
        <h1 className="font-['Tangerine'] text-4xl text-center">
          Photo Gallery
        </h1>

        <div className="carousel-container mt-10 mx-10">
          <Slider {...settings} className="">
            {images.map((src, index) => (
              <div key={index} className="mx-4 px-2">
                {/* Add mx-4 for gap */}
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-40 w-full object-cover rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="carousel-container mt-10 mx-10">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="mx-4 px-2">
                {/* Add mx-4 for gap */}
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-40 w-full object-cover rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md"
                />
              </div>
            ))}
          </Slider>
        </div>

        <h1 className="font-['Tangerine'] text-4xl text-center mt-10">
          Video Gallery
        </h1>
        <div className="w-[90%] mx-auto h-64 mt-5" data-aos="fade-up">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/ivrumxRUz_Y`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
