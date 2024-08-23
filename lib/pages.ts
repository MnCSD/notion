import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { Page } from "@prisma/client";

export async function getPages(): Promise<Page[]> {
  try {
    const pages = await db.page.findMany();
    return pages;
  } catch (error) {
    console.error("Error fetching pages:", error);
    return [];
  }
}

export async function getParentPages(): Promise<Page[]> {
  const userClerk = await currentUser();

  const user = await db.user.findUnique({
    where: {
      externalUserId: userClerk?.id,
    },
  });

  if (!user) {
    return [];
  }

  try {
    const parentPages = await db.page.findMany({
      where: {
        parentId: null,
        userId: user?.id,
      },
      include: {
        subpages: true,
      },
    });
    return parentPages;
  } catch (error) {
    console.error("Error fetching parent documents:", error);
    return [];
  }
}
