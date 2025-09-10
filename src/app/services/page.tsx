"use client";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
import designServiceIcon1 from "../../../public/images/services/design-service-icon1.svg";
import designServiceIcon2 from "../../../public/images/services/design-service-icon2.svg";
import designServiceIcon3 from "../../../public/images/services/design-service-icon3.svg";
import designServiceIcon4 from "../../../public/images/services/design-service-icon4.svg";
import designServiceIcon5 from "../../../public/images/services/design-service-icon5.svg";
import designServiceIcon6 from "../../../public/images/services/design-service-icon6.svg";
import designServiceIcon7 from "../../../public/images/services/design-service-icon7.svg";
import designServiceIcon8 from "../../../public/images/services/design-service-icon8.svg";
import designServiceIcon9 from "../../../public/images/services/design-service-icon9.svg";
import designServiceIcon10 from "../../../public/images/services/design-service-icon10.svg";
import designServiceIcon11 from "../../../public/images/services/design-service-icon11.svg";
import designServiceIcon12 from "../../../public/images/services/design-service-icon12.svg";
import engServiceIcon1 from "../../../public/images/services/eng-service-icon1.svg";
import engServiceIcon2 from "../../../public/images/services/eng-service-icon2.svg";
import engServiceIcon3 from "../../../public/images/services/eng-service-icon3.svg";
import engServiceIcon4 from "../../../public/images/services/eng-service-icon4.svg";
import engServiceIcon5 from "../../../public/images/services/eng-service-icon5.svg";
import engServiceIcon6 from "../../../public/images/services/eng-service-icon6.svg";
import engServiceIcon7 from "../../../public/images/services/eng-service-icon7.svg";
import engServiceIcon8 from "../../../public/images/services/eng-service-icon8.svg";
import engServiceIcon9 from "../../../public/images/services/eng-service-icon9.svg";
import engServiceIcon10 from "../../../public/images/services/eng-service-icon10.svg";
import engServiceIcon11 from "../../../public/images/services/eng-service-icon11.svg";
import engServiceIcon12 from "../../../public/images/services/eng-service-icon12.svg";
import pmServiceIcon1 from "../../../public/images/services/pm-service-icon1.svg";
import pmServiceIcon2 from "../../../public/images/services/pm-service-icon2.svg";
import pmServiceIcon3 from "../../../public/images/services/pm-service-icon3.svg";
import pmServiceIcon4 from "../../../public/images/services/pm-service-icon4.svg";
import pmServiceIcon5 from "../../../public/images/services/pm-service-icon5.svg";
import pmServiceIcon6 from "../../../public/images/services/pm-service-icon6.svg";
import pmServiceIcon7 from "../../../public/images/services/pm-service-icon7.svg";
import pmServiceIcon8 from "../../../public/images/services/pm-service-icon8.svg";
import pmServiceIcon9 from "../../../public/images/services/pm-service-icon9.svg";
import pmServiceIcon10 from "../../../public/images/services/pm-service-icon10.svg";
import pmServiceIcon11 from "../../../public/images/services/pm-service-icon11.svg";
import pmServiceIcon12 from "../../../public/images/services/pm-service-icon12.svg";
import ButtonLight from "../component/ButtonLight";

