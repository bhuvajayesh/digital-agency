"use client";

import ButtonLight from "./ButtonLight";
import budgetSlider from "../../../public/images/budget.svg";
import Image from "next/image";
import { useState } from "react";

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

export default function Form() {
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
          <Image src={budgetSlider} alt="Budget Slider" className="w-full" />
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
  );
}
