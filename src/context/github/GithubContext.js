import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

//Step 1: Create the context
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

//Step 2: Create the provider
//The provider is used to wrap the entire application so that the context is available to all components
export const GithubProvider = ({ children }) => {
  // Step 1 of useReducer: Create an initial state
  const initialState = {
    users: [],
    user: {},
    repos: [],
  };

  // Step 2 of useReducer: Create the reducer with 2 arguments, state and dispatch
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search users
  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      // Create a new URLSearchParams object to handle the query parameters
      q: text,
    });
    const res = await fetch(`${GITHUB_URL}/search/users?${params}`);

    const { items } = await res.json();

    //Step 3 of useReducer: Dispatch an action, including the type and payload
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  //Clear the usesrs from the state
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  //Get a single user
  const getUser = async (login) => {
    const res = await fetch(`${GITHUB_URL}/users/${login}`);

    if (res.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await res.json();

      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  // Get users repos
  const getUserRepos = async (login) => {
    const res = await fetch(
      `${GITHUB_URL}/users/${login}/repos?per_page=5&sort=created:asc`
    );

    const data = await res.json();

    //Step 3 of useReducer: Dispatch an action, including the type and payload
    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  //Step 3: Pass the context value to the provider using the value prop
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
