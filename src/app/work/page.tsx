"use client";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ButtonLight from "../component/ButtonLight";
import workPic1 from "../../../public/images/work-pic1.jpg";
import workPic2 from "../../../public/images/work-pic2.jpg";
import workPic3 from "../../../public/images/work-pic3.jpg";
import workPic4 from "../../../public/images/work-pic4.jpg";
import workPic5 from "../../../public/images/work-pic5.jpg";
import workPic6 from "../../../public/images/work-pic6.jpg";
import workPic7 from "../../../public/images/work-pic7.jpg";
import workPic8 from "../../../public/images/work-pic8.jpg";
import workPic9 from "../../../public/images/work-pic9.jpg";
import workPic10 from "../../../public/images/work-pic10.jpg";
import Link from "next/link";

export const ourWorks = [
  {
    workCategory: "E-Commerce Platform for Fashion Hub",
    workPic: workPic1,
    workTitle: "Chic Boutique",
    workWebsite: "htttps:/www.chicboutique.com",
    workLink: "https://www.google.com/",
    workDisc:
      "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
  },
  {
    workCategory: "Mobile App for Food Delivery Service",
    workPic: workPic2,
    workTitle: "HungryBites",
    workWebsite: "htttps:/www.hungrybites.com",
    workLink: "https://www.google.com/",
    workDisc:
      "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  {
    workCategory: "Booking and Reservation System for Event Management",
    workPic: workPic3,
    workTitle: "EventMasters",
    workWebsite: "htttps:/www.eventmasters.com",
    workLink: "https://www.google.com/",
    workDisc:
      "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.",
  },
  {
    workCategory: "Custom Software for Workflow Automation",
    workPic: workPic4,
    workTitle: "ProTech Solutions",
    workWebsite: "htttps:/www.protechsolutions.com",
    workLink: "https://www.google.com/",
    workDisc:
      "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  {
    workCategory: "Web Portal for Real Estate Listings",
    workPic: workPic5,
    workTitle: "Dream Homes Realty",
    workWebsite: "htttps:/www.dreamhomesrealty.com",
    workLink: "https://www.google.com/",
    workDisc:
      "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.",
  },
  {
    workCategory: "Mobile App for Fitness Tracking",
    workPic: workPic6,
    workTitle: "FitLife Tracker",
    workWebsite: "htttps:/www.fitlifetracker.com",
    workLink: "https://www.google.com/",
    workDisc:
      "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.",
  },
  {
    workCategory: "Custom Software for Supply Chain Management",
    workPic: workPic7,
    workTitle: "Global Logistics Solutions",
    workWebsite: "htttps:/www.globallogisticssolutions.com",
    workLink: "https://www.google.com/",
    workDisc:
      "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
  },
  {
    workCategory: "Educational Platform for Online Learning",
    workPic: workPic8,
    workTitle: "EduConnect",
    workWebsite: "htttps:/www.educonnect.com",
    workLink: "https://www.google.com/",
    workDisc:
      "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.",
  },
  {
    workCategory: "Mobile App for Travel Planning",
    workPic: workPic9,
    workTitle: "WanderWise",
    workWebsite: "htttps:/www.wanderwise.com",
    workLink: "https://www.google.com/",
    workDisc:
      "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.",
  },
  {
    workCategory: "Web Application for Customer Relationship Management",
    workPic: workPic10,
    workTitle: "ConnectCRM",
    workWebsite: "htttps:/www.connectcrm.com",
    workLink: "https://www.google.com/",
    workDisc:
      "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.",
  },
];

