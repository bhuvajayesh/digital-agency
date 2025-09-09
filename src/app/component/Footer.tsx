"use client";

import Link from "next/link";
import Logo from "../../../public/images/logo.svg";
import Image from "next/image";

const Menu = [
  {
    menuName: "Home",
    menuLink: "/",
  },
  {
    menuName: "Services",
    menuLink: "/services",
  },
  {
    menuName: "Work",
    menuLink: "/work",
  },
  {
    menuName: "Process",
    menuLink: "/process",
  },
  {
    menuName: "About",
    menuLink: "/about",
  },
  {
    menuName: "Careers",
    menuLink: "/careers",
  },
  {
    menuName: "Contact",
    menuLink: "/contact",
  },
];

const footerSocial = [
  {
    footerSocialIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_39_212)">
          <path
            d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4687H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92187 17.3438 4.92187V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4687H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
            fill="#9EFF00"
          />
        </g>
        <defs>
          <clipPath id="clip0_39_212">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    footerSocialLink: "https://www.facebook.com/",
  },
  {
    footerSocialIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.55016 21.7502C16.6045 21.7502 21.5583 14.2469 21.5583 7.74211C21.5583 7.53117 21.5536 7.31554 21.5442 7.1046C22.5079 6.40771 23.3395 5.5445 24 4.55554C23.1025 4.95484 22.1496 5.21563 21.1739 5.32898C22.2013 4.71315 22.9705 3.74572 23.3391 2.60601C22.3726 3.1788 21.3156 3.58286 20.2134 3.80085C19.4708 3.01181 18.489 2.48936 17.4197 2.3143C16.3504 2.13923 15.2532 2.32129 14.2977 2.83234C13.3423 3.34339 12.5818 4.15495 12.1338 5.14156C11.6859 6.12816 11.5754 7.23486 11.8195 8.29054C9.86249 8.19233 7.94794 7.68395 6.19998 6.79834C4.45203 5.91274 2.90969 4.66968 1.67297 3.14976C1.0444 4.23349 0.852057 5.51589 1.13503 6.73634C1.418 7.95678 2.15506 9.02369 3.19641 9.72023C2.41463 9.69541 1.64998 9.48492 0.965625 9.10617V9.1671C0.964925 10.3044 1.3581 11.4068 2.07831 12.287C2.79852 13.1672 3.80132 13.7708 4.91625 13.9952C4.19206 14.1934 3.43198 14.2222 2.69484 14.0796C3.00945 15.0577 3.62157 15.9131 4.44577 16.5266C5.26997 17.14 6.26512 17.4808 7.29234 17.5015C5.54842 18.8714 3.39417 19.6144 1.17656 19.6109C0.783287 19.6103 0.390399 19.5861 0 19.5387C2.25286 20.984 4.87353 21.7516 7.55016 21.7502Z"
          fill="#9EFF00"
        />
      </svg>
    ),
    footerSocialLink: "https://x.com/",
  },
  {
    footerSocialIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_39_218)">
          <path
            d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z"
            fill="#9EFF00"
          />
        </g>
        <defs>
          <clipPath id="clip0_39_218">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    footerSocialLink: "https://in.linkedin.com/",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full border-t border-[#262626]">
      <div className="container mx-auto px-4">
        <div className="py-6 lg:py-[50px] flex items-center justify-between border-b border-[#262626]">
          <Link href="/">
            <Image src={Logo} alt="logo" className="h-10 md:h-12 lg:h-auto w-auto" />
          </Link>
          <ul className="hidden md:flex gap-3 lg:gap-5 xl:gap-[30px]">
            {Menu.map((data, i) => {
              return (
                <li key={i}>
                  <Link
                    href={data.menuLink}
                    className="text-[#E6E6E6] text-sm lg:text-lg font-medium inline-block"
                  >
                    {data.menuName}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center border border-[#262626] rounded-xl p-2 lg:p-3 xl:p-3.5 xl:pl-6">
            <h3 className="text-lg font-medium mr-5 text-[#E6E6E6] hidden xl:block">
              Stay Connected
            </h3>
            <ul className="flex gap-3 lg:gap-3.5">
              {footerSocial.map((data, i) => {
                return (
                  <li key={i}>
                    <Link
                      href={data.footerSocialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 lg:w-12 xl:w-16 aspect-square flex items-center justify-center rounded-lg bg-[linear-gradient(180deg,#242424_0%,rgba(36,36,36,0)_100%)]"
                    >
                      {data.footerSocialIcon}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="py-6 lg:py-[50px] flex flex-col lg:flex-row items-center justify-between">
          <ul className="hidden md:flex gap-3 lg:gap-5 xl:gap-[30px]">
            <li className="lg:pt-0.5 pb-3 lg:pb-4 border-b border-[#262626]">
              <Link
                href="mailto:hello@squareup.com"
                className="flex items-center gap-2.5 text-[#E6E6E6] lg:text-lg"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 9.1691V17.75C1.5 19.4069 2.84315 20.75 4.5 20.75H19.5C21.1569 20.75 22.5 19.4069 22.5 17.75V9.1691L13.5723 14.6631C12.6081 15.2564 11.3919 15.2564 10.4277 14.6631L1.5 9.1691Z"
                    fill="#9EFF00"
                  />
                  <path
                    d="M22.5 7.40783V7.25C22.5 5.59315 21.1569 4.25 19.5 4.25H4.5C2.84315 4.25 1.5 5.59315 1.5 7.25V7.40783L11.2139 13.3856C11.696 13.6823 12.304 13.6823 12.7861 13.3856L22.5 7.40783Z"
                    fill="#9EFF00"
                  />
                </svg>
                hello@squareup.com
              </Link>
            </li>
            <li className="lg:pt-0.5 pb-3 lg:pb-4 border-b border-[#262626]">
              <Link
                href="tel:+91 91813 23 2309"
                className="flex items-center gap-2.5 text-[#E6E6E6] lg:text-lg"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 5C1.5 3.34315 2.84315 2 4.5 2H5.87163C6.732 2 7.48197 2.58556 7.69064 3.42025L8.79644 7.84343C8.97941 8.5753 8.70594 9.34555 8.10242 9.79818L6.8088 10.7684C6.67447 10.8691 6.64527 11.0167 6.683 11.1197C7.81851 14.2195 10.2805 16.6815 13.3803 17.817C13.4833 17.8547 13.6309 17.8255 13.7316 17.6912L14.7018 16.3976C15.1545 15.7941 15.9247 15.5206 16.6566 15.7036L21.0798 16.8094C21.9144 17.018 22.5 17.768 22.5 18.6284V20C22.5 21.6569 21.1569 23 19.5 23H17.25C8.55151 23 1.5 15.9485 1.5 7.25V5Z"
                    fill="#9EFF00"
                  />
                </svg>
                +91 91813 23 2309
              </Link>
            </li>
            <li className="lg:pt-0.5 pb-3 lg:pb-4 border-b border-[#262626] flex items-center gap-2.5 text-[#E6E6E6] lg:text-lg">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5397 22.851C11.57 22.8685 11.5937 22.8821 11.6105 22.8915L11.6384 22.9071C11.8613 23.0294 12.1378 23.0285 12.3608 22.9075L12.3895 22.8915C12.4063 22.8821 12.43 22.8685 12.4603 22.851C12.5207 22.816 12.607 22.765 12.7155 22.6982C12.9325 22.5646 13.2388 22.3676 13.6046 22.1091C14.3351 21.5931 15.3097 20.8274 16.2865 19.8273C18.2307 17.8368 20.25 14.8462 20.25 11C20.25 6.44365 16.5563 2.75 12 2.75C7.44365 2.75 3.75 6.44365 3.75 11C3.75 14.8462 5.76932 17.8368 7.71346 19.8273C8.69025 20.8274 9.66491 21.5931 10.3954 22.1091C10.7612 22.3676 11.0675 22.5646 11.2845 22.6982C11.393 22.765 11.4793 22.816 11.5397 22.851ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                  fill="#9EFF00"
                />
              </svg>
              Somewhere in the World
            </li>
          </ul>
          <div className="lg:text-lg text-[#98989A] md:pt-4 lg:pt-0">
            © {currentYear} SquareUp. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
