"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export const createPage = async (title: string, parentId?: string) => {
  try {
    const { userId } = auth();

    if (!userId) {
      throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
      where: { externalUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    let newPage;

    if (parentId) {
      // Check if the parent page exists
      const parentPage = await db.page.findUnique({
        where: { id: parentId },
      });

      if (!parentPage) {
        throw new Error("Parent page not found");
      }

      // Create a subpage
      newPage = await db.page.create({
        data: {
          title,
          userId: user.id,
          parentId,
        },
      });
    } else {
      // Create a top-level page
      newPage = await db.page.create({
        data: {
          title,
          userId: user.id,
        },
      });
    }

    revalidatePath(`/dashboard/`);
    return newPage;
  } catch (error) {
    console.error("Error creating page:", error);
    throw error;
  }
};