export const servicesCategory = [
  {
    category: "Design",
    description:
      "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    title: "Our design services include:",
    sections: [
      {
        title: "User Experience (UX) Design",
        items: [
          {
            icon: designServiceIcon1,
            title: "User Research and Persona Development",
          },
          {
            icon: designServiceIcon2,
            title: "Information Architecture and Wireframing",
          },
          {
            icon: designServiceIcon3,
            title: "Interactive Prototyping and User Testing",
          },
          {
            icon: designServiceIcon4,
            title: "UI Design and Visual Branding",
          },
        ],
      },
      {
        title: "User Interface (UI) Design",
        items: [
          {
            icon: designServiceIcon5,
            title: "Intuitive and Visually Appealing Interface Design",
          },
          {
            icon: designServiceIcon6,
            title: "Custom Iconography and Illustration",
          },
          {
            icon: designServiceIcon7,
            title: "Typography and Color Palette Selection",
          },
          {
            icon: designServiceIcon8,
            title: "Responsive Design for Various Devices",
          },
        ],
      },
      {
        title: "Branding and Identity",
        items: [
          {
            icon: designServiceIcon9,
            title: "Logo Design and Visual Identity Development",
          },
          {
            icon: designServiceIcon10,
            title: "Brand Strategy and Positioning",
          },
          {
            icon: designServiceIcon11,
            title: "Brand Guidelines and Style Guides",
          },
          {
            icon: designServiceIcon12,
            title:
              "Marketing Collateral Design (Brochures, Business Cards, etc.)",
          },
        ],
      },
    ],
  },
  {
    category: "Engineering",
    description:
      "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    title: "Our engineering services include:",
    sections: [
      {
        title: "Web Development",
        items: [
          {
            icon: engServiceIcon1,
            title: "Front-End Development (HTML, CSS, JavaScript)",
          },
          {
            icon: engServiceIcon2,
            title: "Back-End Development (PHP, Python, Ruby)",
          },
          {
            icon: engServiceIcon3,
            title:
              "Content Management System (CMS) Development (WordPress, Drupal)",
          },
          {
            icon: engServiceIcon4,
            title: "E-Commerce Platform Development (Magento, Shopify)",
          },
        ],
      },
      {
        title: "Mobile App Development",
        items: [
          {
            icon: engServiceIcon5,
            title: "Native iOS and Android App Development",
          },
          {
            icon: engServiceIcon6,
            title: "Cross-Platform App Development (React Native, Flutter)",
          },
          {
            icon: engServiceIcon7,
            title: "App Prototyping and UI/UX Design Integration",
          },
          {
            icon: engServiceIcon8,
            title: "App Testing, Deployment, and Maintenance",
          },
        ],
      },
      {
        title: "Custom Software Development",
        items: [
          {
            icon: engServiceIcon9,
            title: "Enterprise Software Development",
          },
          {
            icon: engServiceIcon10,
            title: "Custom Web Application Development",
          },
          {
            icon: engServiceIcon11,
            title: "Integration with Third-Party APIs and Systems",
          },
          {
            icon: engServiceIcon12,
            title: "Legacy System Modernization and Migration",
          },
        ],
      },
    ],
  },
  {
    category: "Project Management",
    description:
      "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    title: "Our project management services include:",
    sections: [
      {
        title: "Project Planning and Scoping",
        items: [
          {
            icon: pmServiceIcon1,
            title: "Requirements Gathering and Analysis",
          },
          {
            icon: pmServiceIcon2,
            title: "Project Roadmap and Timeline Development",
          },
          {
            icon: pmServiceIcon3,
            title: "Resource Allocation and Task Assignment",
          },
          {
            icon: pmServiceIcon4,
            title: "Risk Assessment and Mitigation Strategies",
          },
        ],
      },
      {
        title: "Agile Development",
        items: [
          {
            icon: pmServiceIcon5,
            title: "Iterative Development and Sprints",
          },
          {
            icon: pmServiceIcon6,
            title: "Scrum or Kanban Methodology Implementation",
          },
          {
            icon: pmServiceIcon7,
            title: "Regular Progress Updates and Demos",
          },
          {
            icon: pmServiceIcon8,
            title: "Continuous Improvement and Feedback Incorporation",
          },
        ],
      },
      {
        title: "Quality Assurance and Testing",
        items: [
          {
            icon: pmServiceIcon9,
            title: "Test Planning and Execution",
          },
          {
            icon: pmServiceIcon10,
            title: "Functional and Usability Testing",
          },
          {
            icon: pmServiceIcon11,
            title: "Performance and Security Testing",
          },
          {
            icon: pmServiceIcon12,
            title: "Bug Tracking and Issue Resolution",
          },
        ],
      },
    ],
  },
];

export default function Services() {
  return (
    <>
      <Header />
      <main className="pt-[69px] md:pt-[93px] lg:pt-[101px]">
        <div className="container mx-auto px-4">
          <div className="border-x border-[#262626]">
            <div className="bg-[url(/images/service-bg.png)] bg-cover bg-center py-10 md:py-20 lg:py-[120px] px-4 text-center">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[normal]">
                Our Services
              </h3>
              <p className="mt-3.5 md:text-lg text-[#E6E6E6]">
                Transform your brand with our innovative digital solutions that
                captivate and engage your audience.
              </p>
            </div>
            <div className="">
              {servicesCategory.map((service, i) => (
                <div key={i}>
                  <div className="pt-10 md:pt-20 pb-10 xl:pt-[120px] xl:pb-[50px] px-4 md:px-6 xl:px-10 2xl:px-[50px] border-t border-[#262626]">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[normal] font-semibold mb-3.5">
                      {service.category}
                    </h2>
                    <p className="text-sm md:text-lg mb-[30px] md:mb-[50px] text-[#E6E6E6]">
                      {service.description}
                    </p>
                    <div className="md:text-lg lg:text-xl xl:text-[22px] leading-[normal] bg-[#262626] rounded-lg py-3 px-3.5 inline-block">
                      {service.title}
                    </div>
                  </div>

                  {service.sections.map((section, j) => (
                    <div key={j}>
                      <div className="py-10 px-4 md:p-6 xl:p-10 2xl:p-[50px] border-y border-[#262626]">
                        <h3 className="text-xl lg:text-2xl xl:text-[28px] font-medium text-[#98989A] text-center md:text-left">
                          {section.title}
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4">
                        {section.items.map((item, k) => (
                          <div
                            key={k}
                            className="not-last:border-r border-y md:border-y-0 border-[#262626] p-5 md:p-6 xl:p-10 2xl:p-[50px]"
                          >
                            <div className="w-14 md:w-[70px] 2xl:w-[88px] p-2.5 md:p-0 flex items-center justify-center aspect-square rounded-md md:rounded-xl border border-[#262626] bg-[linear-gradient(130.97deg,rgba(158,255,0,0.2)_-66.81%,rgba(158,255,0,0)_37.19%)]">
                              <Image src={item.icon} alt={item.title} />
                            </div>
                            <h4 className="lg:text-lg 2xl:text-xl leading-[normal] font-medium text-[#E6E6E6] mt-5 lg:mt-[30px]">
                              {item.title}
                            </h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
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
                  Let us Bring your Ideas to Life in the Digital World.
                </h3>
                <p className="mt-3.5 md:text-lg text-[#E6E6E6]">
                  No matter which services you choose, we are committed to
                  delivering exceptional results that exceed your{" "}
                  <br className="hidden lg:block" /> expectations. Our
                  multidisciplinary team works closely together to ensure
                  seamless collaboration and a unified vision{" "}
                  <br className="hidden lg:block" /> for your digital product.
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
