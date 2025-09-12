"use client";
import Image from "next/image";
import ButtonDark from "./component/ButtonDark";
import ButtonLight from "./component/ButtonLight";
import Header from "./component/Header";
import clientLogo1 from "../../public/images/client-logo1.png";
import clientLogo2 from "../../public/images/client-logo2.png";
import clientLogo3 from "../../public/images/client-logo3.png";
import clientLogo4 from "../../public/images/client-logo4.png";
import clientLogo5 from "../../public/images/client-logo5.png";
import clientLogo6 from "../../public/images/client-logo6.png";
import clientProfile1 from "../../public/images/client-profile1.jpg";
import clientProfile2 from "../../public/images/client-profile2.jpg";
import clientProfile3 from "../../public/images/client-profile3.jpg";
import clientProfile4 from "../../public/images/client-profile4.jpg";
import clientProfile5 from "../../public/images/client-profile5.jpg";
import clientProfile6 from "../../public/images/client-profile6.jpg";
import Link from "next/link";
import "react-accessible-accordion/dist/fancy-example.css";
import Footer from "./component/Footer";
import Form from "./component/Form";
import AccordionList from "./component/Accordion";

const clientLogos = [
  {
    clientLogo: clientLogo1,
  },
  {
    clientLogo: clientLogo2,
  },
  {
    clientLogo: clientLogo3,
  },
  {
    clientLogo: clientLogo4,
  },
  {
    clientLogo: clientLogo5,
  },
  {
    clientLogo: clientLogo6,
  },
];

