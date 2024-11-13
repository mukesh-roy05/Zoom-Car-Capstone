import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../redux/actions/carsActions";
import "font-awesome/css/font-awesome.min.css";
import Spinner from "../components/Spinner";

const Home = () => {
  // Destructuring state from carsReducer instead of alertsReducer
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <div>
      <DefaultLayout>
        {loading == true && <Spinner />}
        <div className="row p-2 m-2">
          {cars.map((car) => (
            <div className="col-md-4" key={car._id}>
              <div className="card d-flex p-5 ml-2 mt-5 car">
                <img
                  src={car.image}
                  className="card-img-top carImg"
                  alt={car.name}
                />
                <div className="car-content">
                  <div className="card-body d-flex align-items-center justify-content-between w-100 ">
                    <p className="card-title">{car.name}</p>
                    <p>{car.rentPerHour} Rent Per Hour /-</p>
                  </div>
                  <div className="m-3 w-100 d-flex justify-content-center">
                    <button className="btn1">Book Now</button>
                  </div>
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
