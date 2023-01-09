import "./App.css";
import { Landing } from "./Components/Landing";
import GlobalStyles from "./styles/GlobalStyles";
import BuySell from "./Inner/BuySell";
import Sell from "./Inner/Sell";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Inner/Signup";
import { Login } from "./Inner/Login";
import Main from "./E-commerce/Main";
import Forgot from "./Inner/Forgot";
import Cart from "./E-commerce/Cart";
import Success from "./E-commerce/Success";
import NotFound from "./Components/NotFound";
import How from "./Inner/How";

function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/buysell" element={<BuySell />}></Route>
        <Route path="/sell" element={<Sell />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/buy" element={<Main />}></Route>
        <Route path="/forgot" element={<Forgot />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/how" element={<How />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
