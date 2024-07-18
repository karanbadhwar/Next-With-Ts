"use server";
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (prevState: any, formData: FormData) => {
  ("use server");

  console.log(prevState);

  await new Promise((resolve) => setTimeout(resolve, 3000));
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

    //Revalidating the path that means telling to re-fetch the data
    revalidatePath("/actions");

    //Some Logic
    return "User Created Successfully!!";
  } catch (error) {
    console.log(error);
    return "Failed to create the user!!";
  }

  //Redirecting the User to the Home Page
  // redirect("/");
};

export const fetchUser = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf8" });

  const user = result ? JSON.parse(result) : [];
  return user;
};

export const saveUser = async (user: User) => {
  const users = await fetchUser();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};

//Ways to delete an User with two different ways of passing the ID

export const deleteUser = async (formData: FormData) => {
  const id = formData.get("id") as string;

  const users = await fetchUser();
  const updatedUsers = users.filter((user) => user.id !== id);
  await writeFile("users.json", JSON.stringify(updatedUsers));
  revalidatePath("/actions");
};

export const removeUser = async (id: string, formData: FormData) => {
  const name = formData.get("name") as string;
  console.log(name);

  const users = await fetchUser();
  const updatedUsers = users.filter((user) => user.id !== id);
  await writeFile("users.json", JSON.stringify(updatedUsers));
  revalidatePath("/actions");
};

export const dummyDeleteUser = async (id: string) => {
  const users = await fetchUser();
  const updatedUsers = users.filter((user) => user.id !== id);
  await writeFile("users.json", JSON.stringify(updatedUsers));
  revalidatePath("/actions");
};
