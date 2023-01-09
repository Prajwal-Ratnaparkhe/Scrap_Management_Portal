import React, { useEffect } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import { useDispatch, useSelector } from "react-redux";
import {
  AddToCart,
  fetchAllProducts,
  RemoveCartItem,
} from "../Redux/reducer/ProductSlice";

const ProductItems = (props) => {
  const { carts } = useSelector((state) => state.products);

  let { itemimageUrl, title, heighlight1, description, price, id } = props;

  let extraPrice = parseInt( price*0.4 + price);
  let realPrice= parseInt(price*0.15 + price);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div
          className="container py-5"
          style={{ marginTop: "-90px", marginBottom: "-100px" }}
        >
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src={
                            !itemimageUrl
                              ? "https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"
                              : itemimageUrl
                          }
                          style={{ maxHeight: "250px" }}
                          alt="test"
                          className="w-100"
                        />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5>{!title ? "No data avaliable" : title}</h5>
                      <div className="d-flex flex-row my-3">
                        <div className="text-danger mb-1 me-2">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                      <div className="mt-1 mb-0 text-muted ">
                        <span className="text-primary"> ☆ </span>
                        <span>
                          <b> Category :</b>{" "}
                          {!heighlight1 ? "No data" : heighlight1}
                        </span>
                      </div>

                      <p className=" mb-4 mb-md-0 my-3">
                        {!description ? "No data avaliable" : description}
                      </p>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">
                          {!price ? "No price avaliable" : "₹" + realPrice}
                        </h4>
                        <span className="text-danger mx-1">
                          <s>{!price ? "No price avaliable" : "₹" + extraPrice }</s>
                        </span>
                      </div>
                      <h6 className="text-success">Free shipping </h6>{" "}
                      <LocalShippingIcon />
                      <div className="d-flex flex-column mt-4">
                        {carts.some((p) => p.price === price) ? (
                          <Button
                            className="btn btn-danger my-2"
                            onClick={() => dispatch(RemoveCartItem(id))}
                          >
                            Remove from Cart
                          </Button>
                        ) : (
                          <Button
                            className="btn btn-primary my-2"
                            // style={{color:"white"}}
                            type="button"
                            onClick={() => dispatch(AddToCart(id))}
                          >
                            {" "}
                            Add to cart <MDBIcon
                              fas
                              icon="shopping-cart"
                            />{" "}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductItems;
