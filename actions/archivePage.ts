"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export const archivePage = async (pageId: string) => {
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

    // Find the page and update its archived status
    const archivedPage = await db.page.update({
      where: {
        id: pageId,
        userId: user.id, // Ensure the page belongs to the user
      },
      data: {
        isArchived: true,
      },
    });

    if (!archivedPage) {
      throw new Error(
        "Page not found or you don't have permission to archive it"
      );
    }

    revalidatePath(`/dashboard`);
    return archivedPage;
  } catch (error) {
    console.error("Error archiving page:", error);
    throw error;
  }
};
