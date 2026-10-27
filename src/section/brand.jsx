
import React from "react";

function Brand() {
  return (
    <section className="px-5 py-6 sm:px-8 lg:px-10 bg-[#FFFFFF]">
      <div className="
        flex items-center gap-5
        overflow-x-auto
        pb-3
        md:grid md:grid-cols-4 md:gap-0
        md:overflow-visible md:pb-0
      ">

        {/* Description */}
        <div className="
          flex min-h-28 w-64 shrink-0 items-center
          md:min-h-32 md:w-auto md:pr-5
        ">
          <p className="text-base font-normal leading-7 md:text-left">
            Pave your path to career success by gaining a professional Google
            certificate with the support of C4U
          </p>
        </div>

        {/* Google Logo */}
        <div className="
          flex min-h-24 w-40 shrink-0 items-center justify-center
          border-l border-[#D1D3D4] px-4
          md:min-h-32 md:w-auto md:px-4
        ">
          <img
            src="/Google.png"
            alt="Google"
            className="h-auto w-full max-w-40 object-contain lg:max-w-48"
          />
        </div>

        {/* Work and Pensions Logo */}
        <div className="
          flex min-h-24 w-40 shrink-0 items-center justify-center
          border-l border-[#D1D3D4] px-4
          md:min-h-32 md:w-auto md:px-4
        ">
          <img
            src="/work&pension.png"
            alt="Work and Pensions"
            className="h-auto w-full max-w-36 object-contain lg:max-w-40"
          />
        </div>

        {/* C4U Logo */}
        <div className="
          flex min-h-24 w-40 shrink-0 items-center justify-center
          border-l border-[#D1D3D4] px-4
          md:min-h-32 md:w-auto md:px-4
        ">
          <img
            src="/logo.svg"
            alt="C4U"
            className="h-auto w-full max-w-40 object-contain lg:max-w-48"
          />
        </div>

      </div>
    </section>
  );
}

export default Brand;
