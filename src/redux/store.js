import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './CartSlice'
import LightboxSlice from "./LightboxSlice";
export const store = configureStore({
    reducer: {
        cart: CartSlice,
        lightBox:LightboxSlice
    }
})