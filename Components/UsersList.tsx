import { fetchUser } from "@/utils/actions";

async function UsersList() {
  const users = await fetchUser();
  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <h4 key={user.id} className="capitalize text-xl">
                {user.firstName} {user.lastName}
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