const serviceList = [
  {
    serviceLogo: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2495 22.5C14.7013 22.5 17.4995 25.2982 17.4995 28.75C17.4995 33.5825 13.582 37.5 8.74951 37.5C5.50537 37.4999 2.67513 35.7335 1.16553 33.1162C0.935154 32.7167 0.943348 32.2226 1.18701 31.8311C1.4307 31.4396 1.87047 31.2139 2.33057 31.2441C2.38641 31.2478 2.44304 31.25 2.49951 31.25C3.88023 31.25 4.99951 30.1307 4.99951 28.75C4.99951 25.2983 7.79789 22.5002 11.2495 22.5ZM16.5493 15.7891C20.0186 17.2091 22.7903 19.981 24.2104 23.4502C23.0352 24.3419 21.7958 25.1543 20.4985 25.875L19.6636 26.3389C18.8358 23.4448 16.5547 21.1637 13.6606 20.3359L14.1245 19.501C14.8452 18.2037 15.6576 16.9643 16.5493 15.7891ZM34.3306 2.5C36.0807 2.5 37.4995 3.91878 37.4995 5.66895C37.4995 6.29458 37.3143 6.9062 36.9673 7.42676L31.3237 15.8916C29.7723 18.2187 27.9208 20.3184 25.8247 22.1406C24.2239 18.6161 21.3826 15.7743 17.8579 14.1738C19.6801 12.0778 21.7809 10.2272 24.1079 8.67578L32.5728 3.03223C33.0932 2.68526 33.7051 2.50008 34.3306 2.5Z"
          fill="#9EFF00"
        />
      </svg>
    ),
    serviceName: "Design",
    serviceDisc:
      "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    serviceButton: "Learn More",
  },
  {
    serviceLogo: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.75 8.89489C18.75 8.30297 18.4399 7.76794 18.0813 7.297C17.7132 6.8135 17.5 6.24 17.5 5.625C17.5 3.89911 19.1789 2.5 21.25 2.5C23.3211 2.5 25 3.89911 25 5.625C25 6.24 24.7868 6.8135 24.4187 7.297C24.0601 7.76794 23.75 8.30297 23.75 8.8949C23.75 9.44881 24.2128 9.891 24.7658 9.858C27.9501 9.66799 31.0831 9.28881 34.1536 8.73164C34.4915 8.67032 34.8398 8.75074 35.1166 8.95401C35.3935 9.15729 35.5744 9.4655 35.6171 9.80628C35.9905 12.7887 36.2021 15.821 36.2431 18.8941C36.2513 19.5047 35.7556 19.9998 35.1449 20C34.553 20 34.0179 19.6899 33.547 19.3313C33.0635 18.9632 32.49 18.75 31.875 18.75C30.1491 18.75 28.75 20.4289 28.75 22.5C28.75 24.5711 30.1491 26.25 31.875 26.25C32.49 26.25 33.0635 26.0368 33.547 25.6687C34.0179 25.3101 34.553 25 35.1449 25C35.6623 25 36.0731 25.4361 36.0357 25.9521C35.8379 28.6831 35.5051 31.3769 35.0439 34.0269C34.9535 34.5466 34.5465 34.9536 34.0267 35.044C30.9949 35.5717 27.9057 35.9312 24.7691 36.1128C24.2141 36.1449 23.75 35.7008 23.75 35.1449C23.75 34.553 24.0601 34.0179 24.4187 33.547C24.7868 33.0635 25 32.49 25 31.875C25 30.1491 23.3211 28.75 21.25 28.75C19.1789 28.75 17.5 30.1491 17.5 31.875C17.5 32.49 17.7132 33.0635 18.0813 33.547C18.4399 34.0179 18.75 34.553 18.75 35.1449C18.75 35.7475 18.2566 36.2342 17.6542 36.2171C15.005 36.142 12.3873 35.94 9.80689 35.6169C9.4661 35.5743 9.15789 35.3933 8.95462 35.1164C8.75135 34.8396 8.67093 34.4913 8.73225 34.1534C9.22038 31.4635 9.57191 28.7256 9.77933 25.9472C9.81763 25.4342 9.40938 25 8.89489 25C8.30297 25 7.76794 25.3101 7.297 25.6687C6.8135 26.0368 6.24 26.25 5.625 26.25C3.89911 26.25 2.5 24.5711 2.5 22.5C2.5 20.4289 3.89911 18.75 5.625 18.75C6.24 18.75 6.8135 18.9632 7.297 19.3313C7.76794 19.6899 8.30297 20 8.8949 20C9.5055 20 10.0013 19.505 9.99289 18.8944C9.95557 16.1807 9.78103 13.5004 9.47598 10.8605C9.43217 10.4813 9.56397 10.103 9.83384 9.8331C10.1037 9.56324 10.4821 9.43144 10.8612 9.47525C13.0984 9.73376 15.3643 9.89854 17.6551 9.96552C18.2569 9.98312 18.75 9.49695 18.75 8.89489Z"
          fill="#9EFF00"
        />
      </svg>
    ),
    serviceName: "Engineering",
    serviceDisc:
      "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    serviceButton: "Learn More",
  },
  {
    serviceLogo: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.285 22.7297C15.285 22.5887 15.3571 22.4618 15.4724 22.3207L21.4275 14.9989C21.8744 14.4346 22.6242 14.8155 22.3647 15.5068L20.4037 20.656H24.0806C24.3546 20.656 24.5997 20.8675 24.5997 21.1216C24.5997 21.2626 24.5276 21.4178 24.3978 21.5447L18.4572 28.8523C18.0102 29.4167 17.2459 29.0358 17.5056 28.3586L19.4809 23.1953H15.7896C15.5157 23.1953 15.285 22.9978 15.285 22.7297ZM7.52757 32.9717H32.4724C35.5005 32.9717 37 31.5187 37 28.6125V14.9707C37 12.0646 35.5005 10.6115 32.4724 10.6115H30.4826V8.72111C30.4826 7.64894 29.8482 7 28.738 7H24.4843C23.3885 7 22.7541 7.64894 22.7541 8.72111V10.6115H17.2603V8.72111C17.2603 7.64894 16.6259 7 15.5157 7H11.2621C10.1518 7 9.53181 7.64894 9.53181 8.72111V10.6115H7.52757C4.514 10.6115 3 12.0646 3 14.9707V28.6125C3 31.5187 4.514 32.9717 7.52757 32.9717Z"
          fill="#9EFF00"
        />
      </svg>
    ),
    serviceName: "Project Management",
    serviceDisc:
      "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    serviceButton: "Learn More",
  },
];

