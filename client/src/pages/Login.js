import { useFormik } from "formik";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

AOS.init();

const Login = () => {
  return (
    <div className="login">
      <div className="row g-3 align-items-center">
        {/* Left Column - Image */}
        <div className="col-lg-8 position-relative">
          <img
            className="w-100"
            data-aos="slide-right"
            data-aos-duration="1500"
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            alt="Login Illustration"
          />
          <h1 className="login-logo position-absolute top-50 start-50 translate-middle">
            Zoom Car
          </h1>
        </div>

        {/* Right Column - Login Form */}
        <div className="col-lg-4 p-5 ">
          <form className="login-form">
            <h1>Login</h1>
            <hr />

            {/* Username Field */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                <span className="required-asterisk">*</span> Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
              />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                <span className="required-asterisk">*</span> Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary mt-3">
              Login
            </button>

            <hr />
            <Link to="/register">Click Here to Register</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
