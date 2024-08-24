"use client";

import { Page, User } from "@prisma/client";
import {
  ChevronRight,
  Copy,
  Edit,
  MoreHorizontal,
  PlusIcon,
  Star,
  Trash,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import TooltipComponent from "./tooltip";
import { useToast } from "./ui/use-toast";
import { createPage } from "@/actions/createPage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const PageItem = ({
  page,
  isSubpage,
  onClick,
}: {
  page: Page & { subpages: Page[] } & { user: User };
  isSubpage?: boolean;
  onClick?: (e: any) => void;
}) => {
  const router = useRouter();
  const [openOptions, setOpenOptions] = useState(false);

  const [isPending, startTransition] = useTransition();
  //   expand the page

  const { toast } = useToast();

  const handleAddPage = () => {
    startTransition(async () => {
      await createPage("Untitled")
        .then((page) => {
          toast({
            title: "New page created",
            description: "Page created successfully",
            variant: "default",
            duration: 2000,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const handleAddPageInside = (
    e: React.MouseEvent<HTMLDivElement>,
    parentId: string
  ) => {
    e.stopPropagation();
    startTransition(async () => {
      await createPage("Untitled", parentId)
        .then((page) => {
          toast({
            title: "New page created",
            description: "Page created successfully",
            variant: "default",
            duration: 2000,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div onClick={() => router.push(`/dashboard/${page.id}`)} className={``}>
      <div className=" text-[#9B9B9B] relative group hover:bg-white/10 cursor-pointer py-[6px] w-[100%] pl-1 mx-auto rounded-md pr-[2px] transition-all duration-200 flex items-center justify-between">
        <div className="flex items-center gap-x-2 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#9B9B9B"
            className="size-[18px] group-hover:opacity-0 opacity-100 transition-all duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>

          <div className="absolute left-0 flex items-center justify-center hover:bg-white/10 transition-all duration-200 w-[20px] h-[20px] rounded-md">
            <ChevronRight
              size={16}
              className=" opacity-0 group-hover:opacity-100 transition-all duration-200"
            />
          </div>
          <span className="text-[13.5px] text-[#9B9B9B] font-semibold">
            {page.title}
          </span>
        </div>

        <div className=" text-[#9B9B9B] flex items-center pr-2 gap-x-1 opacity-0 group-hover:opacity-100 transition-all duration-200">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex relative items-center justify-center w-[20px] h-[20px] opacity-100 hover:bg-white/5 transition-all duration-300 rounded-md">
                <MoreHorizontal size={18} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[rgb(37_37_37)] outline-none border-none shadow-lg rounded-lg min-w-[265px]">
              <div className="w-full  ">
                <div className="flex items-center gap-x-2 m-1 w-full hover:bg-white/10 py-1 px-1 rounded-md cursor-pointer transition-all duration-300">
                  <Star size={16} stroke="#ffffffcf" />
                  <span className="text-[#ffffffcf] text-[13px]">
                    Add to favorites
                  </span>
                </div>

                <div className="w-full border-b border-[#9B9B9B]/30" />

                <div className="flex items-center gap-x-2 m-1 w-full hover:bg-white/10 py-1 px-1 rounded-md cursor-pointer transition-all duration-300">
                  <Copy size={16} stroke="#ffffffcf" />
                  <span className="text-[#ffffffcf] text-[13px]">
                    Duplicate
                  </span>
                </div>

                <div className="flex items-center gap-x-2 m-1 w-full hover:bg-white/10 py-1 px-1 rounded-md cursor-pointer transition-all duration-300">
                  <Edit size={16} stroke="#ffffffcf" />
                  <span className="text-[#ffffffcf] text-[13px]">Rename</span>
                </div>

                <div className="flex items-center gap-x-2 m-1 w-full hover:bg-white/10 py-1 px-1 rounded-md cursor-pointer transition-all duration-300">
                  <Trash2 size={16} stroke="#ffffffcf" />
                  <span className="text-[#ffffffcf] text-[13px]">
                    Move to Trash
                  </span>
                </div>

                <div className="w-full border-b border-[#9B9B9B]/30" />

                <div className="m-1 flex flex-col gap-y-1">
                  <span className="text-[#9B9B9B]/50 text-[11px] font-bold">
                    Last edited by {page?.user?.name}
                  </span>

                  <span className="text-[#9B9B9B]/50 text-[11px] font-bold">
                    {new Date(page.updatedAt).toLocaleString()}
                  </span>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <TooltipComponent label="Add a page inside">
            <div
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                handleAddPageInside(e, page.id);
              }}
              className="flex items-center justify-center w-[20px] h-[20px] opacity-100 hover:bg-white/5 transition-all duration-300 rounded-md"
            >
              <PlusIcon size={16} />
            </div>
          </TooltipComponent>
        </div>
      </div>
    </div>
  );
};

export default PageItem;
