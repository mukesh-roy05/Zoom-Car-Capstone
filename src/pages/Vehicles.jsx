import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchVehicles = async () => {
            const response = await axios.get('https://zoom-car-capstone.onrender.com/api/vehicles');
            setVehicles(response.data);
        };
        fetchVehicles();
    }, []);

    const filteredVehicles = vehicles.filter(vehicle =>
        vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h2>Available Vehicles</h2>
            <input
                type="text"
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control mb-3"
            />
            <div className="row">
                {filteredVehicles.map(vehicle => (
                    <div key={vehicle._id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={vehicle.imageUrl} alt={  `${vehicle.make} ${vehicle.model}`} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.make} {vehicle.model}</h5>
                                <p className="card-text">Price: ${vehicle.price}/day</p>
                                <Link to={`/booking/${vehicle._id}`} className="btn btn-secondary">Book Now</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vehicles;
