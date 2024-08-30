import React, { useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users } = useContext(GithubContext); // Get the users and fetchUsers function from the context

  return (
    // Output the data into the screen
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserResults;
