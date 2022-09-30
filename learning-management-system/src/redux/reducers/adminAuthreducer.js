import variables from "../constants/constantVariables";

export const adminAuth = (state = [], action) => {
  switch (action.type) {
    case variables.adminRegister:
      return action.payload;
    case variables.adminLogin:
      return action.payload;
    default:
      return state;
  }
};
