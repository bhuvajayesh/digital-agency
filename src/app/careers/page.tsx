"use client";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
import designjobIcon1 from "../../../public/images/careers/design-job-icon1.svg";
import designjobIcon2 from "../../../public/images/careers/design-job-icon2.svg";
import designjobIcon3 from "../../../public/images/careers/design-job-icon3.svg";
import devjobIcon1 from "../../../public/images/careers/design-job-icon1.svg";
import devjobIcon2 from "../../../public/images/careers/dev-job-icon2.svg";
import devjobIcon3 from "../../../public/images/careers/dev-job-icon3.svg";
import managerjobIcon1 from "../../../public/images/careers/mana-job-icon1.svg";
import managerjobIcon2 from "../../../public/images/careers/mana-job-icon2.svg";
import managerjobIcon3 from "../../../public/images/careers/mana-job-icon3.svg";
import qajobIcon1 from "../../../public/images/careers/qa-job-icon1.svg";
import qajobIcon2 from "../../../public/images/careers/qa-job-icon2.svg";
import qajobIcon3 from "../../../public/images/careers/qa-job-icon3.svg";
import ButtonLight from "../component/ButtonLight";
import TodaySquareUp from "../component/TodaySquareUp";

export const careersList = [
  {
    careersListTitle: "Innovative and Impactful Projects",
    careersListDisc:
      "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
  },
  {
    careersListTitle: "Supportive Environment",
    careersListDisc:
      "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
  },
  {
    careersListTitle: "Continuous Learning and Growth",
    careersListDisc:
      "We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies.",
  },
  {
    careersListTitle: "Challenging and Rewarding Work",
    careersListDisc:
      "Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life.",
  },
];

export const currentOpenings = [
  {
    sections: [
      {
        title: "Design Job Openings",
        items: [
          {
            icon: designjobIcon1,
            title: "UI Designer",
            disctiption:
              "Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.",
            applyNow: "Apply Now",
          },
          {
            icon: designjobIcon2,
            title: "UX Designer",
            disctiption:
              "Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.",
            applyNow: "Apply Now",
          },
          {
            icon: designjobIcon3,
            title: "Design Head",
            disctiption:
              "Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs.",
            applyNow: "Apply Now",
          },
        ],
      },
      {
        title: "Development Job Openings",
        items: [
          {
            icon: devjobIcon1,
            title: "Front - End Developer",
            disctiption:
              "Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences.",
            applyNow: "Apply Now",
          },
          {
            icon: devjobIcon2,
            title: "Back - End  Developer",
            disctiption:
              "Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface.",
            applyNow: "Apply Now",
          },
          {
            icon: devjobIcon3,
            title: "Full Stack Developer",
            disctiption:
              "Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions.",
            applyNow: "Apply Now",
          },
        ],
      },
      {
        title: "Management Job Openings",
        items: [
          {
            icon: managerjobIcon1,
            title: "BA Manager",
            disctiption:
              "Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts.",
            applyNow: "Apply Now",
          },
          {
            icon: managerjobIcon2,
            title: "Project Manager",
            disctiption:
              "Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success.",
            applyNow: "Apply Now",
          },
          {
            icon: managerjobIcon3,
            title: "HR Manager",
            disctiption:
              "Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture.",
            applyNow: "Apply Now",
          },
        ],
      },
      {
        title: "QA Job Openings",
        items: [
          {
            icon: qajobIcon1,
            title: "QA Tester",
            disctiption:
              "Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience.",
            applyNow: "Apply Now",
          },
          {
            icon: qajobIcon2,
            title: "SQL Tester",
            disctiption:
              "Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data.",
            applyNow: "Apply Now",
          },
          {
            icon: qajobIcon3,
            title: "Manual Tester",
            disctiption:
              "Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. Collaborate with developers and QA testers to troubleshoot issues and enhance software performance.",
            applyNow: "Apply Now",
          },
        ],
      },
    ],
  },
];

