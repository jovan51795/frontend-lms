import http from "../../services/http";
import variables from "../constants/constantVariables";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const adminRegister = (data) => {
  return async function (dispatch) {
    try {
      await http.post("/register", data).then((res) => {
        if (res && res.data && res.data.status === 1) {
          dispatch({
            type: variables.adminRegister,
            payload: "success",
          });
        } else {
          toast.error(res.data.message);
        }
      });
    } catch (error) {
      if (error.response.data.statusCode === 404) {
        alert("unexpected error occurred");
      }
    }
  };
};

export const adminLogin = (data) => {
  return async function (dispatch) {
    try {
      await http.post("/login", data).then((res) => {
        if (res && res.data && res.data.status === 1) {
          localStorage.setItem("lms", JSON.stringify(res.data));
          dispatch({
            type: variables.adminRegister,
            payload: res.data,
          });
        } else {
          toast.error(res.data.message);
        }
      });
    } catch (error) {
      if (error.response.data.statusCode === 404) {
        alert("unexpected error occurred");
      }
    }
  };
};
