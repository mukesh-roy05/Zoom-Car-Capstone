import instance from "../../service/instance";

export const userLogin = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await instance.post("api/users/login", reqObj);
    localStorage.setItem("user", JSON.stringify(response.data));
    dispatch({ type: "LOADING", payload: false });
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const userRegister = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await instance.post("api/users/register", reqObj);
    prompt("Registration Success!");
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    prompt("Registration Failed!!");
    dispatch({ type: "LOADING", payload: false });
  }
};
