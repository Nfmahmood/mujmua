"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function updateUser(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const userId = formData.get("userId");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(userId))
    throw new Error("Please provide a valid user Id");

  const updateData = { userId };

  const { data, error } = await supabase
    .from("users")
    .update(updateData)
    .eq("id", session.user.userId);

  if (error) throw new Error("User could not be updated");

  revalidatePath("/account/profile");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
