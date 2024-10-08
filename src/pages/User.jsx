import React from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import RepoList from "../components/repo/RepoList";

function User() {
  const { getUser, user, getUserRepos, repos } = useContext(GithubContext);
  const params = useParams();
  //The useParams hook is used to access the parameters of the current route

  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //[] ensures that the effect runs only once

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12 text-white">
        {" "}
        {/* Responsive container */}
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to Search
          </Link>
        </div>
        {/* Picture and text within */}
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full ">
              <figure>
                <img src={avatar_url} alt="avatar" />
              </figure>
              <div className=" card-body justify-end">
                <h2 className="card-title mb-0 text-white">{name}</h2>
                <p className="text-white">{login}</p>
              </div>
            </div>
          </div>

          {/* Name, tag, link description */}
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a href={html_url} target="_blank" rel="noreferrer">
                  {/* The target='_blank' open the link in a new window */}
                  {/* The rel='noreferrer prevents the browser from sending the referrer header to the linked docs */}
                  <button className="btn btn-outline">
                    Visit Github Profile
                  </button>
                </a>
              </div>
            </div>

            {/*  */}
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {/* Location */}
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="stat-value text-lg text-white">
                    {location}
                  </div>
                </div>
              )}
              {/* Blog */}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="stat-value text-lg text-white">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {/* Twitter */}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="stat-value text-lg text-white">
                    <a
                      href={`https://x.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Followers */}
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure ">
              <FaUsers className="text-3xl md:text-5xl " />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          {/* Following */}
          <div className="stat">
            <div className="stat-figure ">
              <FaUserFriends className="text-3xl md:text-5xl " />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>

          {/* Public Repos */}
          <div className="stat">
            <div className="stat-figure ">
              <FaCodepen className="text-3xl md:text-5xl " />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>

          {/* Public Gists */}
          <div className="stat">
            <div className="stat-figure ">
              <FaStore className="text-3xl md:text-5xl " />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>
        {/* Repos */}
        <RepoList repos={repos} />
      </div>
    </>
  );
}

export default User;
