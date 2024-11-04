import { supabase } from "./supabase";

export async function getUser(email) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
  return data;
}

// export const getImages = async function () {
//   const { data, error } = await supabase
//     .from("images")
//     .select("*")
//     .order("name");
//   if (error) {
//     console.error(error);
//     throw new Error("Images could not be loaded");
//   }
//   return data;
// };

export const getImages = async function () {
  const { data, error } = await supabase
    .from("images")
    .select("id,picture,title,description");
  if (error) {
    console.error(error);
    throw new Error("Images could not be loaded");
  }
  return data;
};

export async function createUser(newUser) {
  const { data, error } = await supabase.from("users").insert([newUser]);
  if (error) {
    console.log(error);
    throw new Error("Guest could not be created");
  }
  return data;
}
