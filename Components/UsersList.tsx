import { fetchUser } from "@/utils/actions";
import DeleteButton from "./DeleteButton";

async function UsersList() {
  const users = await fetchUser();
  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <h4
                key={user.id}
                className="capitalize text-xl flex justify-between items-center mb-2"
              >
                {user.firstName} {user.lastName}
                <DeleteButton id={user.id} />
              </h4>
            );
          })}
        </div>
      ) : (
        <p>No Users Found...</p>
      )}
    </div>
  );
}

export default UsersList;
