import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  products: [],
  carts: [],
};

// fetch all products

export const fetchAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("http://localhost:5000/products/product/allproducts");
    return res.data;
  }
);

const ProductSlice = createSlice({
  name: "products/allproducts",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const cartItem = state.products.find((item) => {
        return item.id === action.payload;
      });

      state.carts = [...state.carts,  cartItem];
    },

    RemoveCartItem: (state, action) => {
      const remailItems = state.carts.filter((item) => {
        return item.id !== action.payload;
      });
      state.carts = remailItems;
    },


///// May be not working

    getTotals(state, action) {
      let { total, quantity } = state.carts.reduce(
        (cartTotal, carts) => {
          const { price, cartQuantity } = carts;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },



    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("carts", JSON.stringify(state.carts));
     
    },


    
  },

  extraReducers: {
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
  },
});



// export const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         cart: state.cart.filter((c) => c.id !== action.payload.id),
//       };
    
//     default:
//       return state;
//   }
// };


export const { AddToCart, RemoveCartItem ,clearCart,getTotals} = ProductSlice.actions;
export default ProductSlice.reducer;
