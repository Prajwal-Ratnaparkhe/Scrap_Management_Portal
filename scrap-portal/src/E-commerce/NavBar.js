import React, { useEffect } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const { carts } = useSelector((state) => state.products);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();

  const gotologout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <>
        <div className="main-navbar shadow-sm sticky-top">
          <div className="top-navbar">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                  <h5 className="brand-name">SMP</h5>
                </div>
                <div className="col-md-5 my-auto"></div>
                <div className="col-md-5 my-auto">
                  <ul className="nav justify-content-end">
                    <li className="nav-item">
                      <Link to={"/cart"}>
                        <button
                          className="btn btn-primary my-2 my-sm-0  mx-3"
                          type="submit"
                        >
                          <i class="fa fa-shopping-cart"></i> :{carts.length}
                        </button>
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <SettingsIcon />
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            onClick={gotologout}
                          >
                            <LogoutIcon /> Logout
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {" "}
          <ScrollToTop smooth />{" "}
        </div>
      </>
    </div>
  );
};

export default NavBar;
