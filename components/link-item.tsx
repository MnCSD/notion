import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { getArchivedPages } from "@/lib/pages";
import { Page } from "@prisma/client";
import TooltipComponent from "./tooltip";
import { Trash, Trash2, Undo2 } from "lucide-react";

type LinkItemProps = {
  index: number;
  icon: React.ReactNode;
  label: string;
  href: string;
  archivedPages?: Page[] & { parent: Page };
};

const LinkItem = ({
  index,
  icon,
  label,
  href,
  archivedPages,
}: LinkItemProps) => {
  if (label === "Trash") {
    return (
      <DropdownMenu dir="ltr">
        <DropdownMenuTrigger className="w-full outline-none border-none">
          <div
            key={index}
            onClick={() => {}}
            className=" gap-x-2 hover:bg-white/10 cursor-pointer h-[32px] pl-1 rounded-md pr-[2px] transition-all duration-200 flex items-center"
          >
            <div className="w-[24px] h-[24px] flex items-center justify-center">
              {icon}
            </div>

            <span className="text-[#9B9B9B] text-[13px] font-semibold truncate">
              {label}
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="right"
          className="bg-[rgb(37_37_37)] outline-none border-none shadow-lg rounded-lg min-w-[414px] h-[50vh] mt-[60%]"
        >
          <div className="w-full flex justify-center flex-col">
            <div className="w-full flex justify-center pt-1">
              <input
                className="bg-white/10 text-[white] placeholder:text-[#707070] placeholder:font-semibold w-[96%] text-[13px] pl-2 border-[#707070]/30 rounded-md py-1  border"
                placeholder="Search pages in Trash"
              />
            </div>

            <div className="w-[100%] h-[30px] mt-4 ">
              {/* @ts-ignore */}
              {archivedPages?.map((page: Page & { parent: Page }) => (
                <div className="w-full px-1 py-1 pt-[6px] hover:bg-white/10  transition-all duration-300 rounded-md mt-1 cursor-pointer flex items-center justify-between">
                  <div>
                    <div className="px-2 flex items-start ">
                      {!page.icon ? (
                        <div>
                          <svg
                            role="graphics-symbol"
                            viewBox="0 0 16 16"
                            className="w-5 h-5 fill-[#9B9B9B]"
                          >
                            <path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703Z"></path>
                          </svg>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={page.icon as string}
                            alt=""
                            className="w-5 h-5 "
                          />
                        </div>
                      )}

                      <div className="flex flex-col ml-2 gap-y-1">
                        <span className="text-[13px] text-white">
                          {page.title}
                        </span>

                        <span className="text-[11px] text-[#707070] font-bold">
                          {page.parent.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-1">
                    <TooltipComponent label="Restore">
                      <div className="flex items-center justify-center w-[24px] h-[24px] opacity-100 hover:bg-white/10 transition-all duration-300 rounded-md">
                        <Undo2 size={18} stroke="#707070" />
                      </div>
                    </TooltipComponent>

                    <TooltipComponent label="Delete from trash">
                      <div className="flex items-center justify-center w-[24px] h-[24px] opacity-100 hover:bg-white/10 transition-all duration-300 rounded-md">
                        <Trash2 size={16} stroke="#707070" />
                      </div>
                    </TooltipComponent>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div
      key={index}
      onClick={() => {}}
      className=" gap-x-2 hover:bg-white/10 cursor-pointer h-[32px] w-[100%] pl-1 mx-auto rounded-md pr-[2px] transition-all duration-200 flex items-center"
    >
      <div className="w-[24px] h-[24px] flex items-center justify-center">
        {icon}
      </div>

      <span className="text-[#9B9B9B] text-[13px] font-semibold truncate w-[70%]">
        {label}
      </span>
    </div>
  );
};

export default LinkItem;
