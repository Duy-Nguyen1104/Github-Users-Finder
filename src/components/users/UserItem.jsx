import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  //Destructuring the user object
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full w-20 h-20 m-2">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>

          <div>
            <h2 className="card-title">{login}</h2>
            <Link
              className="text-base-content text-opacity-40"
              to={`/user/${login}`}
            >
              Visit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
