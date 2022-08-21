import { createSlice } from "@reduxjs/toolkit";
import products from "../Products";
const CartSlice = createSlice({
    name: "cart",
    initialState: {
        product: products,
        cart: [],
        amount: 0,
        total:0
    },
    reducers: {
        addtoCart: (state, action) => {
            if (state.cart.find((item) => item.id === action.payload)) {
                console.log("item already there");
            } else {
                let item = state.product.find((item) => item.id === action.payload)
                state.cart.push(item)
                item.amount = item.amount + 1;
            }
        },
        removeFromCart: (state, action) => {
            let item = state.product.find((item) => item.id === action.payload)
            item.amount = 0;
            state.cart = state.cart.filter((item)=>item.id !== action.payload)
        },
        increaseAmount: (state, action) => {
            const cartItem = state.cart.find((item) => item.id === action.payload)
            cartItem.amount = cartItem.amount + 1 
        },
        decreaseAmount: (state, action) => {
            const cartItem = state.cart.find((item) => item.id === action.payload)
            cartItem.amount = cartItem.amount - 1 
            if (cartItem.amount === 0) {
                state.cart = state.cart.filter((item) => item.id !== action.payload)
                let item = state.product.find((item) => item.id === action.payload)
                item.amount = 0;
            }
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0; 
            state.cart.filter((item) => {
                amount += item.amount;
                total += item.total;
                total = parseFloat(total.toFixed(0))
            })
            state.amount = amount
            state.total = total
        },

    }
})
export const {addtoCart,removeFromCart,calculateTotals,increaseAmount,decreaseAmount} = CartSlice.actions
export default CartSlice.reducer;