import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../firebase-config.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  const authentication = getAuth();

  const handelsubmit = async (e) => {
    e.preventDefault();

    if (name && email && mobile) {
      if (password === cpassword) {
        createUserWithEmailAndPassword(authentication, email, password)
          .then((response) => {
            toast.success("register successfully");

            sessionStorage.setItem(
              "Auth Token",
              response._tokenResponse.refreshToken
            );

            sessionStorage.removeItem("Auth Token");
            authentication.signOut();
            setName("");
          })

          

          .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
              toast.error("Email Already in Use");
            }

          });
      } else {
        alert("Both password should be same");
      }
    } else {
      alert("Please fill data correctly");
    }
  };

  return (
    <>
      <div>
        <ToastContainer />
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container ">
            <div className="row d-flex justify-content-center align-items-center ">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1c"
                              >
                                Your Name
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example1c"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1c"
                              >
                                Your Email
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i
                              className="fas fa-mobile fa-lg me-3 fa-fw"
                              aria-hidden="true"
                            ></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="tel"
                                id="form3Example4cz"
                                className="form-control"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example4cz"
                              >
                                Your Mobile
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example4c"
                              >
                                Password
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4cd"
                                className="form-control"
                                value={cpassword}
                                onChange={(e) => setCpassword(e.target.value)}
                                required
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example4cd"
                              >
                                Repeat your password
                              </label>
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              id="form2Example3c"
                              onChange={checkboxHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="form2Example3"
                            >
                              I agree all statements in{" "}
                              <a href="#!">Terms of service</a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                              onClick={handelsubmit}
                              disabled={!agree}
                            >
                              Register
                            </button>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <Link to="/login"> Already user ?</Link>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid"
                          alt="Sample"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
