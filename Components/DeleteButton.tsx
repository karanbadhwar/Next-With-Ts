import { deleteUser, removeUser } from "@/utils/actions";
// import { FormEvent } from "react";

function DeleteButton({ id }: { id: string }) {
  //   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     try {
  //       await dummyDeleteUser(id);
  //       console.log("User deleted successfully");
  //     } catch (error) {
  //       console.error("Failed to delete user", error);
  //     }
  //   };
  const removeUserWithId = removeUser.bind(null, id);
  return (
    <form action={removeUserWithId}>
      <input type="hidden" name="name" value="shakeAndBake" />
      <button
        type="submit"
        className="bg-red-500 text-white text-xs rounded p-2"
      >
        delete
      </button>
    </form>
  );
}

export default DeleteButton;
