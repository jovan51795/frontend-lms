export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem("lms"));
};
