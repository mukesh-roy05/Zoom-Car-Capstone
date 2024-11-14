import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCar from "./pages/BookingCar";
import "./antd.css";
import UserBookings from "./pages/UserBookings";
import AddCar from "./pages/AddCar";
import AdminHome from "./pages/AdminHome";
import EditCar from "./pages/EditCar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/booking/:carid"
            element={<ProtectedRoute element={<BookingCar />} />}
          />
          <Route
            path="/userbookings"
            element={<ProtectedRoute element={<UserBookings />} />}
          />
          <Route
            path="/addcar"
            element={<ProtectedRoute element={<AddCar />} />}
          />
          <Route
            path="/editcar/:carid"
            element={<ProtectedRoute element={<EditCar />} />}
          />
          <Route
            path="/admin"
            element={<ProtectedRoute element={<AdminHome />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function ProtectedRoute({ element }) {
  if (localStorage.getItem("user")) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
}
