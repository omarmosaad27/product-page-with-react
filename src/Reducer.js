export const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        return{...state,cart:[...state.cart,{...action.payload, amount:1}]}
    }
    if (action.type === "REMOVE_FROM_CART") {
        return { ...state, cart: state.cart.filter((c) => c.id !== action.payload.id) }
    }
    if (action.type === "INCREASE") {
        let tempCart = state.cart.map((item) => {
            if (item.id === action.payload) {
                return{...item, amount:item.amount + 1}
            }
            return item
        })
        return {...state,cart:tempCart}
    }
    if (action.type === "DECREASE") {
        let tempCart = state.cart.map((item) => {
            if (item.id === action.payload) {
                return{...item, amount:item.amount - 1}
            }
            return item
        }).filter((item)=> item.amount!==0) 
        return {...state,cart:tempCart}
    }
    
    return state;
}
