import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, getTotals } from "../Redux/reducer/ProductSlice";
import { useNavigate } from "react-router";

const Success = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.products);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTotals());
  }, [carts, dispatch]);

  const mainpage = () => {
    navigate("/buysell");
  };

  return (
    <>
      <div className="success">
        <h2 style={{ marginBottom: "0.5rem", color: "#029e02" }}>
          Checkout Successful 🤩
        </h2>
        <p>Your order might take some time to process.</p>
        <p>Check your order status at your profile after about 10mins.</p>
        <p>
          Incase of any inqueries contact the support at{" "}
          <strong>support@SMP.com</strong>
        </p>
      </div>
      <center style={{ color: "#029e02" }}>
        <button onClick={() => mainpage()}> Click here to main page</button>
      </center>
    </>
  );
};

export default Success;
