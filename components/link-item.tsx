import React from "react";

type LinkItemProps = {
  index: number;
  icon: React.ReactNode;
  label: string;
  href: string;
};

const LinkItem = ({ index, icon, label, href }: LinkItemProps) => {
  return (
    <div
      key={index}
      onClick={() => {}}
      className=" gap-x-2 hover:bg-white/10 cursor-pointer h-[32px] w-[100%] pl-1 mx-auto rounded-md pr-[2px] transition-all duration-200 flex items-center"
    >
      <div className="w-[24px] h-[24px] flex items-center justify-center">
        {icon}
      </div>

      <span className="text-[#9B9B9B] text-[14px] font-medium truncate w-[70%]">
        {label}
      </span>
    </div>
  );
};

export default LinkItem;
