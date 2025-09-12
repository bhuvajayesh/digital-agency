"use client";

import ButtonLight from "./ButtonLight";

export default function TodaySquareUp() {
  return (
    <div className="py-10 px-5 md:p-10 lg:p-16 xl:p-20">
      <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10 text-center md:text-left">
        <div className="flex-none">
          <svg
            width="151"
            height="150"
            viewBox="0 0 151 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 lg:w-32 xl:w-[150px] h-auto aspect-square"
          >
            <g filter="url(#filter0_i_285_13)">
              <rect width="150.704" height="150" rx="27" fill="#9EFF00" />
              <path
                d="M35.3516 51.4286L75.3516 75V120L35.3516 97.1428L35.3516 51.4286Z"
                fill="#1A1A1A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M78.881 74.9684V113.918L111.822 95.0946V55.5567L78.881 74.9684ZM115.352 97.1428L75.3516 120V74.9999L35.3516 51.4285L75.3516 30L115.352 51.4285V97.1428ZM109.972 52.5505L75.3516 34.004L42.5521 51.5751L77.0895 71.9275L109.972 52.5505Z"
                fill="#1A1A1A"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_285_13"
                x="0"
                y="0"
                width="150.703"
                height="150"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="16"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_innerShadow_285_13"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="11.5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_285_13"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="flex-1">
          <h2 className="mb-4 xl:mb-5 text-xl lg:text-2xl xl:text-3xl font-medium text-[#98989A]">
            Today, SquareUp Continues to Thrive as a Leading Digital Product
            Agency.....
          </h2>
          <p className="text-sm md:text-base xl:text-lg text-[#98989A]">
            Combining the power of design, engineering, and project management
            to create transformative digital experiences. They invite you to
            join them on their journey and discover how they can help bring your
            digital ideas to life.
          </p>
        </div>
      </div>
      <div className="mt-[30px] md:mt-[50px] p-5 md:py-6 md:px-10 border border-[#262626] rounded-xl flex flex-wrap lg:flex-nowrap justify-center lg:justify-start items-center gap-3.5 lg:gap-5">
        <span className="text-lg text-[#98989A]">Welcome to SquareUp</span>
        <div className="xl:pr-5 lg:flex-1">
          <label
            htmlFor=""
            className="bg-[#262626] py-2.5 px-3.5 md:py-3.5 md:px-5 rounded-lg xl:text-lg inline-block text-center lg:text-left"
          >
            Where collaboration, Expertise, and Client-Centricity Intersect to
            Shape the Future of Digital Innovation.
          </label>
        </div>
        <ButtonLight className="py-3.5 px-7 lg:py-[18px] lg:px-[34px] w-full md:w-auto">
          Start Project
        </ButtonLight>
      </div>
    </div>
  );
}
