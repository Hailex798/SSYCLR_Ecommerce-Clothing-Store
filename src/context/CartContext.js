import React from 'react'
import Reducer from "../reducer/CartReducer"

const CartContext = React.createContext();

// Getting Data from Local Storage
const getLocalData = () => {
    let savedData = localStorage.getItem("Ssyclr")
    if(!savedData){
        return [];
    }else{
        return JSON.parse(savedData);
    }
}
const getTotalAmount = () => {
    let totalAmount = localStorage.getItem("Amount")
    if(!totalAmount){
        return 0;
    }else{
        return JSON.parse(totalAmount);
    }
}
const getTotalItems = () => {
    let totalItems = localStorage.getItem("Item")
    if(!totalItems){
        return 0;
    }else{
        return JSON.parse(totalItems);
    }
}
const initialState = {
    cartItems: getLocalData(),
    totalAmount: getTotalAmount(),
    totalItems: getTotalItems(),
    shippingFees: 50000
}

const CartProvider = ({children}) => {

    const [state, dispatch] = React.useReducer(Reducer, initialState)

    //Update the Cart Item Amount
    const setAmount = (id, amount, string) => {
        return dispatch({type: "UPDATE_AMOUNT", payload: {id, amount, string}})
    }
    //Remove the Cart Item 
    const removeItem = (id) => {
        return dispatch({type: "REMOVE_ITEM", payload: id})
    }
    //Empty the Cart
    const clearCart = () => {
        return dispatch({type: "CLEAR_CART"})
    }

    //Saving Cart Data to Local Storage
    React.useEffect(() => {
        localStorage.setItem("Ssyclr", JSON.stringify(state.cartItems));
        localStorage.setItem("Amount", JSON.stringify(state.totalAmount));
        localStorage.setItem("Item", JSON.stringify(state.totalItems));
    }, [state])

    // Get Details about the Product
    const addToCart = (id, currColor, amount, singleProduct) => {
        return dispatch({type: "ADD_TO_CART", payload: {id, currColor, amount, singleProduct}})
    }

    return(
        <CartContext.Provider value={{...state, addToCart, setAmount, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

//custom Hook
const useCartContext = () => {
    return React.useContext(CartContext);
  }

export { CartProvider, useCartContext };