import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const sendPasswordReset = async (e) => {
    e.preventDefault();

    const authentication = getAuth();
    try {
      await sendPasswordResetEmail(authentication, email);
      toast.success("Password reset link sent!");
      setEmail("");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div>
      {" "}
      <div className="App-header">
        <ToastContainer />
        <div className="login-box">
          <h2>Login</h2>

          <form onSubmit={sendPasswordReset}>
            <div className="input-group mb-3">
              <div
                className="input-group-prepend mx-1"
                style={{ backgroundColor: "white" }}
              >
                <span className="input-group-text">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <a href="#!">
                <button type="submit">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Reset Password
                </button>
              </a>
            </div>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <Link to="/login"> Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
