const initialData = {
  cars: [],
  loading: false,
  error: null,
};

export const carsReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ALL_CARS_REQUEST":
      return {
        ...state,
        loading: true, // Set loading to true while fetching data
      };
    case "GET_ALL_CARS_SUCCESS":
      return {
        ...state,
        cars: action.payload, // Populate cars with the data
        loading: false, // Set loading to false after data is fetched
      };
    case "GET_ALL_CARS_FAILURE":
      return {
        ...state,
        error: action.payload, // Optionally handle the error
        loading: false, // Set loading to false in case of failure
      };
    default:
      return state;
  }
};
