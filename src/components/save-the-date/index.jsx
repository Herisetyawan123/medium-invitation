import React from "react";

function SaveTheDateSection() {
  return (
    <div className="bg-['#e7e7e7'] w-full py-20">
      <h1 className="font-['Tangerine'] text-7xl text-center">Save The Date</h1>
      <p className="text-xl font-['Rondal-Regular'] text-center mt-2">
        November 05, 2024
      </p>

      <div
        className="w-[80%] mx-auto mt-20 grid grid-cols-4 gap-2"
        data-aos="fade-up"
      >
        <div className="font-['Rondal-SemiBold'] h-28 rounded-lg shadow-xl bg-white/30 backdrop-blur flex flex-col justify-center items-center gap-1">
          <h1 className="text-4xl">0</h1>
          <p>Hari</p>
        </div>
        <div className="font-['Rondal-SemiBold'] h-28 rounded-lg shadow-xl bg-white/30 backdrop-blur flex flex-col justify-center items-center gap-1">
          <h1 className="text-4xl">0</h1>
          <p>Jam</p>
        </div>
        <div className="font-['Rondal-SemiBold'] h-28 rounded-lg shadow-xl bg-white/30 backdrop-blur flex flex-col justify-center items-center gap-1">
          <h1 className="text-4xl">0</h1>
          <p>Menit</p>
        </div>
        <div className="font-['Rondal-SemiBold'] h-28 rounded-lg shadow-xl bg-white/30 backdrop-blur flex flex-col justify-center items-center gap-1">
          <h1 className="text-4xl">0</h1>
          <p>Detik</p>
        </div>
      </div>

      <div className="mt-10 w-full flex justify-center" data-aos="fade-up">
        <a
          href="/"
          target="_blank"
          className="block py-3 px-10 text-white bg-black font-['Rondal-SemiBold'] font-bold duration-700 hover:bg-white hover:text-black border rounded-full max-w-fit"
        >
          Add To Calender
        </a>
      </div>
    </div>
  );
}

export default SaveTheDateSection;
