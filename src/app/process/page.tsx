"use client";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ButtonLight from "../component/ButtonLight";
import budgetSlider from "../../../public/images/budget.svg";
import { useState } from "react";

export const processList = [
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
  {
    processNum: "07",
    processTitle: "Post-Launch Support",
    processDisc:
      "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.",
  },
  {
    processNum: "08",
    processTitle: "Continuous Improvement",
    processDisc:
      "We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.",
  },
];

const contactingCheckbox = [
  {
    id: 1,
    label: "contacting 1",
    contactingCheckboxName: "Web Design",
  },
  {
    id: 2,
    label: "contacting 2",
    contactingCheckboxName: "Collaboration",
  },
  {
    id: 3,
    label: "contacting 3",
    contactingCheckboxName: "Mobile App Design",
  },
  {
    id: 4,
    label: "contacting 4",
    contactingCheckboxName: "Others",
  },
];

export default function Process() {
  const [checkedItems, setCheckedItems] = useState([1]);

  const handleChange = (id: number) => {
    setCheckedItems(
      (prev) =>
        prev.includes(id)
          ? prev.filter((item) => item !== id) // remove if already checked
          : [...prev, id] // add if not checked
    );
  };

  return (
    <>
      <Header />
      <main className="pt-[69px] md:pt-[93px] lg:pt-[101px]">
        <div className="container mx-auto px-4">
          <div className="border-x border-[#262626]">
            <div className="bg-[url(/images/faq-bg.png)] bg-cover bg-center py-10 md:py-20 lg:py-[120px] px-4 text-center">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[normal]">
                Process of Starting the Project
              </h3>
              <p className="mt-3.5 md:text-lg lg:text-xl text-[#E6E6E6]">
                At SquareUp, we value transparency, collaboration, and
                delivering exceptional results.
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
              {processList.map((data, i) => (
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
            <div className="md:w-[75%] lg:w-[66%] mx-auto p-5 md:p-8 lg:p-12 xl:p-20 md:border-x border-[#262626]">
              <div className="flex flex-col gap-6 lg:gap-10">
                <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
                  <div className="flex-1 rounded-lg p-5 xl:py-6 xl:px-10 border border-[#262626] bg-[rgba(36,36,36,0.5)]">
                    <label className="block text-xl lg:text-[22px] font-medium mb-5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="w-full border-b border-[#333333] text-lg pb-1 outline-none placeholder:text-[#656567]"
                    />
                  </div>
                  <div className="flex-1 rounded-lg p-5 xl:py-6 xl:px-10 border border-[#262626] bg-[rgba(36,36,36,0.5)]">
                    <label className="block text-xl lg:text-[22px] font-medium mb-5">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="w-full border-b border-[#333333] text-lg pb-1 outline-none placeholder:text-[#656567]"
                    />
                  </div>
                </div>
                <div className="p-5 xl:p-10 rounded-xl border border-[#262626] bg-[rgba(36,36,36,0.5)]">
                  <h3 className="text-xl lg:text-[22px] font-medium mb-5 md:mb-10">
                    Why are you contacting us?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-y-3 md:gap-y-6 gap-x-5">
                    {contactingCheckbox.map((data) => {
                      return (
                        <label
                          key={data.id}
                          className="inline-flex items-center gap-2.5 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={checkedItems.includes(data.id)}
                            onChange={() => handleChange(data.id)}
                            className="peer hidden"
                          />
                          <span className="w-[28px] h-[28px] flex items-center justify-center rounded border border-[#333333] group">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="hidden group-peer-checked:block"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.5972 5.08403C15.8409 5.2372 15.9068 5.54764 15.7443 5.7774L9.38069 14.7773C9.29256 14.902 9.14981 14.9828 8.99171 14.9976C8.83361 15.0123 8.67682 14.9595 8.56447 14.8536L4.32207 10.8536C4.11497 10.6583 4.11497 10.3417 4.32207 10.1465C4.52916 9.95121 4.86493 9.95121 5.07203 10.1465L8.85703 13.7152L14.8618 5.2227C15.0243 4.99294 15.3535 4.93085 15.5972 5.08403Z"
                                fill="#9EFF00"
                              />
                            </svg>
                          </span>
                          <span className="text-[#FDFFFA] text-lg">
                            {data.contactingCheckboxName}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className="p-5 xl:p-10 rounded-xl border border-[#262626] bg-[rgba(36,36,36,0.5)]">
                  <h3 className="text-xl lg:text-[22px] font-medium mb-3.5">
                    Your Budget
                  </h3>
                  <p className="text-lg text-[#E6E6E6] mb-10">
                    Slide to indicate your budget range
                  </p>
                  <Image
                    src={budgetSlider}
                    alt="Budget Slider"
                    className="w-full"
                  />
                </div>
                <div className="p-5 xl:py-6 xl:px-10 rounded-xl border border-[#262626] bg-[rgba(36,36,36,0.5)]">
                  <h3 className="text-xl lg:text-[22px] font-medium mb-5">
                    Your Message
                  </h3>
                  <textarea
                    name=""
                    rows={2}
                    placeholder="Type here"
                    className="w-full border-b border-[#333333] text-lg pb-1 outline-none placeholder:text-[#656567] resize-none"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <ButtonLight className="py-3 px-7 lg:py-[18px] lg:px-11 w-full md:w-auto">
                    Submit
                  </ButtonLight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
