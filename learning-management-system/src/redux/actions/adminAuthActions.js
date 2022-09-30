import http from "../../services/http";
import variables from "../constants/constantVariables";

export const adminRegister = (data) => {
  return async function (dispatch) {
    try {
      await http.post("/register", data).then((res) => {
        console.log(res, "the res");
        if (res) {
          dispatch({
            type: variables.adminRegister,
            payload: "success",
          });
        }
      });
    } catch (error) {
      console.log(error, "the error");
    }
  };
};

export const adminLogin = (data) => {
  return async function (dispatch) {
    try {
      await http.post("/login", data).then((res) => {
        console.log(res);
        if (res) {
          dispatch({
            type: variables.adminLogin,
            payload: "success",
          });
        }
      });
    } catch (error) {
      console.log(error, "the error");
    }
  };
};
