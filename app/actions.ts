"use server";
import { auth } from "@clerk/nextjs";
export const sayHello = async () => {
  try {
    const { userId } = auth();
    return await new Promise<string | null>((resolve) => {
      setTimeout(() => {
        resolve(userId);
      }, 1000);
    });
  } catch (err) {
    console.log("Error", err);
  }
};