export default function Careers() {
  return (
    <>
      <Header />
      <main className="pt-[69px] md:pt-[93px] lg:pt-[101px]">
        <div className="container mx-auto px-4">
          <div className="border-x border-[#262626]">
            <div className="bg-[url(/images/faq-bg.png)] bg-cover bg-center py-10 md:py-20 lg:py-[120px] px-4 text-center">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[normal]">
                Join Our Team at SquareUp
              </h3>
              <p className="mt-3.5 md:text-lg text-[#E6E6E6]">
                Unlock your potential and join our team of innovators and
                problem solvers.
              </p>
            </div>
            <div className="">
              <div className="pt-10 md:pt-20 pb-10 xl:pt-[120px] xl:pb-[50px] px-4 md:px-6 xl:px-10 2xl:px-[50px] border-t border-[#262626]">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-[normal] font-semibold mb-3.5">
                  Welcome to SquareUp, where talent meets opportunity!
                </h2>
                <p className="text-sm md:text-base lg:text-lg mb-[30px] md:mb-[50px] text-[#E6E6E6]">
                  At SquareUp, we believe that the success of our agency lies in
                  the talent, passion, and dedication of our team members. We
                  are a digital product agency that{" "}
                  <br className="hidden 2xl:block" /> thrives on innovation,
                  creativity, and collaboration. If you're ready to make a
                  difference and contribute to cutting-edge projects, we invite
                  you to explore <br className="hidden 2xl:block" />
                  career opportunities with us.
                </p>
                <div className="md:text-lg lg:text-xl xl:text-[22px] leading-[normal] bg-[#262626] rounded-lg py-3 px-3.5 inline-block">
                  Why Work at SquareUp?
                </div>
              </div>
              <div className="grid md:grid-cols-2">
                {careersList.map((data, i) => (
                  <div
                    key={i}
                    className="py-10 px-6 md:p-6 lg:py-16 lg:px-8 xl:py-20 xl:px-10 2xl:py-[100px] 2xl:px-[50px] not-even:border-r border-t border-[#262626]"
                  >
                    <h2 className="text-2xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-[40px] font-medium text-[#D8FF99] pb-5 mb-5 lg:pb-10 lg:mb-10 2xl:pb-[50px] 2xl:mb-[50px] border-b border-[#262626]">
                      {data.careersListTitle}
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-[#98989A]">
                      {data.careersListDisc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {currentOpenings.map((service, i) => (
                <div key={i}>
                  <div className="pt-10 md:pt-20 pb-10 xl:pt-[120px] xl:pb-[50px] px-4 md:px-6 xl:px-10 2xl:px-[50px] border-y border-[#262626]">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[normal] font-semibold mb-3.5">
                      Current Openings
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-[#E6E6E6]">
                      We are always on the lookout for talented individuals who
                      are passionate about creating exceptional digital
                      experiences. Whether you're a designer, engineer, project
                      manager, or have skills that align with our agency's
                      mission, we encourage you to explore our open positions.
                    </p>
                  </div>
                  {service.sections.map((section, j) => (
                    <div key={j}>
                      <div className="py-10 px-4 md:p-6 xl:p-10 2xl:p-[50px]">
                        <h3 className="text-xl lg:text-2xl xl:text-[28px] font-medium text-[#98989A] text-center md:text-left">
                          {section.title}
                        </h3>
                      </div>
                      <div className="grid md:grid-cols-3">
                        {section.items.map((item, k) => (
                          <div
                            key={k}
                            className="not-last:border-r border-y border-[#262626] p-5 md:p-6 xl:p-10 2xl:p-[50px] flex flex-col"
                          >
                            <div className="flex-1">
                              <div className="w-14 md:w-[70px] 2xl:w-[88px] p-2.5 md:p-0 flex items-center justify-center aspect-square rounded-md md:rounded-xl border border-[#262626] bg-[linear-gradient(130.97deg,rgba(158,255,0,0.2)_-66.81%,rgba(158,255,0,0)_37.19%)]">
                                <Image src={item.icon} alt={item.title} />
                              </div>
                              <h4 className="text-xl xl:text-2xl leading-[normal] font-medium text-[#E6E6E6] mt-6 mb-3.5 md:my-5 lg:mt-[30px] lg:mb-5">
                                {item.title}
                              </h4>
                              <p className="text-sm lg:text-lg text-[#E6E6E6] leading-normal mb-5 lg:mb-[30px]">
                                {item.disctiption}
                              </p>
                            </div>
                            <button className="p-[18px] rounded-lg bg-[#262626] hover:bg-[#9EFF00] hover:text-[#262626] transition-all md:text-lg leading-[normal] font-medium w-full cursor-pointer">
                              {item.applyNow}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
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
