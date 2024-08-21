import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import OnboardingCards from "@/components/onboarding-cards";
import { getUser } from "@/lib/user";
import { redirect } from "next/navigation";

const OnBoardingPage = async () => {
  const user = await getUser();

  if (user?.hasCompletedOnboarding) {
    return redirect("/dashboard/getting-started");
  }

  return (
    <div className="bg-sidebar lg:h-screen w-full flex flex-col items-center justify-between  text-white p-3">
      <h1 className="text-xl font-bold mb-1">How do you want to use Notion?</h1>
      <p className="text-[#5A5A5A] mb-8 text-xl font-semibold">
        This helps customize your experience
      </p>

      <OnboardingCards />

      <span className="lg:mt-auto lg:mb-10 mt-10 text-[12px] text-gray-400 text-center">
        You're creating an account for {user?.email}. <br />
        <p>
          If you don't intend to set up a new account, you can
          <a href="" className="underline">
            log in with another email
          </a>
        </p>
      </span>
    </div>
  );
};

export default OnBoardingPage;
