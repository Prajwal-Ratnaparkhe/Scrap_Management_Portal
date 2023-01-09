import React from "react";
import axios from "axios";
import { url } from "../E-commerce/slice/api";
import { useSelector, useDispatch } from "react-redux";

const PayButton = ({ cartItems }) => {
  const { carts } = useSelector((state) => state.products);

  const handelcheckout = () => {
    console.log(cartItems);

    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cartItems,
        
        // userId: user.id,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <center style={{ padding: "30px" }}>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handelcheckout()}
        >
          {" "}
          Check Out
        </button>
      </center>
    </>
  );
};

export default PayButton;
