import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ProductItems from "./ProductItems";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../Redux/reducer/ProductSlice";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const Main = () => {
  const test = sessionStorage.getItem("Auth Token");
  const navigate = useNavigate();
  if (!test) {
    navigate("/login");
  }

  const [text, setText] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const { products, loading } = useSelector((state) => state.products);
  const { carts } = useSelector((state) => state.products);

  const gotologout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div>
        <div className="main-navbar shadow-sm sticky-top">
          <div className="top-navbar">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                  <h5 className="brand-name">SMP</h5>
                </div>
                <div className="col-md-5 my-auto">
                  <form role="search">
                    <div className="input-group">
                      <input
                        type="search"
                        placeholder="Search your product"
                        className="form-control"
                        value={text}
                        onChange={(event) => {
                          setText(event.target.value);
                        }}
                      />
                    </div>
                  </form>
                </div>
                <div className="col-md-5 my-auto">
                  <ul className="nav justify-content-end">
                    <li className="nav-item">
                      <Link to={"/cart"}>
                        <button
                          className="btn btn-primary my-2 my-sm-0  mx-3"
                          type="submit"
                        >
                          <i className="fa fa-shopping-cart"></i> :{carts.length}
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

        {loading && <h2 className="text-center">Loading..</h2>}

        {products &&
          products
            .filter((value) => {
              if (text === "") {
                return value;
              } else if (
                value.item_name.toLowerCase().includes(text.toLowerCase()) || value.category.toLowerCase().includes(text.toLowerCase())
              ) {
                return value;
              }

              else{
                <h1> No Item Found</h1>
              }
            })
            .map((element) => {
              return (
                <div>
                  <div className="card-body" key={element.id}>
                    <div>
                      <ProductItems
                        title={element.item_name}
                        price={element.price}
                        description={element.description}
                        itemimageUrl={element.img}
                        heighlight1={element.category}
                        id={element.id}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default Main;