const squareUp = [
  {
    squareUpIcon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.3632 38.4339C26.0479 38.4339 30.6344 33.8474 30.6344 28.1788C30.6344 22.4941 26.0479 17.9076 20.3632 17.9076C14.6946 17.9076 10.1081 22.4941 10.1081 28.1788C10.1081 33.8474 14.6946 38.4339 20.3632 38.4339ZM17.4401 33.4597C16.8264 33.9119 16.1804 33.4436 16.4226 32.733L17.5854 29.2607L14.6139 27.1452C14.0486 26.7253 14.2263 25.934 15.0015 25.934L18.6513 25.9662L19.7657 22.4779C19.9917 21.7674 20.7669 21.7674 20.993 22.4779L22.1074 25.9662L25.7571 25.934C26.5323 25.934 26.6939 26.7414 26.1448 27.1291L23.1732 29.2607L24.336 32.733C24.5783 33.4436 23.9322 33.9119 23.3186 33.4597L20.3793 31.3118L17.4401 33.4597ZM10.528 20.4915C12.1107 18.4889 14.2909 16.9709 16.7941 16.2279L9.47824 3.08203L5.23085 9.5581C4.94015 9.97798 4.924 10.4463 5.1824 10.8662L10.528 20.4915ZM16.7456 10.7209H23.9969L28.9225 2H11.82L16.7456 10.7209ZM23.9484 16.2279C26.4678 16.9709 28.6319 18.4889 30.2145 20.4915L35.5762 10.8662C35.8185 10.4463 35.8024 9.97798 35.5117 9.5581L31.2642 3.08203L23.9484 16.2279Z"
          fill="#9EFF00"
        />
      </svg>
    ),
    squareUpName: "Expertise",
    squareUpDisc:
      "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
  },
  {
    squareUpIcon: (
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2112 29.1936H30.4336C32.21 29.1936 32.8436 28.6926 32.8436 27.7127C32.8436 24.84 29.189 20.8761 23.3167 20.8761C17.4557 20.8761 13.8012 24.84 13.8012 27.7127C13.8012 28.6926 14.4347 29.1936 16.2112 29.1936ZM23.328 18.883C25.7607 18.883 27.8538 16.7452 27.8538 13.9616C27.8538 11.2114 25.7494 9.17383 23.328 9.17383C20.9067 9.17383 18.8022 11.256 18.8022 13.9839C18.8022 16.7452 20.8954 18.883 23.328 18.883ZM3.99137 29.1936H12.5905C11.4138 27.5123 12.8507 24.1274 15.2833 22.2791C14.0274 21.4552 12.4094 20.8427 10.2936 20.8427C5.19072 20.8427 2 24.5505 2 27.6348C2 28.6369 2.56573 29.1936 3.99137 29.1936ZM10.3049 19.1392C12.4094 19.1392 14.2424 17.2686 14.2424 14.8524C14.2424 12.4585 12.3981 10.6881 10.3049 10.6881C8.20041 10.6881 6.34481 12.503 6.35613 14.8747C6.35613 17.2686 8.18909 19.1392 10.3049 19.1392ZM31.7008 18.5491C32.0856 18.8051 32.6173 18.7272 32.9228 18.2929C33.7941 17.1683 34.3146 15.5094 34.3146 13.8058C34.3146 12.1022 33.7941 10.4543 32.9228 9.31858C32.6173 8.88433 32.0856 8.80639 31.7008 9.06248C31.2483 9.37425 31.169 9.93098 31.5311 10.3875C32.1873 11.2782 32.5607 12.5142 32.5607 13.8058C32.5607 15.0974 32.1761 16.3221 31.5311 17.224C31.1804 17.6917 31.2483 18.2261 31.7008 18.5491ZM35.8986 21.4552C36.3172 21.7335 36.8376 21.6333 37.1431 21.2102C38.5914 19.2506 39.44 16.556 39.44 13.8058C39.44 11.0556 38.6028 8.33875 37.1431 6.40135C36.8376 5.97824 36.3172 5.87803 35.8986 6.15639C35.4799 6.43475 35.4121 6.95807 35.7402 7.41459C36.9735 9.12929 37.6862 11.4341 37.6862 13.8058C37.6862 16.1774 36.9508 18.4711 35.7402 20.1969C35.4234 20.6534 35.4799 21.1768 35.8986 21.4552Z"
          fill="#9EFF00"
        />
      </svg>
    ),
    squareUpName: "Client-Centric Approach",
    squareUpDisc:
      "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
  },
  {
    squareUpIcon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6374 36.66C19.9041 36.66 20.3209 36.5599 20.7377 36.3432C30.2238 31.3751 33.2748 28.891 33.2748 22.9059V10.3355C33.2748 8.61835 32.5411 8.06819 31.1408 7.48468C29.1902 6.68444 22.9551 4.41711 21.0211 3.75025C20.571 3.6002 20.1042 3.51685 19.6374 3.51685C19.1706 3.51685 18.7038 3.61688 18.2703 3.75025C16.3197 4.38377 10.0845 6.70112 8.13396 7.48468C6.75022 8.05152 6 8.61835 6 10.3355V22.9059C6 28.891 9.21762 31.0917 18.537 36.3432C18.9705 36.5767 19.3706 36.66 19.6374 36.66ZM12.1185 20.6385C12.1185 20.4385 12.2185 20.1884 12.4019 19.9717L21.8213 8.15154C22.5382 7.25128 23.7386 7.85146 23.3052 8.96845L20.2042 17.3043H26.0226C26.4727 17.3043 26.8061 17.6209 26.8061 18.0712C26.8061 18.2712 26.7061 18.5213 26.5228 18.738L17.1033 30.5582C16.3864 31.4584 15.2027 30.8582 15.6195 29.7579L18.7371 21.4055H12.902C12.4686 21.4055 12.1185 21.0886 12.1185 20.6385Z"
          fill="#9EFF00"
        />
      </svg>
    ),
    squareUpName: "Results-Driven Solutions",
    squareUpDisc:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
  },
  {
    squareUpIcon: (
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.33747 27.8223L9.74664 29.4589C10.2649 31.5867 11.397 32.6778 13.6474 32.6778H28.3365C30.6007 32.6778 31.719 31.6139 32.2509 29.4589L32.6601 27.8223H9.33747ZM8.88739 25.9538H33.1238L35.6879 15.4518L34.5695 14.8108L28.282 19.3934C27.8182 19.7208 27.5046 19.598 27.2454 19.2298L21.3261 10.2826L20.6714 10.2554L14.6976 19.2707C14.4657 19.6253 14.1929 19.7345 13.7292 19.4071L7.56441 14.9062L6.25507 15.2472L8.88739 25.9538ZM6.75971 18.1795C8.56006 18.1795 10.0058 16.7202 10.0058 14.9062C10.0058 13.1332 8.56006 11.6602 6.75971 11.6602C4.95937 11.6602 3.5 13.1195 3.5 14.9062C3.5 16.7202 4.973 18.1795 6.75971 18.1795ZM20.9988 12.5058C22.7855 12.5058 24.2448 11.0464 24.2448 9.24607C24.2448 7.473 22.7855 6 20.9988 6C19.1848 6 17.7391 7.45937 17.7391 9.24607C17.7391 11.0464 19.1985 12.5058 20.9988 12.5058ZM35.2242 18.1795C37.011 18.1795 38.4839 16.7202 38.4839 14.9062C38.4839 13.1195 37.0246 11.6602 35.2242 11.6602C33.4376 11.6602 31.9782 13.1332 31.9782 14.9062C31.9782 16.7202 33.4376 18.1795 35.2242 18.1795Z"
          fill="#9EFF00"
        />
      </svg>
    ),
    squareUpName: "Collaborative Partnership",
    squareUpDisc:
      "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
  },
];

