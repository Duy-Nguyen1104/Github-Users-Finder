const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state, // Spread operator to copy the existing state
        users: action.payload, // Update the users array with the payload
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
};

export default githubReducer;
