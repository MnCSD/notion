import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "@prisma/client";

export async function getUser(): Promise<User | null> {
  const userClerk = await currentUser();

  try {
    const user = await db.user.findUnique({
      where: {
        externalUserId: userClerk?.id,
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
