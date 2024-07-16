"use server";
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (formData: FormData) => {
  ("use server");
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  //Other way
  //   const rawData = Object.values(formData);

  const newUser: User = {
    firstName,
    lastName,
    id: Date.now().toString(),
  };
  try {
    await saveUser(newUser);
    //Some Logic for DataBase
    // redirect("/"); // Do not place in trycatch block, it triggers the error
  } catch (error) {
    console.log(error);
  }

  //Revalidating the path that means telling to re-fetch the data
  //   revalidatePath("/actions");

  //Redirecting the User to the Home Page
  redirect("/");
};

export const fetchUser = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf8" });

  const user = result ? JSON.parse(result) : [];
  return user;
};

const saveUser = async (user: User) => {
  const users = await fetchUser();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};
