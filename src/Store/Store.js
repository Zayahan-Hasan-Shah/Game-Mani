import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Shopping-cart/CartSlice";
import cartUiSlice from "./Shopping-cart/CartUiSlice";

const Store = configureStore({
    reducer : {
        cart : cartSlice.reducer,
        cartUi : cartUiSlice.reducer
    }
})

export default Store