export default function Work() {
  return (
    <>
      <Header />
      <main className="pt-[77px] md:pt-[93px] lg:pt-[101px]">
        <div className="container mx-auto px-4">
          <div className="border-x border-[#262626]">
            <div className="bg-[url(/images/about-us.png)] bg-cover bg-center py-10 md:py-20 lg:py-[120px] px-4 text-center">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[normal]">
                Our Works
              </h3>
              <p className="mt-3.5 md:text-lg text-[#E6E6E6]">
                Discover a portfolio of visually stunning and strategically
                crafted digital projects that showcase our creativity and
                expertise.
              </p>
            </div>
            <div className="pt-10 md:pt-20 pb-10 xl:pt-[120px] xl:pb-[50px] px-4 md:px-6 xl:px-10 2xl:px-[50px] border-t border-[#262626]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[normal] font-semibold mb-3.5">
                At SquareUp
              </h2>
              <p className="mb-[50px] text-lg text-[#E6E6E6]">
                We have had the privilege of working with a diverse range of
                clients and delivering exceptional digital products that drive
                success.
              </p>
              <div className="md:text-lg lg:text-xl xl:text-[22px] leading-[normal] bg-[#262626] rounded-lg py-3 px-3.5 inline-block">
                Here are ten examples of our notable works:
              </div>
            </div>
            <div className="grid grid-cols-2">
              {ourWorks.map((data, i) => (
                <div
                  key={i}
                  className="border-y border-[#262626] not-even:border-r"
                >
                  <h2 className="text-[26px] leading-[normal] font-medium text-[#98989A] py-[30px] px-[50px] border-b border-[#262626]">
                    {data.workCategory}
                  </h2>
                  <div className="px-[50px] pt-[30px] pb-[100px]">
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={data.workPic}
                        alt="Work"
                        className="w-full transition-transform duration-300 ease-out hover:scale-105"
                      />
                    </div>
                    <div className="py-[30px] flex items-center">
                      <div className="flex-1">
                        <h3 className="text-2xl font-medium text-[#E6E6E6] mb-2.5">
                          {data.workTitle}
                        </h3>
                        <label className="py-2.5 px-3.5 bg-[#262626] rounded-lg text-xl text-[#98989A] inline-block">
                          {data.workWebsite}
                        </label>
                      </div>
                      <div className="flex-none">
                        <Link
                          href={data.workLink}
                          target="_blank"
                          className="w-[54px] aspect-square bg-[#262626] hover:bg-black rounded-lg flex items-center justify-center"
                        >
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.87344 25.1266C9.37136 25.6245 10.1786 25.6245 10.6766 25.1266L22.95 12.8531V22.525C22.95 23.2292 23.5208 23.8 24.225 23.8C24.9292 23.8 25.5 23.2292 25.5 22.525V9.775C25.5 9.07084 24.9292 8.5 24.225 8.5H11.475C10.7708 8.5 10.2 9.07084 10.2 9.775C10.2 10.4792 10.7708 11.05 11.475 11.05H21.1469L8.87344 23.3234C8.37552 23.8214 8.37552 24.6286 8.87344 25.1266Z"
                              fill="#9EFF00"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <p className="text-lg text-[#98989A]">{data.workDisc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[url(/images/thank-you-bg.png)] bg-cover bg-center py-10 md:py-20 lg:py-[120px] px-4 text-center">
            <div className="w-16 md:w-20 aspect-square bg-[#9EFF00] rounded-2xl flex items-center justify-center mx-auto">
              <svg
                width="44"
                height="48"
                viewBox="0 0 44 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-auto md:w-auto"
              >
                <path
                  d="M0.666749 11.4287L22.0001 24.0001L22.0001 48.0001L0.666748 35.8096L0.666749 11.4287Z"
                  fill="#1A1A1A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.8824 23.9832V44.7563L41.451 34.7171V13.6302L23.8824 23.9832ZM43.3334 35.8095L22.0001 47.9999V24L0.666748 11.4286L22.0001 0L43.3334 11.4286V35.8095ZM40.4642 12.0269L22.0001 2.13544L4.50703 11.5067L22.927 22.3613L40.4642 12.0269Z"
                  fill="#1A1A1A"
                />
              </svg>
            </div>
            <div className="my-6 md:my-10 lg:my-[50px]">
              <h3 className="text-2xl md:text-4xl lg:text-[38px] font-semibold leading-[normal]">
                Let us Bring your Ideas to Life in the Digital World.
              </h3>
              <p className="mt-3.5 md:text-lg text-[#E6E6E6]">
                No matter which services you choose, we are committed to
                delivering exceptional results that exceed your{" "}
                <br className="hidden lg:block" /> expectations. Our
                multidisciplinary team works closely together to ensure seamless
                collaboration and a unified vision{" "}
                <br className="hidden lg:block" /> for your digital product.
              </p>
            </div>
            <ButtonLight className="py-3.5 px-7 lg:py-[18px] lg:px-[34px]">
              Start Project
            </ButtonLight>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
