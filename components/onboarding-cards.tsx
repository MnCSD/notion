"use client";

import React, { useState } from "react";

const OnboardingCards = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex space-x-4 mb-8 mt-10">
      {[
        {
          title: "For my team",
          description: "Collaborate on your docs, projects, and wikis.",
          icon: "https://www.notion.so/images/onboarding/plan-type-for-work-darkmode.png",
        },
        {
          title: "For personal use",
          description: "Write better. Think more clearly. Stay organized.",
          icon: "https://www.notion.so/images/onboarding/plan-type-for-life-darkmode.png",
        },
        {
          title: "For school",
          description: "Keep notes, research, and tasks in one place.",
          icon: "https://www.notion.so/images/onboarding/plan-type-for-school-darkmode.png",
        },
      ].map((option, index) => (
        <div className="flex flex-col items-center space-y-3 cursor-pointer group">
          <div
            onClick={() => setSelected(index)}
            key={index}
            className={`w-[196px] py-6 px-2 rounded-xl border-2 group-hover:bg-[#252525] ${
              index === selected
                ? "border-[#0077D4] bg-[#252525]"
                : "border-[#5A5A5A] border-opacity-50"
            } flex flex-col items-center text-center`}
          >
            <img
              src={option.icon}
              alt={option.title}
              width={120}
              height={120}
              className="mb-4"
            />
            <h2 className="font-semibold text-[13px] mb-2">{option.title}</h2>
            <p className="text-sm text-gray-400 text-[13px]">
              {option.description}
            </p>
          </div>

          <div className="">
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              className="hidden"
              checked={index === 1}
            />
            <label
              htmlFor={`checkbox-${index}`}
              className={`w-4 h-4 border ${
                index === selected
                  ? "border-blue-600 bg-blue-600"
                  : "border-gray-600"
              } rounded-full flex items-center justify-center cursor-pointer`}
            >
              {index === selected && (
                <svg
                  className="w-3 h-3 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              )}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OnboardingCards;
