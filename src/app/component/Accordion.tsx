"use client";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const accordionList = [
  {
    accordionNum: "01",
    accordionTitle: "What services does SquareUp provide?",
    accordionDisc:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    accordionNum: "02",
    accordionTitle: "How can SquareUp help my business?",
    accordionDisc:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    accordionNum: "03",
    accordionTitle: "What industries does SquareUp work with?",
    accordionDisc:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    accordionNum: "04",
    accordionTitle:
      "How long does it take to complete a project with SquareUp?",
    accordionDisc:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    accordionNum: "05",
    accordionTitle:
      "Do you offer ongoing support and maintenance after the project is completed?",
    accordionDisc:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    accordionNum: "06",
    accordionTitle:
      "Can you work with existing design or development frameworks?",
    accordionDisc:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    accordionNum: "07",
    accordionTitle:
      "How involved will I be in the project development process?",
    accordionDisc:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    accordionNum: "08",
    accordionTitle: "Can you help with website or app maintenance and updates?",
    accordionDisc:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
];

export default function AccordionList() {
  return (
    <Accordion className="custom-accordion grid grid-cols-1 lg:grid-cols-2 border-y border-[#262626]">
      <div className="lg:py-12 xl:py-20 border-x border-[#262626]">
        {accordionList.slice(0, 4).map((data, i) => (
          <AccordionItem
            key={i}
            className="p-4 md:p-6 xl:py-[30px] xl:px-[50px] border-y border-[#262626]"
          >
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="accordion-head flex items-center gap-2 md:gap-4 lg:gap-6 xl:gap-[30px] cursor-pointer">
                  <div className="accordion-number flex-none w-12 md:w-14 lg:w-[70px] 2xl:w-20 aspect-square text-xl md:text-2xl lg:text-[28px] font-medium lg:font-semibold flex items-center justify-center rounded-xl bg-[linear-gradient(180deg,#242424_0%,rgba(36,36,36,0)_100%)]">
                    {data.accordionNum}
                  </div>
                  <h3 className="flex-1 md:text-lg xl:text-xl 2xl:text-[22px] font-medium pr-11 leading-[normal] md:leading-[inherit]">
                    {data.accordionTitle}
                  </h3>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="p-0 md:pl-[110px]">
              <p className="leading-[normal]">{data.accordionDisc}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </div>
      <div className="lg:py-12 xl:py-20 border-x border-[#262626]">
        {accordionList.slice(4).map((data, i) => (
          <AccordionItem
            key={i + 4}
            className="p-4 md:p-6 xl:py-[30px] xl:px-[50px] border-y border-[#262626]"
          >
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="accordion-head flex items-center gap-2 md:gap-4 lg:gap-6 xl:gap-[30px] cursor-pointer">
                  <div className="accordion-number flex-none w-14 lg:w-[70px] 2xl:w-20 aspect-square text-2xl lg:text-[28px] font-medium lg:font-semibold flex items-center justify-center rounded-xl bg-[linear-gradient(180deg,#242424_0%,rgba(36,36,36,0)_100%)]">
                    {data.accordionNum}
                  </div>
                  <h3 className="flex-1 md:text-lg xl:text-xl 2xl:text-[22px] font-medium pr-11 leading-[normal] md:leading-[inherit]">
                    {data.accordionTitle}
                  </h3>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="p-0 md:pl-[110px]">
              <p className="leading-[normal]">{data.accordionDisc}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </div>
    </Accordion>
  );
}
