import React from "react"
import axios from "axios"
import Reducer from "../reducer/ProductReducer"

const AppContext = React.createContext();

const API = "https://api.pujakaitem.com/api/products"

const initialValue = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {}
}

const AppProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(Reducer, initialValue)

  const getProducts = async (url) => {
    dispatch({type: "SET_LOADING"});
    try{
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({type: "SET_API_DATA", payload: products});
    }catch{
      dispatch({type: "SET_API_ERROR"});
    }
  }
  const getSingleProduct = async (url) => {
    dispatch({type: "SET_SINGLE_LOADING"});
    try{
      const res = await axios.get(url);
      const singleProducts = await res.data;
      dispatch({type: "SET_SINGLE_DATA", payload: singleProducts});
    }catch{
      dispatch({type: "SET_SINGLE_ERROR"});
    }
  }
  
  React.useEffect(() => {
    getProducts(API)
  }, [])
    
  return (
    <AppContext.Provider value = {{...state, getSingleProduct}}>
        {children}
    </AppContext.Provider>
  )
}
//custom Hook
const useProductContext = () => {
  return React.useContext(AppContext);
}

export {AppContext, AppProvider, useProductContext};