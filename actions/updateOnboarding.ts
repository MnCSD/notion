"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function updateOnboarding() {
  const user = await currentUser();
  if (!user) {
    return {
      message: "User not found",
    };
  }

  console.log("Here");

  const onboarding = await db.user.update({
    where: {
      externalUserId: user.id,
    },
    data: {
      hasCompletedOnboarding: true,
    },
  });

  revalidatePath("/onboarding");

  console.log(onboarding);
  return onboarding;
}
