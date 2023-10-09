import React from 'react'
import { useProductContext } from './ProductContext'
import Reducer from "../reducer/FilterReducer"

const FilterContext = React.createContext()

const initialValue = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  sortValue: "lowest",
  filters: {
    text: "",
    category: "All",
    company: "All",
    color: "All",
    price: 0,
    maxPrice: 0,
    minPrice: 0
  }
}

const FilterProvider = ({children}) => {
  const {products} = useProductContext()
  
  const [state, dispatch] = React.useReducer(Reducer, initialValue)
  
  // Set Grid View of Products
  const setGridView = () => {
    return dispatch({type: "SET_GRID_VIEW"})
  }
  // Set List View of Products
  const setListView = () => {
    return dispatch({type: "SET_LIST_VIEW"})
  }
  // Clear Filter Values
  const clearFilterValue = () => {
    return dispatch({type: "CLEAR_FILTER_VALUES"})
  }
  // Update FilterProducts based on Filters Change
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
  
    return dispatch({type: "UPDATE_FILTER_VALUES", payload: {name, value}})
  }
  // Sorting Function
  const sorting = (event) => {
    // Event Handling
    let value = event.target.value;
    return dispatch({type: "GET_SORT_VALUE", value: value})
  }
  //Sorting based on values
  React.useEffect(() => {
    dispatch({type: "UPDATE_FILTER_PRODUCTS"});
    dispatch({type: "SORTING_PRODUCTS"});
  }, [state.sortValue, products, state.filters])


  React.useEffect(() => {
    dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})
  }, [products])


  return (
    <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue, clearFilterValue}}>
      {children}
    </FilterContext.Provider>
  )
}

const useFilterContext = () => {
  return React.useContext(FilterContext);
}

export {useFilterContext, FilterProvider};