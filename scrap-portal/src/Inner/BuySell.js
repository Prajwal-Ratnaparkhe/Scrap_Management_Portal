import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import InnerNav from "./InnerNav";

const BuySell = () => {
  const test = sessionStorage.getItem("Auth Token");

  const navigate = useNavigate();

  if (!test) {
    navigate("/login");
  }

  return (
    <>
      <InnerNav />
      <div className="page">
        <div className="content">
          <div className="container-fluid">
            <div className="row"></div>
            <div style={{ marginBottom: "20px" }}>
              <div className="mycenter ">
                <Link
                  to="/buy"
                  className="mylabel btn btn-warning "
                  data-ajax="false"
                >
                  Buy
                </Link>
                <Link
                  to="/sell"
                  className="mylabel btn btn-danger "
                  data-ajax="false"
                >
                  Sell
                </Link>
              </div>
            </div>
            <div className="col-sm-offset-2 offset-sm-2 col-sm-8">
              <div className="card ">
                <div className="card-body ">
                  <div className="mycenter ">
                    Welcome to Scrap Processing System.
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mycenter my-4 ">
              <Link
                to="#!"
                className="mylabel btn btn-primary"
                data-ajax="false"
              >
                How We Work ?
              </Link>
            </div>

<div className="container">

  <img src="https://apnakabadewala.com/wp-content/uploads/2022/05/Black-and-White-Sleek-and-Simple-CopywriterEditor-Freelance-Website-4.png" alt="how er work"/>
</div> */}




          </div>
        </div>
      </div>
    </>
  );
};

export default BuySell;
