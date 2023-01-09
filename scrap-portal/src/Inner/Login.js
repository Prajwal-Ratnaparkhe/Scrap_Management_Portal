import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




export const Login = () => {
  const test = sessionStorage.getItem('Auth Token');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  console.log(test);

 
  const signUp = () => {
    navigate("/signup");
  };

  const forgot = () => {
    navigate("/forgot");
  };

  const handelsubmit = async (e) => {
    e.preventDefault();

    const authentication = getAuth();

    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );

        navigate("/buysell");
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/wrong-password") {
          toast.error("Wrong Password");
        }
        if (error.code === "auth/user-not-found") {
          toast.error("Wrong Email");
        }

        if (error.code === "auth/invalid-email") {
          toast.error("Invalid Email");
        }
      });
  };

  return (
    <>
      <div className="App-header">
        <ToastContainer />
        <div className="login-box">
          <h2>Login</h2>

          <form onSubmit={handelsubmit}>
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
            <div className="input-group mb-3">
              <div
                className="input-group-prepend mx-1"
                style={{ backgroundColor: "white" }}
              >
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Log in
            </button>

            <button
              type="submit"
              onClick={signUp}
              style={{ marginLeft: "13px" }}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Create
            </button>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <button type="submin" onClick={forgot}>
                {" "}
                Forgot Password ?
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
