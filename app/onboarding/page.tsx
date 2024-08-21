import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import OnboardingCards from "@/components/onboarding-cards";

const OnBoardingPage = async () => {
  const user = await currentUser();

  return (
    <div className="bg-sidebar h-screen w-full flex flex-col items-center justify-between  text-white p-3">
      <h1 className="text-xl font-bold mb-1">How do you want to use Notion?</h1>
      <p className="text-[#5A5A5A] mb-8 text-xl font-semibold">
        This helps customize your experience
      </p>

      <OnboardingCards />

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 text-[13px] px-32 rounded-lg">
        Continue
      </button>

      <p className="mt-auto mb-10 text-[12px] text-gray-400 text-center">
        You're creating an account for {user?.emailAddresses[0]?.emailAddress}.{" "}
        <br />
        <a href="#">
          If you don't intend to set up a new account, you can
          <a href="" className="underline">
            {" "}
            log in with another email
          </a>
        </a>
      </p>
    </div>
  );
};

export default OnBoardingPage;
