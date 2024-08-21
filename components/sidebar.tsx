"use client";

import { LINKS } from "@/constants";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React, { useRef } from "react";
import { useHover } from "usehooks-ts";
import LinkItem from "./link-item";

const Sidebar = () => {
  const { user } = useUser();
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  console.log(isHover);

  if (isHover) {
    const transopacElements = document.querySelectorAll(".transopac");

    console.log(transopacElements);
    transopacElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.opacity = "1";
      }
    });
  } else {
    const transopacElements = document.querySelectorAll(".transopac");
    transopacElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.opacity = "0";
      }
    });
  }

  return (
    <div
      ref={hoverRef}
      className="w-full bg-sidebar h-screen border-r border-[#373737] border-opacity-50 cursor-pointer pt-2"
    >
      <div className=" group h-[32px] w-[95%] mx-auto rounded-md p-[4px_8px] pr-[2px] transition-all duration-200 justify-between flex items-center hover:bg-white/10 cursor-pointer">
        <div className="flex items-center gap-x-2 w-[70%] ">
          <div className="w-[22px] h-[22px] ">
            <img
              src={user?.imageUrl}
              alt=""
              className="w-[95%] h-[95%] rounded-sm"
            />
          </div>

          <span className="text-white text-[13px] font-medium truncate w-[70%] ">
            {user?.fullName}'s Notion
          </span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#808080"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex items-center gap-x-3">
          <div className=" transopac flex items-center justify-center w-[24px] h-[24px] opacity-100 hover:bg-white/20 transition-all duration-300 rounded-md">
            {isHover && (
              <svg
                role="graphics-symbol"
                viewBox="0 0 16 16"
                className=" w-[16px] h-[16px] fill-gray-400"
              >
                <path d="M7.07031 13.8887C7.2207 14.0391 7.40527 14.1211 7.62402 14.1211C8.06836 14.1211 8.41699 13.7725 8.41699 13.3281C8.41699 13.1094 8.32812 12.9043 8.17773 12.7539L3.37207 8.05762L8.17773 3.375C8.32812 3.21777 8.41699 3.0127 8.41699 2.80078C8.41699 2.35645 8.06836 2.00781 7.62402 2.00781C7.40527 2.00781 7.2207 2.08984 7.07031 2.24023L1.73828 7.44922C1.56055 7.62012 1.46484 7.8252 1.46484 8.06445C1.46484 8.29688 1.55371 8.49512 1.73828 8.67969L7.07031 13.8887ZM13.1748 13.8887C13.3252 14.0391 13.5098 14.1211 13.7354 14.1211C14.1797 14.1211 14.5283 13.7725 14.5283 13.3281C14.5283 13.1094 14.4395 12.9043 14.2891 12.7539L9.4834 8.05762L14.2891 3.375C14.4395 3.21777 14.5283 3.0127 14.5283 2.80078C14.5283 2.35645 14.1797 2.00781 13.7354 2.00781C13.5098 2.00781 13.3252 2.08984 13.1748 2.24023L7.84961 7.44922C7.66504 7.62012 7.57617 7.8252 7.56934 8.06445C7.56934 8.29688 7.66504 8.49512 7.84961 8.67969L13.1748 13.8887Z"></path>
              </svg>
            )}
          </div>

          <svg
            role="graphics-symbol"
            viewBox="0 0 24 24"
            className=" fill-white w-[24px] h-[24px]"
          >
            <g>
              <path
                fill-rule="evenodd"
                d="M9.944 14.721c.104.094.216.12.336.079l1.703-.688 6.844-6.844-1.406-1.398-6.836 6.836-.711 1.68c-.052.13-.029.242.07.335zm8.102-9.484l1.414 1.406.515-.523a.917.917 0 00.282-.633.76.76 0 00-.258-.61l-.25-.25a.702.702 0 00-.578-.187.975.975 0 00-.617.297l-.508.5zm-9.453.127a3.85 3.85 0 00-3.85 3.85v6.5a3.85 3.85 0 003.85 3.85h6.5a3.85 3.85 0 003.85-3.85V12.95a.85.85 0 10-1.7 0v2.764a2.15 2.15 0 01-2.15 2.15h-6.5a2.15 2.15 0 01-2.15-2.15v-6.5a2.15 2.15 0 012.15-2.15h3.395a.85.85 0 000-1.7H8.593z"
                clip-rule="evenodd"
              ></path>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-1 flex flex-col justify-center ">
        {LINKS.map((link, index) => (
          <LinkItem
            key={index}
            index={index}
            icon={typeof link.icon === "function" ? link.icon() : link.icon}
            label={link.label}
            href={link.href || ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
