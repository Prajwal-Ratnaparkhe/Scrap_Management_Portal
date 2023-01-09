import React, { useEffect } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
// import { MDBIcon } from "mdb-react-ui-kit";
import tw from "twin.macro";
import HeaderBase, {
  NavLinks,
  NavLink,
} from "../E-commerce/headers/LightNav.js";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const Header = tw(HeaderBase)`max-w-none`;

const InnerNav = () => {
  const navigate = useNavigate();

  let authToken = sessionStorage.getItem("Auth Token");
  // console.log(authToken);
  const authentication = getAuth();

  if (!authToken) {
    navigate("/login");
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const logout = () => {
    // e.preventDefault();
    sessionStorage.clear("Auth Token");
    authentication.signOut();
    navigate("/");
  };

  const navLinks = [
    <NavLinks key={1}></NavLinks>,

    <NavLinks key={2}>
      {/* <Link to="/cart" className="mx-3">
        <MDBIcon fas icon="shopping-cart" />
      </Link> */}
    </NavLinks>,

    <NavLinks key={3}>
      <NavLink>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a
              className=" dropdown-toggle mx-3"
              href="#!"
              id="navbarDropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <SettingsIcon />
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#!">
                  <button type="button" onClick={logout}>
                    <LogoutIcon /> Logout
                  </button>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </NavLink>
    </NavLinks>,
  ];

  return (
    <div>
      <>
        <div id="landing" style={{ padding: "15px" }}>
          <Header links={navLinks} />
        </div>

        <div className="container"></div>

        <div>
          {" "}
          <ScrollToTop smooth />{" "}
        </div>
      </>
    </div>
  );
};

export default InnerNav;
