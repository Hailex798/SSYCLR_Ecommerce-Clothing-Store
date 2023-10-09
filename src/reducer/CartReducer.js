const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const {id, currColor, amount, singleProduct} = action.payload

            let existingProduct = state.cartItems.find((ele) => ele.id === id)

            if(existingProduct){
                let newCartItem = state.cartItems.map((ele) => {
                    if(ele.id === id){
                        let newAmount = ele.amount + amount >= ele.maxStock ? ele.maxStock : ele.amount + amount;
                        return {
                            ...ele,
                            amount: newAmount
                        }
                    }else{
                        return {
                            ...ele
                        };
                    }
                })
                return {
                    ...state,
                    cartItems: newCartItem
                }
            }else{
                let newCartItem = {
                    id: singleProduct.id + currColor,
                    name: singleProduct.name,
                    currColor,
                    amount,
                    image: singleProduct.image[0].url,
                    maxStock: singleProduct.stock,
                    price: singleProduct.price
                }
                return {
                    ...state,
                    cartItems: [...state.cartItems, newCartItem],
                    totalAmount: state.totalAmount + amount * singleProduct.price,
                    totalItems: state.totalItems + amount
                }
            }

        case "UPDATE_AMOUNT":
            var finalItems = 0;
            var finalAmount = 0;
            let updatedCart = state.cartItems.map((ele) => {
                if(ele.id === action.payload.id){
                    finalItems += action.payload.amount;
                    finalAmount += (action.payload.amount * ele.price);
                    return {
                        ...ele,
                        amount: action.payload.amount
                    }
                }
                finalItems += ele.amount;
                finalAmount += (ele.amount * ele.price);
                return ele;
            })
            return {
                ...state,
                cartItems: updatedCart,
                totalItems: finalItems,
                totalAmount: finalAmount
            }
        case "REMOVE_ITEM":
            let cartItems = state.cartItems.filter((ele) => {
                return ele.id !== action.payload
            })
            var totalAmount = 0;
            var totalItems = 0;
            for(let i=0 ; i<cartItems.length ; i++){
                totalItems += cartItems[i].amount;
                totalAmount += (cartItems[i].price * totalItems);
            }
            return {
                ...state,
                cartItems,
                totalItems,
                totalAmount
            }
        case "CLEAR_CART":
            let newCart = []
            return {
                ...state,
                cartItems: newCart,
                totalItems: 0,
                totalAmount: 0
            }
        default:
            return state;
    }
}

export default CartReducer