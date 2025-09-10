"use client";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ButtonLight from "../component/ButtonLight";
import budgetSlider from "../../../public/images/budget.svg";
import { useState } from "react";

export const aboutList = [
  {
    processNum: "01",
    processTitle: "Discovery",
    processDisc:
      "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
  },
  {
    processNum: "02",
    processTitle: "Planning and Strategy",
    processDisc:
      "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.",
  },
  {
    processNum: "03",
    processTitle: "Design",
    processDisc:
      "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.",
  },
  {
    processNum: "04",
    processTitle: "Development",
    processDisc:
      "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.",
  },
  {
    processNum: "05",
    processTitle: "Testing and Quality Assurance",
    processDisc:
      "We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.",
  },
  {
    processNum: "06",
    processTitle: "Deployment and Launch",
    processDisc:
      "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.",
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
                <br className="hidden lg:block" />
                innovation.
              </p>
            </div>
            <div className="pt-10 md:pt-20 pb-10 xl:pt-[120px] xl:pb-[50px] px-4 md:px-6 xl:px-10 2xl:px-[50px] border-t border-[#262626]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[normal] font-semibold mb-3.5">
                At SquareUp
              </h2>
              <p className="mb-6 md:mb-10 lg:mb-[50px] md:text-lg text-[#E6E6E6]">
                We follow a structured and collaborative process to ensure the
                successful delivery of exceptional digital products. Our process
                combines industry best <br className="hidden lg:block" />{" "}
                practices, creative thinking, and a client-centric approach.
              </p>
              <div className="md:text-lg lg:text-xl xl:text-[22px] leading-[normal] bg-[#262626] rounded-lg py-3 px-3.5 inline-block">
                Here's an overview of our typical process:
              </div>
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
                    <label className="flex-1 text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-[#98989A] pb-4 lg:pb-[26px] border-b border-[#262626]">
                      {data.processTitle}
                    </label>
                  </div>
                  <p className="lg:text-lg text-[#98989A] mt-6 lg:mt-10 xl:mt-[50px] leading-[normal] lg:leading-[inherit]">
                    {data.processDisc}
                  </p>
                </div>
              ))}
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
                  Thank you for your Interest in SquareUp.
                </h3>
                <p className="mt-3.5 md:text-lg text-[#E6E6E6]">
                  We would love to hear from you and discuss how we can help
                  bring your digital ideas to life. Here are the different ways{" "}
                  <br className="hidden lg:block" /> you can get in touch with
                  us.
                </p>
              </div>
              <ButtonLight className="py-3.5 px-7 lg:py-[18px] lg:px-[34px]">
                Start Project
              </ButtonLight>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
