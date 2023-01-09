import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducer/ProductSlice";

const store = configureStore({
    reducer:{
        products:ProductSlice,
    },
});


export default store;