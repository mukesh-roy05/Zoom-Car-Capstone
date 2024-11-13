import instance from "../../service/instance";

export const getAllCars = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_CARS_REQUEST" });
  try {
    const response = await instance.get("api/cars/getallCars");
    // console.log(response.data); // Log the response data to confirm its structure

    // Assuming response.data is an array
    dispatch({
      type: "GET_ALL_CARS_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching cars:", error.message); // Log error message
    dispatch({
      type: "GET_ALL_CARS_FAILURE",
      payload: error.message,
    });
  }
};
