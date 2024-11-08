import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../redux/actions/carsActions";
import "font-awesome/css/font-awesome.min.css";

const Home = () => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  // Destructuring state from carsReducer instead of alertsReducer
  const { cars } = useSelector((state) => state.carsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  const handleToggleDetails = () => {
    setIsDetailsVisible((prevState) => !prevState);
  };

  return (
    <div>
      <DefaultLayout>
        <div className="row">
          {cars.map((car) => (
            <div className="col-md-4" key={car._id}>
              <div className="card d-flex  m-2">
                <img src={car.image} className="card-img-top" alt={car.name} />
                <div className="card-body">
                  <h5 className="card-title"> {car.name}</h5>
                  {/* Toggle button to show/hide details */}
                  <div className="show-hide">
                    <button
                      className="btn btn-link d-flex justify-content-center align-items-center "
                      onClick={handleToggleDetails}
                    >
                      {/* Display the arrow based on the visibility of the details */}
                      <i
                        className={`fas ${
                          isDetailsVisible ? "fa-chevron-up" : "fa-chevron-down"
                        }`}
                        style={{ marginRight: "8px" }}
                      />
                      {isDetailsVisible ? "Hide Details" : "Show Details"}
                    </button>
                  </div>

                  {isDetailsVisible && (
                    <>
                      <p className="card-text">Seat capacity: {car.capacity}</p>
                      <p className="card-text">Fuel Type: {car.fuelType}</p>
                      {/* <p className="card-text">Available Time per day:</p>
                      <p className="card-text">From: {car.from}</p>
                      <p className="card-text">To: {car.to}</p> */}
                      <p className="card-text">
                        Rent Per Hour : {car.rentPerHour}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Home;
