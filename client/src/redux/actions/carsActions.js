import instance from "../../service/instance";

export const getAllCars = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await instance.get("api/cars/getallCars");
    dispatch({
      type: "GET_ALL_CARS",
      payload: response.data,
    });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.error("Error fetching cars:", error.message);

    dispatch({ type: "LOADING", payload: false });
  }
};
