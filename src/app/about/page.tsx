"use client";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ButtonLight from "../component/ButtonLight";
import TodaySquareUp from "../component/TodaySquareUp";

export const aboutList = [
  {
    processNum: "01",
    processTitle: "Design",
    processDisc:
      "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
  },
  {
    processNum: "02",
    processTitle: "Engineering",
    processDisc:
      "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.",
  },
  {
    processNum: "03",
    processTitle: "Project Management",
    processDisc:
      "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.",
  },
  {
    processNum: "04",
    processTitle: "Collaboration",
    processDisc:
      "At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.",
  },
  {
    processNum: "05",
    processTitle: "Client-Centric Approach",
    processDisc:
      "SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.",
  },
  {
    processNum: "06",
    processTitle: "Driving Success",
    processDisc:
      "With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.",
  },
];

export default function AboutUs() {
  return (
    <>
      <Header />
      <main className="pt-[69px] md:pt-[93px] lg:pt-[101px]">
        <div className="container mx-auto px-4">
          <div className="border-x border-[#262626]">
            <div className="bg-[url(/images/service-bg.png)] bg-cover bg-center py-10 md:py-20 lg:py-[120px] px-4 text-center">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[normal]">
                About Us
              </h3>
              <p className="mt-3.5 md:text-lg lg:text-xl text-[#E6E6E6]">
                Welcome to SquareUp, where collaboration, expertise, and
                client-centricity intersect to shape the future of digital{" "}
                <br className="hidden 2xl:block" />
                innovation.
              </p>
            </div>
            <div className="py-10 px-4 md:p-10 lg:p-20 xl:py-[100px] xl:px-[150px] border-t border-[#262626] flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20 xl:gap-[100px]">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[normal] font-semibold mb-5">
                  About SquareUp
                </h2>
                <p className="lg:text-lg xl:text-xl text-[#E6E6E6]">
                  SquareUp is a digital product agency that is passionate about
                  crafting exceptional digital experiences. We specialize in
                  design, engineering, and project management, helping
                  businesses thrive in the digital landscape. At SquareUp, we
                  follow a structured and collaborative process to ensure the
                  successful delivery of exceptional digital products. Our
                  process combines industry best practices, creative thinking,
                  and a client-centric approach.
                </p>
              </div>
              <div className="lg:flex-1 bg-[url(/images/about-squareup-bg.jpg)] bg-cover bg-center w-60 lg:w-auto h-60 lg:h-96 xl:h-[500px] flex items-center justify-center">
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
            </div>
            <div className="py-10 px-6 md:p-10 xl:py-[100px] xl:px-[50px] border-t border-[#262626]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[58px] leading-[normal] font-semibold">
                Our Story
              </h2>
            </div>
            <div className="grid md:grid-cols-2">
              {aboutList.map((data, i) => (
                <div
                  key={i}
                  className="border-y border-[#262626] not-even:border-r py-10 px-6 md:p-6 lg:py-20 lg:px-10 xl:py-[100px] xl:px-[50px]"
                >
                  <div className="flex items-end gap-4 lg:gap-6">
                    <h2 className="text-6xl md:text-5xl lg:text-8xl xl:text-[120px] 2xl:text-[150px] leading-none font-semibold text-[#D8FF99]">
                      {data.processNum}
                    </h2>
                    <label className="flex-1 text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-[38px] font-semibold text-[#D8FF99] pb-3.5 md:pb-4 lg:pb-[26px] border-b border-[#262626]">
                      {data.processTitle}
                    </label>
                  </div>
                  <p className="lg:text-lg text-[#98989A] mt-6 lg:mt-10 xl:mt-[50px] leading-[normal] lg:leading-[inherit]">
                    {data.processDisc}
                  </p>
                </div>
              ))}
            </div>
            <TodaySquareUp />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
