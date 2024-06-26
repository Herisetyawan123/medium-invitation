import React from "react";

function LeftSide() {
  return (
    <div className="w-full h-full bg-[url('/wallpaper.jpeg')] bg-no-repeat bg-cover bg-center flex justify-start items-end p-24 left-side relative">
      <h1 className="text-white font-medium text-6xl z-10 font-['Rondal-SemiBold']">
        Sutipan & Fitri
      </h1>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>
    </div>
  );
}

export default LeftSide;