const clientsSay = [
  {
    clientTitle:
      "SquareUp has been Instrumental in Transforming our Online Presence.",
    clientDisc:
      "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    clientProfile: clientProfile1,
    clientName: "John Smith",
    clientDesignation: "CEO of Chic Boutique",
    clientWebsite: "Open Website",
    clientWebsiteLink: "https://www.google.com/",
  },
  {
    clientTitle: "Working with SquareUp was a breeze.",
    clientDisc:
      "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
    clientProfile: clientProfile2,
    clientName: "Sarah Johnson",
    clientDesignation: "Founder of HungryBites.",
    clientWebsite: "Open Website",
    clientWebsiteLink: "https://www.google.com/",
  },
  {
    clientTitle:
      "SquareUp developed a comprehensive booking and reservation system for our event management company",
    clientDisc:
      "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
    clientProfile: clientProfile3,
    clientName: "Mark Thompson",
    clientDesignation: "CEO of EventMasters",
    clientWebsite: "Open Website",
    clientWebsiteLink: "https://www.google.com/",
  },
  {
    clientTitle:
      "ProTech Solutions turned to SquareUp to automate our workflow",
    clientDisc:
      "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
    clientProfile: clientProfile4,
    clientName: "Laura Adams",
    clientDesignation: "COO of ProTech Solutions.",
    clientWebsite: "Open Website",
    clientWebsiteLink: "https://www.google.com/",
  },
  {
    clientTitle:
      "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
    clientDisc:
      "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
    clientProfile: clientProfile5,
    clientName: "Michael Anderson",
    clientDesignation: "Founder of Dream Homes Realty.",
    clientWebsite: "Open Website",
    clientWebsiteLink: "https://www.google.com/",
  },
  {
    clientTitle:
      "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
    clientDisc:
      "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
    clientProfile: clientProfile6,
    clientName: "Emily Turner",
    clientDesignation: "CEO of FitLife Tracker",
    clientWebsite: "Open Website",
    clientWebsiteLink: "https://www.google.com/",
  },
];

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

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[69px] md:pt-[93px] lg:pt-[101px]">
        <div className="container mx-auto px-4">
          <div className="border-x border-[#262626]">
            <div className="bg-[url(/images/banner-bg.png)] bg-cover bg-center pt-12 md:pt-20 pb-24 md:pb-32 lg:pt-[112px] lg:pb-44 xl:pb-[274px] text-center">
              <h1 className="text-3xl md:text-5xl lg:text-[68px] lg:leading-[82px] font-semibold">
                A Digital Product Studio <br className="hidden md:block" />
                that will Work
              </h1>
              <div className="mt-10 mb-10 md:mb-[50px] inline-flex flex-wrap md:flex-nowrap items-center justify-center gap-1.5 p-4 md:p-5 lg:py-6 lg:px-10 bg-[rgba(36,36,36,0.2)] border border-[#262626] rounded-xl">
                <div className="md:text-lg lg:text-[22px] text-[#98989A]">
                  For
                </div>
                <span className="bg-[#262626] py-2 px-2.5 lg:py-3 lg:px-3.5 rounded-lg md:text-lg lg:text-[22px]">
                  Startups
                </span>
                <div className="md:text-lg lg:text-[22px] text-[#98989A]">
                  ,
                </div>
                <span className="bg-[#262626] py-2 px-2.5 lg:py-3 lg:px-3.5 rounded-lg md:text-lg lg:text-[22px]">
                  Enterprise leaders
                </span>
                <div className="md:text-lg lg:text-[22px] text-[#98989A]">
                  ,
                </div>
                <span className="bg-[#262626] py-2 px-2.5 lg:py-3 lg:px-3.5 rounded-lg md:text-lg lg:text-[22px]">
                  Media & Publishers
                </span>
                <div className="md:text-lg lg:text-[22px] text-[#98989A]">
                  and
                </div>
                <span className="bg-[#262626] py-2 px-2.5 lg:py-3 lg:px-3.5 rounded-lg md:text-lg lg:text-[22px]">
                  Social Good
                </span>
              </div>
              <div className="flex justify-center gap-[13px]">
                <ButtonDark className="py-4 lg:py-[18px] px-7 leading-none">
                  Our Works
                </ButtonDark>
                <ButtonLight className="py-4 lg:py-[18px] px-7 leading-none">
                  Contact Us
                </ButtonLight>
              </div>
            </div>
            <div className="border-y border-[#262626] relative pt-10 pb-4 md:py-10">
              <div className="absolute left-0 right-0 top-[-25px] lg:top-[-33px] flex justify-center">
                <div className="bg-[#1A1A1A] border border-[#262626] rounded-full py-3 px-5 lg:py-5 lg:px-[34px] inline-block">
                  Trusted By 250+ Companies
                </div>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 lg:gap-5">
                {clientLogos.map((data, i) => {
                  return (
                    <div key={i}>
                      <Image src={data.clientLogo} alt="Client Logo" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-[url(/images/service-bg.png)] bg-cover bg-center py-10 md:py-20 lg:py-[120px] px-4 text-center">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[normal]">
                Our Services
              </h3>
              <p className="mt-3.5 md:text-lg text-[#E6E6E6]">
                Transform your brand with our innovative digital solutions that
                captivate and engage your audience.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row">
              {serviceList.map((data, i) => {
                return (
                  <div
                    key={i}
                    className="flex-1 flex flex-col items-center lg:items-start not-last:border-b lg:border-b-0 lg:not-last:border-r border-[#262626] p-4 md:p-6 xl:p-[50px]"
                  >
                    <div className="w-16 md:w-[70px] 2xl:w-[88px] flex items-center justify-center aspect-square rounded-[10px] bg-[linear-gradient(-130.705deg,rgba(158,255,0,0.2)_22%,rgba(158,255,0,0)_69%),linear-gradient(180deg,#242424_0%,rgba(36,36,36,0)_100%)]">
                      {data.serviceLogo}
                    </div>
                    <h3 className="my-4 lg:mt-10 lg:mb-5 text-xl md:text-2xl lg:text-3xl font-semibold">
                      {data.serviceName}
                    </h3>
                    <p className="text-[#E6E6E6] flex-1 text-center lg:text-start">
                      {data.serviceDisc}
                    </p>
                    <button className="bg-[#262626] rounded-lg p-[18px] w-full cursor-pointer mt-8 md:mt-12 xl:mt-[104px] hover:bg-[#9EFF00] hover:text-black transition">
                      {data.serviceButton}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="bg-[url(/images/why-choose-bg.png)] bg-cover bg-center py-10 md:py-20 lg:py-[120px] px-4 text-center">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[normal]">
                Why Choose SquareUp?
              </h3>
              <p className="mt-3.5 md:text-lg text-[#E6E6E6]">
                Experience excellence in digital craftsmanship with our team of
                skilled professionals dedicated to delivering exceptional
                results.
              </p>
            </div>
            <div className="grid md:grid-cols-2">
              {squareUp.map((data, i) => {
                return (
                  <div
                    key={i}
                    className="not-even:border-r border-b border-[#262626] p-4 md:p-6 lg:p-12 xl:p-20"
                  >
                    <div className="flex items-center gap-3 md:gap-5 mb-5 lg:mb-10">
                      <div className="w-16 md:w-[70px] 2xl:w-[88px] flex items-center justify-center aspect-square rounded-[10px] bg-[linear-gradient(-130.705deg,rgba(158,255,0,0.2)_22%,rgba(158,255,0,0)_69%),linear-gradient(180deg,#242424_0%,rgba(36,36,36,0)_100%)]">
                        {data.squareUpIcon}
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-[26px] font-medium">
                        {data.squareUpName}
                      </h3>
                    </div>
                    <p className="text-[#E6E6E6] md:text-lg lg:text-xl">
                      {data.squareUpDisc}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="bg-[url(/images/about-us.png)] bg-cover bg-center py-10 md:py-20 lg:py-[120px] px-4 text-center">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[normal]">
                What our Clients say About us
              </h3>
              <p className="mt-3.5 md:text-lg text-[#E6E6E6]">
                At SquareUp, we take pride in delivering exceptional digital
                products and services that drive success for our clients. Here's
                what <br className="hidden lg:block" /> some of our satisfied
                clients have to say about their experience working with us
              </p>
            </div>
            <div className="grid md:grid-cols-2">
              {clientsSay.map((data, i) => {
                return (
                  <div
                    key={i}
                    className="not-even:border-r border-b border-[#262626] p-4 lg:p-10 xl:py-[100px] xl:px-20 flex flex-col"
                  >
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl 2xl:text-[28px] font-medium text-[#D8FF99]">
                        {data.clientTitle}
                      </h3>
                      <p className="lg:text-lg text-[#E6E6E6] mt-6 mb-10">
                        {data.clientDisc}
                      </p>
                    </div>
                    <div className="flex flex-col xl:flex-row xl:items-center gap-5 xl:gap-2.5 bg-[rgba(36,36,36,0.2)] border border-[#262626] p-4 md:p-5 rounded-lg">
                      <div className="flex-1 flex items-center gap-3.5 md:gap-[18px]">
                        <div className="rounded-lg overflow-hidden w-[60px] h-[60px]">
                          <Image
                            src={data.clientProfile}
                            alt="Client Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-medium leading-normal">
                            {data.clientName}
                          </h3>
                          <p className="mt-0.5 md:text-lg text-[#E6E6E6] leading-normal">
                            {data.clientDesignation}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={data.clientWebsiteLink}
                        target="_blank"
                        className="bg-[#262626] rounded-lg py-3.5 lg:py-[18px] px-5 text-lg font-medium text-center"
                      >
                        {data.clientWebsite}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bg-[url(/images/faq-bg.png)] bg-cover bg-center py-10 md:py-20 lg:py-[120px] px-4 text-center">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[normal]">
                Frequently Asked Questions
              </h3>
              <p className="mt-3.5 md:text-lg text-[#E6E6E6]">
                Still you have any questions? Contact our Team via
                hello@squareup.com
              </p>
            </div>
            <AccordionList />
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
            <Form />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
