import React from "react";

function CopleSection() {
  return (
    <div className="p-10 font-['Rondal-Semibold'] overflow-hidden relative">
      <img
        src="/frame/mempelai/b-r.png"
        className="absolute -z-10 -right-32 -bottom-32 scale-50"
        alt=""
      />
      <img
        src="/frame/mempelai/b-r.png"
        className="absolute -z-10 -left-32 -top-32 scale-50 rotate-180"
        alt=""
      />

      <h1 className="text-center font-semibold text-xl">
        بسم الله الرحمن الرحيم
      </h1>

      <p className="text-center mt-5 text-xs">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
        animi. Corrupti aperiam iusto amet, id sed dolor hic explicabo. Dolorem
        nesciunt quia veritatis autem laborum asperiores corrupti accusamus at
        sint!
      </p>

      <div className="mt-10 flex flex-col items-center gap-10">
        <div className="w-full flex flex-col items-center gap-5">
          <div className="w-[75%] sm:w-[60%] md:w-[30%] lg:w-[60%] h-96 bg-gray-700 rounded-t-full"></div>

          <div className="text-center">
            <h1 className="text-3xl">Sutipan</h1>
            <p>Son Of. Katemi</p>
          </div>
        </div>

        <h1 className="text-6xl">&</h1>

        <div className="w-full flex flex-col items-center gap-5">
          <div className="w-[75%] sm:w-[60%] md:w-[30%] lg:w-[60%] h-96 bg-gray-700 rounded-t-full"></div>

          <div className="text-center">
            <h1 className="text-3xl">Fitri</h1>
            <p>Son Of. Katemi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CopleSection;
