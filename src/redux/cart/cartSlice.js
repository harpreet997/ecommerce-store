import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems : localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")): [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if(itemIndex >= 0)
            {
                state.cartTotalQuantity += 1
            toast.info("Quantity added successfully", {
                position: "top-center",
                autoClose: 2000
            })
            }
            else{
                state.cartItems.push(action.payload)
                state.cartTotalQuantity += 1
                toast.success("Product added successfully", {
                    position: "top-center",
                    autoClose: 2000
                } )
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            
        },
        removeToCart: (state, action) => {
            const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
            console.log(nextCartItems)
            state.cartItems = nextCartItems
            toast.error("Product deleted successfully", {
                position: "top-center",
                autoClose: 2000
            })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
    }
})
export default cartSlice.reducer
export const {addToCart, removeToCart} = cartSlice.actions